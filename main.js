var updateFcts = [];
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(40, 50, 40);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0xffffff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMapEnabled = true;

var light = new THREE.AmbientLight(0x888888);
scene.add(light);
var light = new THREE.DirectionalLight(0xcccccc, 1);
light.position.set(5, 5, 5);
scene.add(light);


var sunMesh = Planet.sun();
sunMesh.position.set(-50, 0, 0);
scene.add(sunMesh);

var mercuryMesh = Planet.mercury();
mercuryMesh.position.set(0, 0, 0);
scene.add(mercuryMesh);

var venusMesh = Planet.venus();
venusMesh.position.set(15, 0, 0);
scene.add(venusMesh);

var earthMesh = Planet.earth();
earthMesh.position.set(30, 0, 0);
scene.add(earthMesh);
var earthCloud = Planet.earthCloud();
earthCloud.position.set(30, 0, 0);
scene.add(earthCloud);

var marsMesh = Planet.mars();
marsMesh.position.set(45, 0, 0);
scene.add(marsMesh);

var jupiterMesh = Planet.jupiter();
jupiterMesh.position.set(63, 0, 0);
scene.add(jupiterMesh);

var saturnMesh = Planet.saturn();
saturnMesh.position.set(85, 0, 0);
saturnMesh.receiveShadow = true;
saturnMesh.castShadow = true;
scene.add(saturnMesh);
var saturnRing = Planet.saturnRing();
saturnRing.position.set(85, 0, 0);
saturnRing.receiveShadow = true;
saturnRing.castShadow = true;
scene.add(saturnRing);

var uranusMesh = Planet.uranus();
uranusMesh.position.set(105, 0, 0);
uranusMesh.receiveShadow = true;
uranusMesh.castShadow = true;
scene.add(uranusMesh);
var uranusRing = Planet.uranusRing();
uranusRing.position.set(105, 0, 0);
uranusRing.receiveShadow = true;
uranusRing.castShadow = true;
scene.add(uranusRing);


var neptuneMesh = Planet.neptune();
neptuneMesh.position.set(120, 0, 0);
scene.add(neptuneMesh);


var controls = new THREE.OrbitControls(camera);
controls.update();

var animate = function() {
	requestAnimationFrame(animate);

	controls.update();
	renderer.render(scene, camera);
};

animate();

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
