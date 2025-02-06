// Préparer les loaders et exporters
import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

const loader = new PLYLoader();
const exporter = new GLTFExporter();

// Sélectionner le fichier .ply
document.getElementById('upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const plyData = e.target.result;

            // Charger le fichier PLY
            const geometry = loader.parse(plyData);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const mesh = new THREE.Mesh(geometry, material);

            // Exporter au format GLTF
            exporter.parse(
                mesh,
                function (gltf) {
                    // Convertir en Blob et télécharger
                    const blob = new Blob([JSON.stringify(gltf)], { type: 'application/json' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'model.gltf';
                    link.click();
                },
                { binary: false }
            );
        };

        reader.readAsArrayBuffer(file);
    }
});
