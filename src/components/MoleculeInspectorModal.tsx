import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Atom, RotateCcw, X, Info, Sparkles, Move3d } from 'lucide-react';
import { PRESET_MOLECULES } from '../data/moleculeData';
import { Molecule3DData } from '../types';

interface MoleculeInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMoleculeId?: string;
}

const getAtomColor = (element: string): number => {
  switch (element.toUpperCase()) {
    case 'C': return 0x334155;
    case 'H': return 0xf1f5f9;
    case 'O': return 0xe11d48;
    case 'N': return 0x2563eb;
    case 'S': return 0xeab308;
    default: return 0x94a3b8;
  }
};

const getAtomRadius = (element: string): number => {
  switch (element.toUpperCase()) {
    case 'C': return 0.32;
    case 'H': return 0.20;
    case 'O': return 0.30;
    case 'N': return 0.31;
    case 'S': return 0.36;
    default: return 0.28;
  }
};

export const MoleculeInspectorModal: React.FC<MoleculeInspectorModalProps> = ({
  isOpen,
  onClose,
  initialMoleculeId = 'benzene'
}) => {
  const [selectedMol, setSelectedMol] = useState<Molecule3DData>(
    PRESET_MOLECULES.find((m) => m.id === initialMoleculeId) || PRESET_MOLECULES[0]
  );
  const [autoRotate, setAutoRotate] = useState(true);

  const canvasRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const molGroupRef = useRef<THREE.Group | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const container = canvasRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0d9488, 1.0);
    dirLight2.position.set(-5, -5, -4);
    scene.add(dirLight2);

    // Build Molecule Group
    const molGroup = new THREE.Group();
    molGroupRef.current = molGroup;

    const bondGeo = new THREE.CylinderGeometry(0.08, 0.08, 1, 16);
    const bondMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.2,
      metalness: 0.2,
    });

    selectedMol.atoms.forEach((atom) => {
      const radius = getAtomRadius(atom.element);
      const atomGeo = new THREE.SphereGeometry(radius, 32, 32);
      const atomMat = new THREE.MeshStandardMaterial({
        color: getAtomColor(atom.element),
        roughness: 0.2,
        metalness: 0.1,
      });

      const sphere = new THREE.Mesh(atomGeo, atomMat);
      sphere.position.set(atom.x, atom.y, atom.z);
      molGroup.add(sphere);
    });

    selectedMol.bonds.forEach((bond) => {
      const a1 = selectedMol.atoms[bond.from];
      const a2 = selectedMol.atoms[bond.to];
      if (!a1 || !a2) return;

      const p1 = new THREE.Vector3(a1.x, a1.y, a1.z);
      const p2 = new THREE.Vector3(a2.x, a2.y, a2.z);
      const distance = p1.distanceTo(p2);
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

      const bondMesh = new THREE.Mesh(bondGeo, bondMat);
      bondMesh.position.copy(midPoint);
      bondMesh.scale.set(1, distance, 1);

      const dir = new THREE.Vector3().subVectors(p2, p1).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion();
      quaternion.setFromUnitVectors(up, dir);
      bondMesh.setRotationFromQuaternion(quaternion);

      molGroup.add(bondMesh);
    });

    scene.add(molGroup);

    // Manual Drag Rotation Controls
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !molGroupRef.current) return;

      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      molGroupRef.current.rotation.y += deltaX * 0.01;
      molGroupRef.current.rotation.x += deltaY * 0.01;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (molGroupRef.current && autoRotate && !isDragging.current) {
        molGroupRef.current.rotation.y += 0.008;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.dispose();
    };
  }, [isOpen, selectedMol, autoRotate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Left Column: 3D Canvas Viewport */}
        <div className="md:w-7/12 bg-slate-900 relative flex flex-col items-center justify-center min-h-[320px] md:min-h-[460px] p-4 select-none">
          {/* Canvas */}
          <div ref={canvasRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

          {/* Controls Overlay */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-mono px-2.5 py-1 rounded-md flex items-center gap-1.5 backdrop-blur-md">
              <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              3D Interactive Model
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300 bg-slate-800/80 backdrop-blur-md px-3 py-2 rounded-xl border border-slate-700">
            <span className="flex items-center gap-1.5">
              <Move3d className="w-4 h-4 text-teal-400" />
              Click & Drag to Rotate 3D Molecule
            </span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className="px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-xs transition flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              {autoRotate ? 'Pause Auto-Spin' : 'Auto-Spin'}
            </button>
          </div>
        </div>

        {/* Right Column: Molecular Details & Tôn Đức Minh's Research Notes */}
        <div className="md:w-5/12 p-6 flex flex-col justify-between overflow-y-auto bg-slate-50">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono font-semibold text-teal-700 uppercase tracking-wider">
                  Chemistry Inspector
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">{selectedMol.name}</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Molecule Selector Tabs */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {PRESET_MOLECULES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMol(m)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                    selectedMol.id === m.id
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 my-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500 block">Formula</span>
                <span className="text-lg font-mono font-bold text-teal-800">{selectedMol.formula}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-xs text-slate-500 block">Molar Mass</span>
                <span className="text-sm font-semibold text-slate-800">{selectedMol.weight}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">{selectedMol.description}</p>

              {/* Relevance to Tôn Đức Minh */}
              <div className="p-3.5 bg-teal-50 border border-teal-200/80 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-800 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  Minh's Research Connection
                </div>
                <p className="text-xs text-teal-900 leading-relaxed font-medium">
                  {selectedMol.relevanceToMinh}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl transition"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
