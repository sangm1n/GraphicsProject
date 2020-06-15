Planet = {};

Planet.sun = function() {
	var geometry = new THREE.SphereGeometry(30, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/sunmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/sunmap.jpg");
	material.bumpScale = 0.1;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.mercury = function() {
	var geometry = new THREE.SphereGeometry(1, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/mercurymap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/mercurybump.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.venus = function() {
	var geometry = new THREE.SphereGeometry(2, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/venusmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/venusbump.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.earth = function() {
	var geometry = new THREE.SphereGeometry(2.5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/earthmap1k.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/earthbump1k.jpg");
	material.bumpScale = 0.3;
	material.specularMap = THREE.ImageUtils.loadTexture("image/earthspec1k.jpg");
	material.specular = new THREE.Color("gray");

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.earthCloud = function() {
	var geometry = new THREE.SphereGeometry(2.5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/earthcloudmap.jpg");
	material.side = THREE.DoubleSide;
	material.transparent = true;
	material.opacity = 0.4;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.mars = function() {
	var geometry = new THREE.SphereGeometry(1.5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/marsmap1k.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/marsbump1k.jpg");
	material.bumpScale = 0.1;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.jupiter = function() {
	var geometry = new THREE.SphereGeometry(7, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/jupitermap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/jupitermap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.saturn = function() {
	var geometry = new THREE.SphereGeometry(5, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/saturnmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/saturnmap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.saturnRing = function() {
	var texture = new THREE.TextureLoader().load("image/saturnringcolor.jpg");
	var geometry = new THREE.RingGeometry(7, 11, 512);
	var material = new THREE.ShaderMaterial({
		uniforms: {
		texture: { value: texture },
		innerRadius: { value: 7 },
		outerRadius: { value: 11 },
		uOpacity: { value: 0.7 }
	},
	vertexShader: `
		varying vec3 vPos;

		void main() {
			vPos = position;
			vec3 viewPosition = (modelViewMatrix * vec4(position, 1.)).xyz;
			gl_Position = projectionMatrix * vec4(viewPosition, 1.);
		}
	`,
	fragmentShader: `
		uniform sampler2D texture;
		uniform float innerRadius;
		uniform float outerRadius;
		uniform float uOpacity;

		varying vec3 vPos;

		vec4 color() {
			vec2 uv = vec2(0);
			uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
			if (uv.x < 0.0 || uv.x > 1.0) {
				discard;
			}

			vec4 pixel = texture2D(texture, uv);
			return pixel;
		}

		void main() {
			gl_FragColor = color() * uOpacity;
		}
	`,
	side : THREE.DoubleSide,
	transparent : true
	});

	var mesh = new THREE.Mesh(geometry, material);
	return mesh	
}

Planet.uranus = function() {
	var geometry = new THREE.SphereGeometry(3, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/uranusmap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/uranusmap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}

Planet.uranusRing = function() {
	var texture = new THREE.TextureLoader().load("image/uranusringcolor.jpg");
	var geometry = new THREE.RingGeometry(4, 6, 512);
	var material = new THREE.ShaderMaterial({
		uniforms: {
		texture: { value: texture },
		innerRadius: { value: 4 },
		outerRadius: { value: 6 },
		uOpacity: { value: 0.6 }
	},
	vertexShader: `
		varying vec3 vPos;

		void main() {
			vPos = position;
			vec3 viewPosition = (modelViewMatrix * vec4(position, 1.)).xyz;
			gl_Position = projectionMatrix * vec4(viewPosition, 1.);
		}
	`,
	fragmentShader: `
		uniform sampler2D texture;
		uniform float innerRadius;
		uniform float outerRadius;
		uniform float uOpacity;

		varying vec3 vPos;

		vec4 color() {
			vec2 uv = vec2(0);
			uv.x = (length(vPos) - innerRadius) / (outerRadius - innerRadius);
			if (uv.x < 0.0 || uv.x > 1.0) {
				discard;
			}

			vec4 pixel = texture2D(texture, uv);
			return pixel;
		}

		void main() {
			gl_FragColor = color() * uOpacity;
		}
	`,
	side : THREE.DoubleSide,
	transparent : true
	});

	var mesh = new THREE.Mesh(geometry, material);
	return mesh
}

Planet.neptune = function() {
	var geometry = new THREE.SphereGeometry(3, 32, 32);
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture("image/neptunemap.jpg");
	material.bumpMap = THREE.ImageUtils.loadTexture("image/neptunemap.jpg");
	material.bumpScale = 0.05;

	var mesh = new THREE.Mesh(geometry, material);
	return mesh;
}