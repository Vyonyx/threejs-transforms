import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Group
const group = new THREE.Group()
scene.add(group)

const createNewBox = () => {
  function randomValue() {
    return Math.floor(Math.random() * 2.5)
  }
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const box = new THREE.Mesh(geometry, material)
  box.position.set(randomValue(), randomValue(), randomValue())
  box.rotation.x = randomValue()
  box.rotation.y = randomValue()
  box.rotation.z = randomValue()

  return box
}

group.add(createNewBox())
group.add(createNewBox())
group.add(createNewBox())

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
// camera.lookAt(group.position)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
