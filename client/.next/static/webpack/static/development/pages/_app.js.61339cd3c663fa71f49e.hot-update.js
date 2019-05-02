webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./threejs/ThreeScene.js":
/*!*******************************!*\
  !*** ./threejs/ThreeScene.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var orbit_controls_es6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! orbit-controls-es6 */ "./node_modules/orbit-controls-es6/build/orbit-controls-es6.umd.js");
/* harmony import */ var orbit_controls_es6__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(orbit_controls_es6__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/nayara/git/sba/client/threejs/ThreeScene.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  width: calc(100vw - 40px);\n  height: calc(100vh - 40px);\n  pointer-events: none;\n  position: absolute;\n  overflow: hidden;\n  top: 20px;\n  left: 20px;\n  z-index: -1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var CanvasWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());

var Scene =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Scene, _Component);

  function Scene() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scene);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scene).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scene, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(CanvasWrapper, {
        ref: function ref(mount) {
          _this.mount = mount;
        },
        id: "three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var width = this.mount.clientWidth;
      var height = this.mount.clientHeight;
      var scene = new three__WEBPACK_IMPORTED_MODULE_7__["Scene"]();
      scene.background = new three__WEBPACK_IMPORTED_MODULE_7__["Color"](0xF8F8F8);
      var renderer = new three__WEBPACK_IMPORTED_MODULE_7__["WebGLRenderer"]({
        antialias: true
      });
      renderer.setSize(width, height);
      renderer.setClearColor(0xF8F8F8, 1.0);
      var dom = document.getElementById("three");
      dom.appendChild(renderer.domElement);
      var camera = new three__WEBPACK_IMPORTED_MODULE_7__["PerspectiveCamera"](35, width / height, 0.1, 1000);
      camera.position.z = 5;
      var controls = new orbit_controls_es6__WEBPACK_IMPORTED_MODULE_8___default.a(camera, renderer.domElement);
      controls.enabled = true;
      controls.maxDistance = 1500;
      controls.minDistance = 0;
      var geometry = new three__WEBPACK_IMPORTED_MODULE_7__["BoxGeometry"](0.5, 0.5, 0.5);
      var material = new three__WEBPACK_IMPORTED_MODULE_7__["MeshLambertMaterial"]({
        color: this.props.color
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_7__["Mesh"](geometry, material);
      cube.rotation.x = 1.9;
      cube.rotation.y = 0.7; // scene.add(cube);
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

      var light_p = new three__WEBPACK_IMPORTED_MODULE_7__["PointLight"](0xffffff);
      light_p.position.set(0, this.mount.clientWidth / 2, 500);
      scene.add(light_p);
      var light_a = new three__WEBPACK_IMPORTED_MODULE_7__["AmbientLight"](0xffffff, 0.6);
      scene.add(light_a);

      var animate = function animate() {
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.01;
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();
      this.cube = cube;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.color !== nextProps.color) {
        this.cube.material.color.setHex(nextProps.color);
      }
    }
  }]);

  return Scene;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Scene);

/***/ })

})
//# sourceMappingURL=_app.js.61339cd3c663fa71f49e.hot-update.js.map