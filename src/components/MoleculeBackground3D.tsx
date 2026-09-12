import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PRESET_MOLECULES } from '../data/moleculeData';
import { Molecule3DData } from '../types';

interface MoleculeBackground3DProps {
  interactive?: boolean;
  opacity?: number;
  speedMultiplier?: number;
  onSelectMolecule?: (mol: Molecule3DData) => void;
}

// Atom color helper according to CPK standards
const getAtomColor = (element: string): number => {
  switch (element.toUpperCase()) {
    case 'C': return 0x334155; // Dark slate grey for Carbon
    case 'H': return 0xe2e8f0; // Off-white/silver for Hydrogen
    case 'O': return 0xe11d48; // Crimson Red for Oxygen
    case 'N': return 0x2563eb; // Cobalt Blue for Nitrogen
    case 'S': return 0xeab308; // Yellow for Sulfur
    default: return 0x94a3b8; // Default Slate
  }
};

const getAtomRadius = (element: string): number => {
  switch (element.toUpperCase()) {
    case 'C': return 0.28;
    case 'H': return 0.18;
    case 'O': return 0.26;
    case 'N': return 0.27;
    case 'S': return 0.32;
    default: return 0.25;
  }
};

export const MoleculeBackground3D: React.FC<MoleculeBackground3DProps> = ({
  interactive = true,
  opacity = 0.85,
  speedMultiplier = 1.0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    // Light gray fog for seamless blending with #f3f4f6
    scene.fog = new THREE.FogExp2(0xf3f4f6, 0.035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 18);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0d9488, 0.8); // Subtle teal highlight
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // 5. Build 3D Molecule Groups
    const moleculeGroups: { group: THREE.Group; rotSpeedX: number; rotSpeedY: number; floatOffset: number; basePos: THREE.Vector3 }[] = [];

    // Create 5 floating instances in different 3D positions
    const positions = [
      new THREE.Vector3(-8.5, 3.5, -4),
      new THREE.Vector3(8.5, 4.0, -5),
      new THREE.Vector3(-7.0, -4.5, -3),
      new THREE.Vector3(7.5, -4.0, -4),
      new THREE.Vector3(0, 0, -8),
    ];

    PRESET_MOLECULES.forEach((molData, idx) => {
      const molGroup = new THREE.Group();

      // Geometries shared
      const bondGeo = new THREE.CylinderGeometry(0.06, 0.06, 1, 12);
      const bondMat = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.3,
        metalness: 0.1,
        transparent: true,
        opacity: opacity,
      });

      // Create Atoms
      molData.atoms.forEach((atom) => {
        const radius = getAtomRadius(atom.element);
        const atomGeo = new THREE.SphereGeometry(radius, 24, 24);
        const atomMat = new THREE.MeshStandardMaterial({
          color: getAtomColor(atom.element),
          roughness: 0.25,
          metalness: 0.15,
          transparent: true,
          opacity: opacity,
        });

        const sphere = new THREE.Mesh(atomGeo, atomMat);
        sphere.position.set(atom.x, atom.y, atom.z);
        molGroup.add(sphere);
      });

      // Create Bonds
      molData.bonds.forEach((bond) => {
        const a1 = molData.atoms[bond.from];
        const a2 = molData.atoms[bond.to];
        if (!a1 || !a2) return;

        const p1 = new THREE.Vector3(a1.x, a1.y, a1.z);
        const p2 = new THREE.Vector3(a2.x, a2.y, a2.z);

        const distance = p1.distanceTo(p2);
        const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        const bondMesh = new THREE.Mesh(bondGeo, bondMat);
        bondMesh.position.copy(midPoint);
        bondMesh.scale.set(1, distance, 1);

        // Align cylinder with vector between atoms
        const orientation = new THREE.Matrix4();
        const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
        const up = new THREE.Vector3(0, 1, 0);
        orientation.lookAt(p1, p2, up);

        // Rotate cylinder from default Y-up alignment
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(up, dir);
        bondMesh.setRotationFromQuaternion(quaternion);

        molGroup.add(bondMesh);
      });

      const basePos = positions[idx % positions.length].clone();
      molGroup.position.copy(basePos);

      // Scale group nicely
      molGroup.scale.set(0.95, 0.95, 0.95);

      scene.add(molGroup);

      moleculeGroups.push({
        group: molGroup,
        rotSpeedX: (Math.random() - 0.5) * 0.008 * speedMultiplier,
        rotSpeedY: (0.004 + Math.random() * 0.006) * speedMultiplier,
        floatOffset: Math.random() * Math.PI * 2,
        basePos,
      });
    });

    // Mouse listener for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize listener
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera tilt based on mouse
      camera.position.x += (mousePos.current.x * 1.5 - camera.position.x) * 0.03;
      camera.position.y += (-mousePos.current.y * 1.5 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      // Rotate & float each 3D molecule
      moleculeGroups.forEach(({ group, rotSpeedX, rotSpeedY, floatOffset, basePos }) => {
        group.rotation.x += rotSpeedX;
        group.rotation.y += rotSpeedY;

        // Gentle floating sine wave
        group.position.y = basePos.y + Math.sin(elapsedTime * 0.8 + floatOffset) * 0.35;
        group.position.x = basePos.x + Math.cos(elapsedTime * 0.5 + floatOffset) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, opacity, speedMultiplier]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: opacity }}
    />
  );
};
