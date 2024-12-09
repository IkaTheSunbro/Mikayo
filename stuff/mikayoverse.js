// Initialize the scene for Three.js
let scene, camera, renderer, heartMesh;

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Create the heart shape
    const heartGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const heartMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    heartMesh = new THREE.Mesh(heartGeometry, heartMaterial);
    scene.add(heartMesh);

    // Set up the camera
    camera.position.z = 50;

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        heartMesh.rotation.x += 0.01;
        heartMesh.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Transition to 3D Tab
function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('inactive');
    });
    document.getElementById(`${tabName}-tab`).classList.remove('inactive');
    document.getElementById(`${tabName}-tab`).classList.add('active');

    // If entering the 3D tab, initialize Three.js
    if (tabName === 'threejs') {
        initThreeJS();
    }
}

// Initialize with the first tab active
openTab('home');
