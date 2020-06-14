// Revolution (공전)
var mercuryOrbit, venusOrbit, earthOrbit, earthCloudOrbit, marsOrbit, jupiterOrbit,
	saturnOrbit, saturnRingOrbit, uranusOrbit, uranusRingOrbit, neptuneOrbit;
var orbits = [mercuryOrbit, venusOrbit, earthOrbit, earthCloudOrbit, marsOrbit, jupiterOrbit,
				saturnOrbit, saturnRingOrbit, uranusOrbit, uranusRingOrbit, neptuneOrbit];
var planets = [mercuryMesh, venusMesh, earthMesh, earthCloud, marsMesh, jupiterMesh,
				saturnMesh, saturnRing, uranusMesh, uranusRing, neptuneMesh, sunMesh];
var second = [0.0047, 0.0035, 0.003, 0.003, 0.0024, 0.0013, 
			0.001, 0.001, 0.0007, 0.0007, 0.0005];
var timerRevolution = null;

for (var i = 0; i < 11; i++) {
	orbits[i] = new THREE.Group();
	orbits[i].add(planets[i]);
	scene.add(orbits[i]);
}

var orbitRotate = function() {
	for (var i = 0; i < 11; i++) 
		orbits[i].rotation.y += second[i];
}

var revolution = function() {
	requestAnimationFrame(render);
	timerRevolution = setInterval(orbitRotate, 1);
	controls.update();
	renderer.render(scene, camera);
}

var stop = function() {
	clearInterval(timerRevolution);
}


// Rotation (자전)
var frameSecond = 60;
var rotateSpeed = [0.001, 0.001, 0.01, 0.01, 0.005, 0.05, 0.045, 0.045, 0.025, 0.025, 0.025, 0.02];

var rotation = function () {
	setTimeout(function() {
		 requestAnimationFrame(rotation); 
	}, 1000 / frameSecond);

	for (i = 0; i < 12; ++i){
		if (planets[i] == saturnRing || planets[i] == uranusRing) {
			planets[i].rotateZ(rotateSpeed[i]);
			continue;
		}
		planets[i].rotateY(rotateSpeed[i]);
	}

	renderer.render( scene, camera );
};

rotation();