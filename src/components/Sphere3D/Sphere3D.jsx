import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Sphere3D.css';

const Sphere3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Add renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);

    // Create glowing material
    const material = new THREE.MeshPhongMaterial({
      color: 0x4a90e2,
      emissive: 0x112244,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });

    // Create sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Add directional light for glow effect
    const directionalLight = new THREE.DirectionalLight(0x4a90e2, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add point light for extra glow
    const pointLight = new THREE.PointLight(0x4a90e2, 1, 100);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Mouse move handler
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotationRef.current.x = mouseRef.current.y * 0.5;
      targetRotationRef.current.y = mouseRef.current.x * 0.5;
    };

    // Add mouse event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (sphereRef.current) {
        // Continuous spinning
        sphereRef.current.rotation.x += 0.005;
        sphereRef.current.rotation.y += 0.01;

        // Smooth mouse interaction
        sphereRef.current.rotation.x += (targetRotationRef.current.x - sphereRef.current.rotation.x) * 0.05;
        sphereRef.current.rotation.y += (targetRotationRef.current.y - sphereRef.current.rotation.y) * 0.05;

        // Pulsing glow effect
        const time = Date.now() * 0.001;
        material.emissive.setHSL(0.6, 0.5, 0.1 + Math.sin(time * 2) * 0.05);
        pointLight.intensity = 1 + Math.sin(time * 3) * 0.3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="sphere-container" />;
};

export default Sphere3D;