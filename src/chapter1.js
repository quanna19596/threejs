import {
  AxesHelper,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Group,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  SRGBColorSpace,
  TextureLoader,
  LoadingManager,
  RepeatWrapping,
  MirroredRepeatWrapping,
  NearestFilter,
  SphereGeometry,
  PlaneGeometry,
  TorusGeometry,
  DoubleSide,
  MeshNormalMaterial,
  MeshMatcapMaterial,
  MeshDepthMaterial,
  MeshLambertMaterial,
  AmbientLight,
  PointLight,
  MeshPhongMaterial,
  Color,
  MeshToonMaterial,
  MeshStandardMaterial,
  EquirectangularReflectionMapping,
  MeshPhysicalMaterial
} from 'three';
import gsap from 'gsap';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { FontLoader, TextGeometry } from 'three/examples/jsm/Addons.js';

// // GUI
const gui = new GUI({
  width: 300,
  title: 'Debug UI',
  closeFolders: false
});

// // gui.hide();

// window.addEventListener('keydown', (event) => {
//   if (event.key === 'h') {
//     gui.show(gui._hidden);
//   };
// });

// const cubeTweaks = gui.addFolder('CUBE');
// cubeTweaks
//   .add(mesh.position, 'y')
//   .min(-3)
//   .max(3)
//   .step(0.01)
//   .name('elevation');

// cubeTweaks.add(mesh, 'visible');

// cubeTweaks.add(material, 'wireframe');

// cubeTweaks
//   .addColor(debugUIObject, 'color')
//   .onChange(() => {
//     material.color.set(debugUIObject.color);
//   });

// cubeTweaks.add(debugUIObject, 'spin');
// cubeTweaks
//   .add(debugUIObject, 'subdivision')
//   .min(1)
//   .max(20)
//   .step(1)
//   .onFinishChange(() => {
//     mesh.geometry = new BoxGeometry(1, 1, 1, debugUIObject.subdivision, debugUIObject.subdivision, debugUIObject.subdivision)
//   })

// Textures
// const loadingManager = new LoadingManager();

// loadingManager.onStart = () => { console.log('onStart') };
// loadingManager.onLoad = () => { console.log('onLoad') };
// loadingManager.onProgress = () => { console.log('onProgress') };
// loadingManager.onError = () => { console.log('onError') };

// const textureLoader = new TextureLoader(loadingManager);
// const doorColorTexture = textureLoader.load('./textures/door/color.jpg');
// doorColorTexture.colorSpace = SRGBColorSpace;

// const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg');
// doorAlphaTexture.colorSpace = SRGBColorSpace;

// const doorHeightTexture = textureLoader.load('./textures/door/height.jpg');
// doorHeightTexture.colorSpace = SRGBColorSpace;

// const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg');
// doorNormalTexture.colorSpace = SRGBColorSpace;

// const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg');
// doorAmbientOcclusionTexture.colorSpace = SRGBColorSpace;

// const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg');
// doorMetalnessTexture.colorSpace = SRGBColorSpace;

// const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg');
// doorRoughnessTexture.colorSpace = SRGBColorSpace;

// const matcapTexture = textureLoader.load('./textures/matcaps/1.png');
// matcapTexture.colorSpace = SRGBColorSpace;

// const gradientTexture = textureLoader.load('./textures/gradients/3.jpg');

// doorColorTexture.repeat.x = 2;
// doorColorTexture.repeat.y = 3;
// doorColorTexture.wrapS = MirroredRepeatWrapping; // or RepeatWrapping
// doorColorTexture.wrapT = MirroredRepeatWrapping; // or RepeatWrapping

// doorColorTexture.offset.x = 0.5;
// doorColorTexture.offset.y = 0.5;

// doorColorTexture.rotation = Math.PI / 4;
// doorColorTexture.center.x = 0.5;
// doorColorTexture.center.y = 0.5;

// doorColorTexture.generateMipmaps = false;
// doorColorTexture.minFilter = NearestFilter;
// doorColorTexture.magFilter = NearestFilter;





// Cursor
// const cursor = { x: 0, y: 0 };
// window.addEventListener('mousemove', (event) => {
//   cursor.x = event.clientX / sizes.width - 0.5;
//   cursor.y = -(event.clientY / sizes.height - 0.5);
// });





// Object
// const geometry = new BoxGeometry(1, 1, 1);
// const geometry = new BufferGeometry();
// const count = 50;
// const positionsArray = new Float32Array(count * 3 * 3);

// for (let index = 0; index < count * 3 * 3; index++) {
//   positionsArray[index] = Math.random() - 0.5;
  
// }

