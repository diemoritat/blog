import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";
import styled from "styled-components";

const CanvasWrapper = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  top: 20px;
  left: 20px;
  z-index: -1;
`

class Scene extends Component {
  render() {
    return <CanvasWrapper ref={mount => {this.mount = mount}} id="three" />;
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF8F8F8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xF8F8F8, 1.0);

    const dom = document.getElementById("three");
    dom.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.maxDistance = 1500;
    controls.minDistance = 0;

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshLambertMaterial({
      color: this.props.color
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.x = 1.9;
    cube.rotation.y = 0.7;
    // scene.add(cube);

    // const xS = 63, yS = 63;
    // terrainScene = THREE.Terrain({
    //     easing: THREE.Terrain.Linear,
    //     frequency: 2.5,
    //     heightmap: THREE.Terrain.DiamondSquare,
    //     material: new THREE.MeshBasicMaterial({color: 0x5566aa}),
    //     maxHeight: 100,
    //     minHeight: -100,
    //     steps: 1,
    //     useBufferGeometry: false,
    //     xSegments: xS,
    //     xSize: 1024,
    //     ySegments: yS,
    //     ySize: 1024,
    // });
    // Assuming you already have your global scene, add the terrain to it
    // scene.add(terrainScene);

    const light_p = new THREE.PointLight(0xffffff);
    light_p.position.set(0, this.mount.clientWidth / 2, 500);
    scene.add(light_p);

    const light_a = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(light_a);

    const animate = function() {

      cube.rotation.x += 0.001;
      cube.rotation.y += 0.01;
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    this.cube = cube;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.color !== nextProps.color) {
      this.cube.material.color.setHex(nextProps.color);
    }
  }
}

export default Scene;
