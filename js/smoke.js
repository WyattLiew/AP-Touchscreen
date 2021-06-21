var camera, scene, renderer,
    geometry, material, mesh,container,particle;
 
init();
animate(); 

function init() {
    container = document.getElementById('homePage_scene');
    // stats = new Stats();
    // stats.setMode(0);
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    // document.body.appendChild(stats.domElement);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer({ canvas: homePageCanvas });
    renderer.setSize( container.clientWidth, container.clientHeight );

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );
 
    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    // scene.add( mesh );
    cubeSineDriver = 0;

    // textGeo = new THREE.PlaneGeometry(1000,1000);
    // THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    // textTexture = THREE.ImageUtils.loadTexture('assets/bg3.jpeg');
    // textMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    // bg = new THREE.Mesh(textGeo,textMaterial);
    // bg.position.z = 750;

    // scene.add(bg);
 
    textGeo = new THREE.PlaneGeometry(400,250);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture('assets/AP_BRAND_LOGOTYPE_WHITE.png');
    textMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 650;

    
    scene.add(text);

    // const ambient = new THREE.AmbientLight(0xffffff , 0);
    // scene.add(ambient);

    light = new THREE.DirectionalLight(0xffffff,3);
    light.position.set(-1,0,1);
    scene.add(light);
    // text.add(light);

  
    smokeTexture = THREE.ImageUtils.loadTexture('assets/Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0xe2d6c9,opacity:0.1, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];


    for (p = 0; p < 60; p++) {
        particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }
 
    // document.body.appendChild( renderer.domElement );
 
}

function animate() {
 
    // note: three.js includes requestAnimationFrame shim
    // stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
    // stats.end();
}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {
 
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );
 
}