// const positionAttribute = new BufferAttribute(positionsArray, 3);
// geometry.setAttribute('position', positionAttribute);
// const debugUIObject = {
//   color: '#1d27b9',
//   subdivision: 2,
//   spin: () => { gsap.to(mesh.rotation, { y: mesh.rotation.y + Math.PI * 2 }) }
// };
// const material = new MeshBasicMaterial({ map: colorTexture });
// const mesh = new Mesh(geometry, material);
// // mesh.position.set(0.7, -0.6 , 1);





// Object Materials

// // MeshBasicMaterial
// const material = new MeshBasicMaterial();
// material.map = doorColorTexture;
// material.color = Color(0xff0000);
// material.wireframe = true;
// material.transparent = true;
// material.opacity = 0.5;
// material.alphaMap = doorAlphaTexture;
// material.side = DoubleSide;

// // MeshNormalMaterial
// const material = new MeshNormalMaterial();
// material.flatShading = true;

// // MeshMatcapMaterial
// const material = new MeshMatcapMaterial();
// material.matcap = matcapTexture;

// // MeshDepthMaterial
// const material = new MeshDepthMaterial();

// // MeshLambertMaterial
// // const material = new MeshLambertMaterial();

// // MeshPhongMaterial
// const material = new MeshPhongMaterial();
// material.shininess = 100;
// material.specular = new Color(0x1188ff);

// // MeshToonMaterial
// const material = new MeshToonMaterial();
// gradientTexture.minFilter = NearestFilter;
// gradientTexture.magFilter = NearestFilter;
// gradientTexture.generateMipmaps = false;
// material.gradientMap = gradientTexture;

// // MeshStandardMaterial
// const material = new MeshStandardMaterial();
// material.side = DoubleSide;
// material.metalness = 1;
// material.roughness = 1;
// material.map = doorColorTexture;
// material.aoMap = doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.1;
// material.metalnessMap = doorMetalnessTexture;
// material.roughnessMap = doorRoughnessTexture;
// material.normalMap = doorNormalTexture;
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture;

// gui.add(material, 'metalness').min(0).max(1).step(0.0001);
// gui.add(material, 'roughness').min(0).max(1).step(0.0001);

// // MeshPhysicalMaterial
// const material = new MeshPhysicalMaterial();
// material.side = DoubleSide;
// material.metalness = 0;
// material.roughness = 0;
// material.map = doorColorTexture;
// material.aoMap = doorAmbientOcclusionTexture;
// material.aoMapIntensity = 1;
// material.displacementMap = doorHeightTexture;
// material.displacementScale = 0.1;
// material.metalnessMap = doorMetalnessTexture;
// material.roughnessMap = doorRoughnessTexture;
// material.normalMap = doorNormalTexture;
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture;

// gui.add(material, 'metalness').min(0).max(1).step(0.0001);
// gui.add(material, 'roughness').min(0).max(1).step(0.0001);

// // // Clearcoat
// // material.clearcoat = 1;
// // material.clearcoatRoughness = 0;

// // gui.add(material, 'clearcoat').min(0).max(1).step(0.0001);
// // gui.add(material, 'clearcoatRoughness').min(0).max(1).step(0.0001);

// // // Sheen
// // material.sheen = 1;
// // material.sheenRoughness = 0.25;
// // material.sheenColor.set(1, 1, 1);

// // gui.add(material, 'sheen').min(0).max(1).step(0.0001);
// // gui.add(material, 'sheenRoughness').min(0).max(1).step(0.0001);
// // gui.addColor(material, 'sheenColor');

// // // Iridescense
// // material.iridescence = 1;
// // material.iridescenceIOR = 1;
// // material.iridescenceThicknessRange = [100, 800];

// // gui.add(material, 'iridescence').min(0).max(1).step(0.0001);
// // gui.add(material, 'iridescenceIOR').min(1).max(2.333).step(0.0001);
// // gui.add(material.iridescenceThicknessRange, '0').min(1).max(1000).step(1);
// // gui.add(material.iridescenceThicknessRange, '1').min(1).max(1000).step(1);

// Transmission
// material.transmission = 1;
// material.ior = 1.5;
// material.thickness = 0.5;

// gui.add(material, 'transmission').min(0).max(1).step(0.0001);
// gui.add(material, 'ior').min(1).max(10).step(0.0001);
// gui.add(material, 'thickness').min(0).max(1).step(0.0001);


// const sphere = new Mesh(new SphereGeometry(0.5, 64, 64), material);
// const plane = new Mesh(new PlaneGeometry(1, 1, 100, 100), material);
// const torus = new Mesh(new TorusGeometry(0.3, 0.2, 64, 128), material);

