import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Transforms
// mesh.position.x = 0.7
// mesh.position.y = -0.5
// mesh.position.z = 1
mesh.position.set(0.7, -0.5, 1)

// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

mesh.rotation.reorder('YXZ') //Changes the order that the rotations are applied for varying results
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

// Utilities
// console.log(mesh.position.length())
// console.log(mesh.position.distanceTo('Another object'))
// mesh.position.normalize() //Make length of object 1 from origin no matter where it is

const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(mesh.position) //Orient one object to another

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
