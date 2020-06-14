// Mercury
var geometry = new THREE.RingGeometry(49.5, 50, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,	
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Venus
var geometry = new THREE.RingGeometry(64.5, 65, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Earth
var geometry = new THREE.RingGeometry(79.5, 80, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Mars
var geometry = new THREE.RingGeometry(94.5, 95, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Jupiter
var geometry = new THREE.RingGeometry(112.5, 113, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Saturn
var geometry = new THREE.RingGeometry(134.5, 135, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Uranus
var geometry = new THREE.RingGeometry(154.5, 155, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));

// Neptune
var geometry = new THREE.RingGeometry(169.5, 170, 512);
var material	= new THREE.MeshPhongMaterial({
		side		: THREE.DoubleSide,
		transparent	: true,
		opacity		: 0.5,
	});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.lookAt(new THREE.Vector3(0, 1, 0));