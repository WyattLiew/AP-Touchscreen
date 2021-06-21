var scene1 = new THREE.Scene();
var container1 = document.getElementById('watchPage__whiteGold-Scene');
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// camera.position.z = 1000;
// scene.add(camera);
// scene.background = new THREE.Color( 0xffffff );
var camera1 = new THREE.PerspectiveCamera( 75, container1.clientWidth / container1.clientHeight, 1, 1000 );
    camera1.position.z = 200;
    // scene.add( camera );

var renderer1 = new THREE.WebGLRenderer( { alpha: true , canvas: watchPageCanvasWhiteGold } );
renderer1.setSize(container1.clientWidth, container1.clientHeight);
// renderer = new THREE.WebGLRenderer( { alpha: true } ); // init like this
renderer1.setClearColor( 0xffffff, 0 ); // second param i
// document.body.appendChild( renderer.domElement);

var geometry1 = new THREE.BoxGeometry (1,1,1);
var material1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
// mesh = new THREE.Mesh( geometry, material );
//     scene.add( mesh );

var controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);
controls1.enableDamping = true;
controls1.compingFactor = 0.25;
controls1.enableZoom = true;
// controls1.minDistance = 1.8;
// controls1.maxDistance =2.5;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30,100%,75%)'),1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240,100%,75%)'),1.0);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff,0.3);
backLight.position.set(100, 0, -100).normalize();

scene1.add(keyLight);
scene1.add(fillLight);
scene1.add(backLight);

var mtlLoader = new THREE.MTLLoader();
// mtlLoader.setTexturePath('/watch/');
mtlLoader.setPath('htc/');
mtlLoader.load('Bulp_polymsh1.mtl', function(materials) {
	materials.preload();

	var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
	objLoader.setPath('htc/');
	objLoader.load('Bulp_polymsh_detached.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	// objLoader.load('Bulp_polymsh_detached1.obj', function(object) {
	// 	object.position.y =0;
	// 	// object.position.z =10;
	// 	scene1.add(object);
	// });
	objLoader.load('Bulp_polymsh1.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh3.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh4.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh5.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh8.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh9.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh10.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
	objLoader.load('Bulp_polymsh11.obj', function(object) {
		object.position.y =0;
		// object.position.z =10;
		scene1.add(object);
	});
});


var animate1 = function() {
	requestAnimationFrame( animate1);
	controls1.update();
	renderer1.render(scene1,camera1);
};

animate1();
