var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 30, 180);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xffffff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMapEnabled = true;

var light = new THREE.AmbientLight(0x2e2e2e);
scene.add(light);
var light = new THREE.DirectionalLight(0xcccccc, 1);
light.position.set(5, 5, 5);
scene.add(light);

var sunMesh = Planet.sun();
sunMesh.position.set(0, 0, 0);
scene.add(sunMesh);

var mercuryMesh = Planet.mercury();
mercuryMesh.position.set(50, 0, 0);
scene.add(mercuryMesh);

var venusMesh = Planet.venus();
venusMesh.position.set(65, 0, 0);
scene.add(venusMesh);

var earthMesh = Planet.earth();
earthMesh.position.set(80, 0, 0);
earthMesh.rotation.x = 0.2;
earthMesh.rotation.z = 0.3;
scene.add(earthMesh);
var earthCloud = Planet.earthCloud();
earthCloud.position.set(80, 0, 0);
earthCloud.rotation.x = 0.2;
earthCloud.rotation.z = 0.3;
scene.add(earthCloud);

var marsMesh = Planet.mars();
marsMesh.position.set(95, 0, 0);
marsMesh.rotation.x = 0.2;
marsMesh.rotation.z = 0.3;
scene.add(marsMesh);

var jupiterMesh = Planet.jupiter();
jupiterMesh.position.set(113, 0, 0);
jupiterMesh.rotation.z = 0.1;
scene.add(jupiterMesh);

var saturnMesh = Planet.saturn();
saturnMesh.position.set(135, 0, 0);
saturnMesh.rotation.y = 0.9;
saturnMesh.rotation.z = 0.7;
saturnMesh.receiveShadow = true;
saturnMesh.castShadow = true;
scene.add(saturnMesh);
var saturnRing = Planet.saturnRing();
saturnRing.position.set(135, 0, 0);
saturnRing.rotation.x = -1;
saturnRing.rotation.y = -0.5;
saturnRing.rotation.z = 0.2;
saturnRing.receiveShadow = true;
saturnRing.castShadow = true;
scene.add(saturnRing);

var uranusMesh = Planet.uranus();
uranusMesh.position.set(155, 0, 0);
uranusMesh.rotation.x = -1.5;
uranusMesh.rotation.z = 0.5;
uranusMesh.receiveShadow = true;
uranusMesh.castShadow = true;
scene.add(uranusMesh);
var uranusRing = Planet.uranusRing();
uranusRing.position.set(155, 0, 0);
uranusRing.receiveShadow = true;
uranusRing.castShadow = true;
scene.add(uranusRing);

var neptuneMesh = Planet.neptune();
neptuneMesh.position.set(170, 0, 0);
neptuneMesh.rotation.x = 0.2;
neptuneMesh.rotation.z = 0.3;
scene.add(neptuneMesh);

var controls = new THREE.OrbitControls(camera);
controls.update();

var render = function() {
	requestAnimationFrame(render);
	controls.update();
	renderer.render(scene, camera);
};

render();

scene.background = new THREE.CubeTextureLoader()
.setPath('image/cubemap/')
.load(
	[
		'px.png',
		'nx.png',
		'py.png',
		'ny.png',
		'pz.png',
		'nz.png'
	]
);