// sphere.position.set(-1.5, 0, 0);
// torus.position.set(1.5, 0, 0);




// Group
// const group = new Group();
// const cube1 = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: 0xff0000 }));
// const cube2 = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: 0x00ff00 }));
// const cube3 = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: 0x0000ff }));
// cube2.position.set(-2, 0, 0);
// cube3.position.set(2, 0, 0);
// group.position.set(0, 1, 0);
// group.scale.set(1, 2, 1);
// group.rotation.set(0, 1, 0);
// group.add(cube1, cube2, cube3);

// // Scale
// mesh.scale.set(2, 0.5, 0.5);

// // Rotation
// mesh.rotation.reorder('XYZ');
// mesh.rotation.set(1, 0.2, 0);






// Axes helper
const axesHelper = new AxesHelper();

// Sizes
const sizes = { width: window.innerWidth, height: window.innerHeight };
window.addEventListener('resize', (event) => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// window.addEventListener('dblclick', () => {
//   if (!document.fullscreenElement) {
//     canvas.requestFullscreen();
//   } else {
//     document.exitFullscreen();
//   }
// });

// Camera
const aspectRatio = sizes.width / sizes.height;
// const camera = new OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100);
const camera = new PerspectiveCamera(75, aspectRatio, 0.1, 100);
camera.position.set(1, 1, 2);
// camera.lookAt(mesh.position);

// Canvas
const canvas = document.getElementById('webgl');

// Scene
const scene = new Scene();
// scene.add(mesh);
// scene.add(group);
// scene.add(sphere, plane, torus);
// Lights
// const ambientLight = new AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const pointLight = new PointLight(0xffffff, 30);
// pointLight.position.set(2, 3, 4);
// scene.add(pointLight);

// Environment map
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) => {
//   environmentMap.mapping = EquirectangularReflectionMapping;
//   scene.background = environmentMap;
//   scene.environment = environmentMap;
// });

// Fonts
const fontLoader = new FontLoader();
const textureLoader = new TextureLoader();
const textMatcapTexture = textureLoader.load('/textures/matcaps/5.png');
const donutMatcapTexture = textureLoader.load('/textures/matcaps/1.png');
textMatcapTexture.colorSpace = SRGBColorSpace;
donutMatcapTexture.colorSpace = SRGBColorSpace;

fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
  const textGeometry = new TextGeometry('KHOAI', {
    font,
    size: 0.5,
    depth: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5
  });
  // textGeometry.computeBoundingBox();
  // textGeometry.translate(
  //   -textGeometry.boundingBox.max.x / 2,
  //   -textGeometry.boundingBox.max.y / 2,
  //   -textGeometry.boundingBox.max.z / 2,
  // )
  textGeometry.center();
  const textMaterial = new MeshMatcapMaterial({ matcap: textMatcapTexture });
  const text = new Mesh(textGeometry, textMaterial);
  scene.add(text);

  const donutMaterial = new MeshMatcapMaterial({ matcap: donutMatcapTexture });
  const donutGeometry = new TorusGeometry(0.3, 0.2, 20, 45);

  for (let i = 0; i < 200; i++) {
    const donut = new Mesh(donutGeometry, donutMaterial);
    donut.position.x = (Math.random() - 0.5) * 10;
    donut.position.y = (Math.random() - 0.5) * 10;
    donut.position.z = (Math.random() - 0.5) * 10;

    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;

    const scaleRandomValue = Math.random();
    donut.scale.x = scaleRandomValue;
    donut.scale.y = scaleRandomValue;
    donut.scale.z = scaleRandomValue;

    scene.add(donut);
    
  }
});

// const cube = new Mesh(
//   new BoxGeometry(1, 1, 1),
//   new MeshBasicMaterial()
// )

// scene.add(cube)

// scene.add(axesHelper);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new WebGLRenderer({
  canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Clock
const clock = new Clock();

// GSAP
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
// gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });
// gsap.to(mesh.position, { duration: 1, delay: 3, x: -2 });
// gsap.to(mesh.position, { duration: 1, delay: 4, x: 0 });

// Animations
const tick = () => {
  // Clock
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.cos(elapsedTime);
  // mesh.rotation.y = elapsedTime;
  // sphere.rotation.set(-0.15 * elapsedTime, 0.1 * elapsedTime, 0);
  // plane.rotation.set(-0.15 * elapsedTime, 0.1 * elapsedTime, 0);
  // torus.rotation.set(-0.15 * elapsedTime, 0.1 * elapsedTime, 0);

  // Update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  // Update controls
  controls.update();
  
  // console.log(cursor);
  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();