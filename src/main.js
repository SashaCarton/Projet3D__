// import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.querySelector('#app').appendChild(renderer.domElement);

// OrbitControls setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI;
controls.minDistance = 1;
controls.maxDistance = 50;

// Stats setup
const stats = new Stats();
document.querySelector('#app').appendChild(stats.dom);

// Lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(-5, -5, -5);
scene.add(directionalLight2);

// Camera position
camera.position.set(5, 5, 5);
controls.update();

// Ground plane
const groundGeometry = new THREE.PlaneGeometry(100, 100);
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080,
    roughness: 0.8,
    metalness: 0.2
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// PLY loader
const loader = new PLYLoader();
loader.load('/17 coin verdure.ply', function (geometry) {
    geometry.computeVertexNormals();

    // Utiliser PointsMaterial pour afficher le modèle en tant que points colorés
    const pointsMaterial = new THREE.PointsMaterial({ size: 0.01, vertexColors: true }); // Taille des points et couleurs des sommets (optimisation)
    const points = new THREE.Points(geometry, pointsMaterial);

    points.castShadow = true;
    points.receiveShadow = true;

    // Centrer le modèle
    geometry.computeBoundingBox();
    const center = new THREE.Vector3();
    geometry.boundingBox.getCenter(center);
    geometry.center();

    // Rotation pour mettre le modèle droit
    points.rotation.x = Math.PI / 2; // Rotation de 90 degrés autour de l'axe X
    points.rotation.y = Math.PI; // Rotation de 180 degrés autour de l'axe Y

    // Ajuster l'échelle
    const box = new THREE.Box3().setFromObject(points);
    const size = box.getSize(new THREE.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z);
    const scale = 10 / maxSize;
    points.scale.multiplyScalar(scale);

    scene.add(points);

    // Ajuster la caméra
    const distance = maxSize * 1.5;
    camera.position.set(distance, distance, distance);
    camera.lookAt(scene.position);
    controls.update();
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    stats.update();
    renderer.render(scene, camera);
}

animate();