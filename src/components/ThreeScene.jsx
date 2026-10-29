import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    let width = currentMount.clientWidth || 300;
    let height = currentMount.clientHeight || 300;
    const isMobile = window.innerWidth < 768;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(isMobile ? 55 : 50, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 5.2 : 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    currentMount.appendChild(renderer.domElement);

    // Groups
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Polyhedron (Icosahedron wireframe with tech vertices)
    const icoRadius = isMobile ? 1.3 : 1.4;
    const icoGeometry = new THREE.IcosahedronGeometry(icoRadius, 2);
    
    // Wireframe material - subtle cyan-slate glow
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.32
    });
    const icoMesh = new THREE.Mesh(icoGeometry, wireframeMaterial);
    mainGroup.add(icoMesh);

    // Inner glowing core
    const innerGeom = new THREE.IcosahedronGeometry(icoRadius * 0.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    mainGroup.add(innerMesh);

    // 2. Vertex Nodes
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: isMobile ? 0.055 : 0.05,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const vertexPoints = new THREE.Points(icoGeometry, pointsMaterial);
    mainGroup.add(vertexPoints);

    // 3. Orbiting Data Rings
    const ring1Geom = new THREE.TorusGeometry(icoRadius * 1.5, 0.012, 16, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.38
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(icoRadius * 1.68, 0.009, 16, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.28
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    mainGroup.add(ring2);

    // 4. Ambient Data Cloud Particles
    const particleCount = isMobile ? 120 : 180;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = (icoRadius * 1.2) + Math.random() * (icoRadius * 1.3);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particlesMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: isMobile ? 0.04 : 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particlesGeom, particlesMat);
    mainGroup.add(particleSystem);

    // Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousX = 0;
    let previousY = 0;

    // Desktop Mouse Handlers
    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      mouseX = (x / width) * 2 - 1;
      mouseY = -(y / height) * 2 + 1;

      if (isDragging) {
        const deltaX = event.clientX - previousX;
        const deltaY = event.clientY - previousY;
        mainGroup.rotation.y += deltaX * 0.007;
        mainGroup.rotation.x += deltaY * 0.007;
      }
      previousX = event.clientX;
      previousY = event.clientY;
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      previousX = e.clientX;
      previousY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Mobile Touch Handlers
    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        isDragging = true;
        setIsInteracting(true);
        previousX = e.touches[0].clientX;
        previousY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging || e.touches.length === 0) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - previousX;
      const deltaY = touch.clientY - previousY;

      mainGroup.rotation.y += deltaX * 0.008;
      mainGroup.rotation.x += deltaY * 0.008;

      previousX = touch.clientX;
      previousY = touch.clientY;
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Device Orientation / Gyroscope for Mobile Phones
    const handleOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null && !isDragging) {
        const tiltX = (e.gamma / 45) * 0.4;
        const tiltY = ((e.beta - 45) / 45) * 0.4;
        targetX = Math.max(-0.5, Math.min(0.5, tiltX));
        targetY = Math.max(-0.5, Math.min(0.5, tiltY));
      }
    };

    // Attach Listeners
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    currentMount.addEventListener('mousemove', handleMouseMove);
    currentMount.addEventListener('mousedown', handleMouseDown);
    currentMount.addEventListener('touchstart', handleTouchStart, { passive: true });
    currentMount.addEventListener('touchmove', handleTouchMove, { passive: true });

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    // Handle Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      if (width === 0 || height === 0) return;
      
      const newIsMobile = window.innerWidth < 768;
      camera.fov = newIsMobile ? 55 : 50;
      camera.position.z = newIsMobile ? 5.2 : 4.8;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse / orientation follow
      if (!window.DeviceOrientationEvent) {
        targetX = mouseX * 0.35;
        targetY = mouseY * 0.35;
      }

      if (!isDragging) {
        mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.04 + 0.004;
        mainGroup.rotation.x += (targetY - mainGroup.rotation.x) * 0.04;
      }

      // Rings
      ring1.rotation.z = elapsedTime * 0.28;
      ring2.rotation.z = -elapsedTime * 0.22;

      // Subtle pulse
      const scale = 1 + Math.sin(elapsedTime * 1.6) * 0.025;
      icoMesh.scale.set(scale, scale, scale);
      innerMesh.rotation.y -= 0.006;

      // Particle subtle rotation
      particleSystem.rotation.y = elapsedTime * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('deviceorientation', handleOrientation);

      if (currentMount) {
        currentMount.removeEventListener('mousemove', handleMouseMove);
        currentMount.removeEventListener('mousedown', handleMouseDown);
        currentMount.removeEventListener('touchstart', handleTouchStart);
        currentMount.removeEventListener('touchmove', handleTouchMove);
        if (renderer.domElement && currentMount.contains(renderer.domElement)) {
          currentMount.removeChild(renderer.domElement);
        }
      }

      icoGeometry.dispose();
      innerGeom.dispose();
      ring1Geom.dispose();
      ring2Geom.dispose();
      particlesGeom.dispose();
      wireframeMaterial.dispose();
      innerMat.dispose();
      ring1Mat.dispose();
      ring2Mat.dispose();
      pointsMaterial.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="three-canvas-container"
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: isInteracting ? 'grabbing' : 'grab',
        touchAction: 'none'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          pointerEvents: 'none',
          opacity: 0.8,
          background: 'rgba(9, 11, 16, 0.75)',
          padding: '3px 8px',
          borderRadius: '4px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#38bdf8' }} />
        Swipe / Drag 3D Core
      </div>
    </div>
  );
}
