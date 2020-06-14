// planet viewpoint function
var sun = function() {
	requestAnimationFrame(render);
	camera.position.set(51, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var mercury = function() {
	requestAnimationFrame(render);
	camera.position.set(52, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var venus = function() {
	requestAnimationFrame(render);
	camera.position.set(70, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var earth = function() {
	requestAnimationFrame(render);
	camera.position.set(86, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var mars = function() {
	requestAnimationFrame(render);
	camera.position.set(99, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var jupiter = function() {
	requestAnimationFrame(render);
	camera.position.set(128, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var saturn = function() {
	requestAnimationFrame(render);
	camera.position.set(152, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

var uranus = function() {
	requestAnimationFrame(render);
	camera.position.set(163, 0, 0.5);
	controls.update();
	renderer.render(scene, camera);
}

var neptune = function() {
	requestAnimationFrame(render);
	camera.position.set(177, 0, 0);
	controls.update();
	renderer.render(scene, camera);
}

// look around function
var start = 0;
var add = 0.004;
var timerView = null;

var lookAround = function() {
	camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.position.x = 240 * Math.sin(start);
    camera.position.z = 240 * Math.cos(start);
    start += add;
}

var view = function() {
	camera.position.set(0, 80, 240);
    requestAnimationFrame(render);
    timerView = setInterval(lookAround, 1);
    controls.update();
    renderer.render(scene, camera);
}

var stop2 = function() {
	clearInterval(timerView);
}