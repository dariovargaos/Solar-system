var renderer = new THREE.WebGLRenderer();

//scena gdje se sve nalazi
var scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
  .setPath("textures/")
  .load([
    "stars.jpg",
    "stars.jpg",
    "stars.jpg",
    "stars.jpg",
    "stars.jpg",
    "stars.jpg",
  ]);

// kamera gleda sve objekte izmedju 0.1 do 2000 unit-a, perspektive camera nam daje dubinu
var camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

renderer.setSize(window.innerWidth, window.innerHeight); //settano da se prikaze na cijelu sirinu i visinu browsera

/*var axes = new THREE.AxesHelper(200);
scene.add(axes); // scene.add dodaje objekt na scenu */

const sunTexture = new THREE.TextureLoader().load("textures/sun.jpg");
const mercuryTexture = new THREE.TextureLoader().load("textures/mercury.jpg");
const venusTexture = new THREE.TextureLoader().load("textures/venus.jpg");
const earthTexture = new THREE.TextureLoader().load("textures/earth.jpg");
const moonTexture = new THREE.TextureLoader().load("textures/moon.jpg");
const marsTexture = new THREE.TextureLoader().load("textures/mars.jpg");
const jupiterTexture = new THREE.TextureLoader().load("textures/jupiter.jpg");
const saturnTexture = new THREE.TextureLoader().load("textures/saturn.jpg");
const ringTexture = new THREE.TextureLoader().load("textures/saturn ring.png");
const uranusTexture = new THREE.TextureLoader().load("textures/uranus.jpg");
const neptuneTexture = new THREE.TextureLoader().load("textures/neptune.png");

//Pivot points variables
var one, two, three, four, five, six, seven, eight, nine, ten;

//sun
var sunGeometry = new THREE.SphereGeometry(200, 30, 30); //width, height, lenght
var sunMaterial = new THREE.MeshLambertMaterial({ map: sunTexture });
var sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.x = 0;
sun.position.y = 0;
scene.add(sun);

//Making pivot points into 3D objects and making Sun its parent
one = new THREE.Object3D();
two = new THREE.Object3D();
three = new THREE.Object3D();
four = new THREE.Object3D();
five = new THREE.Object3D();
six = new THREE.Object3D();
seven = new THREE.Object3D();
eight = new THREE.Object3D();
nine = new THREE.Object3D();
ten = new THREE.Object3D();
sun.add(one, two, three, four, five, six, seven, eight, nine, ten);

//mercury
var mercuryGeometry = new THREE.SphereGeometry(4, 42, 20); //width, height, lenght
var mercuryMaterial = new THREE.MeshLambertMaterial({ map: mercuryTexture });
var mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.x = 250;
scene.add(mercury);

//venus
var venusGeometry = new THREE.SphereGeometry(7, 42, 20);
var venusMaterial = new THREE.MeshLambertMaterial({ map: venusTexture });
var venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.x = 300;
scene.add(venus);

//earth
var earthGeometry = new THREE.SphereGeometry(10, 42, 20);
var earthMaterial = new THREE.MeshLambertMaterial({ map: earthTexture });
var earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.x = 350;
scene.add(earth);

//moon
var moonGeometry = new THREE.SphereGeometry(2, 42, 20);
var moonMaterial = new THREE.MeshLambertMaterial({ map: moonTexture });
var moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.x = 360;
moon.position.y = 18;
scene.add(moon);

//mars
var marsGeometry = new THREE.SphereGeometry(5, 42, 20);
var marsMaterial = new THREE.MeshLambertMaterial({ map: marsTexture });
var mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.x = 430;
scene.add(mars);

//jupiter
var jupiterGeometry = new THREE.SphereGeometry(30, 42, 20);
var jupiterMaterial = new THREE.MeshLambertMaterial({ map: jupiterTexture });
var jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.x = 500;
scene.add(jupiter);

//saturn
var saturnGeometry = new THREE.SphereGeometry(20, 42, 20);
var saturnMaterial = new THREE.MeshLambertMaterial({ map: saturnTexture });
var saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.x = 600;
scene.add(saturn);

//saturn's ring
var ringGeometry = new THREE.TorusGeometry(30, 4, 2, 40); //size i broj poligona
var ringMaterial = new THREE.MeshBasicMaterial({
  map: ringTexture,
  side: THREE.DoubleSide,
});
var ring = new THREE.Mesh(ringGeometry, ringMaterial);
ring.position.x = 600;
scene.add(ring);

//uranus
var uranusGeometry = new THREE.SphereGeometry(23, 42, 20);
var uranusMaterial = new THREE.MeshLambertMaterial({ map: uranusTexture });
var uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.x = 700;
scene.add(uranus);

//neptune
var neptuneGeometry = new THREE.SphereGeometry(22, 42, 20);
var neptuneMaterial = new THREE.MeshLambertMaterial({ map: neptuneTexture });
var neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.x = 800;
scene.add(neptune);

//adding pivot points to planets
one.add(mercury);
two.add(venus);
three.add(earth);
four.add(mars);
five.add(jupiter);
six.add(saturn);
seven.add(ring);
eight.add(uranus);
nine.add(neptune);
ten.add(moon);

//spotlight
var spotLight = new THREE.SpotLight(0xffffff); //boja spotlight-a
spotLight.position.set(500, 500, 500); //pozicija spotlight-a x,y,z
scene.add(spotLight);

//postavke pogleda iz kamere
camera.position.x = 700;
camera.position.y = 300;
camera.position.z = 700;
camera.lookAt(scene.position); //gleda na srediste scene

//FirstPersonControls
var cameraControllsFirstPerson = new THREE.FirstPersonControls(camera); //instanciramo FirstPersonControls objekt koji je definiran u FPC skripti, passamo camera objekt
cameraControllsFirstPerson.lookSpeed = 0.05; //brzina kad okrecemo misem
cameraControllsFirstPerson.movementSpeed = 200; //brzina kretanja sa tipkovnicom

var clock = new THREE.Clock(); //novi Clock objekt

//renderScene funkciju browser kontinuirano zove
function renderScene() {
  // make updates to position, rotation of objects in the scene
  var delta = clock.getDelta(); //every time you call clock.getDelta it gives you the elapsed time from this current call to the previous call, it will give 5ms elapsed

  //Self rotation
  mercury.rotation.y += -0.005;
  venus.rotation.y += 0.004;
  earth.rotation.y += -0.006;
  moon.rotation.y += 0.006;
  mars.rotation.y += 0.007;
  jupiter.rotation.y += -0.008;
  saturn.rotation.y += 0.0009;
  uranus.rotation.y += 0.0006;
  neptune.rotation.y += 0.0009;

  //Around the sun rotation
  one.rotation.y += 0.005;
  two.rotation.y += 0.0009;
  three.rotation.y += 0.002;
  four.rotation.y += 0.0008;
  five.rotation.y += 0.004;
  six.rotation.y += 0.003;
  seven.rotation.y += 0.003;
  eight.rotation.y += 0.004;
  nine.rotation.y += 0.001;
  ten.rotation.y += 0.002;

  cameraControllsFirstPerson.update(delta); //delta is time elapsed from previous call to the render scene, uzet ce onih 5ms i issueat ce call to cameraFirstPersonControls.update, iskoristit ce tih 5ms da update-a poziciju svih stvari koje kamera vidjela
  renderer.clear();

  requestAnimationFrame(renderScene); //ovdje je kontinuirano zove
  renderer.render(scene, camera); //callamo renderer
}

$("#threejs").append(renderer.domElement); //u ovaj div id appendamo renderer
renderScene();
