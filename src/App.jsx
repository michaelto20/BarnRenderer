import { useEffect, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import Init from './Init/Init';
import ColorChangingButton from './ColorButton/index';
import ToggleButton from './ToggleButton/index';
import './App.css'; // Import your CSS file

function App() {
  const [barnObject, setBarnObject] = useState();

  useEffect(() => {
    const barnCanvas = new Init('barnCanvas');
    barnCanvas.initialize();
    barnCanvas.animate();

    // Set up the MTL Loader
    const mtlLoader = new MTLLoader();
    mtlLoader.setResourcePath('/src/assets/');
    mtlLoader.setPath('/src/assets/');
    mtlLoader.load('barn.mtl', (materials) => {
      // Set up the OBJ loader
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath('src/assets/');
      objLoader.load('barn.obj', (object) => {
        barnCanvas.scene.add(object);
        setBarnObject(object);
      });
    },
    function (xhr) {
      // Progress callback
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    function (error) {
      // Error callback
      console.error('Error loading MTL file:', error);
    }
    );
  }, []);

  return (
    <div id="app-container">
      {barnObject && (
        <div id='controls-container'>
          <div id="stacked-container">
            <div>
              <ColorChangingButton barnObject={barnObject} barnComponent="roof" />
            </div>
            <div>
              <ColorChangingButton barnObject={barnObject} barnComponent="frontWall" />
            </div>
            <div>
              <ColorChangingButton barnObject={barnObject} barnComponent="rightWall" />
            </div>
            <div>
              <ColorChangingButton barnObject={barnObject} barnComponent="leftWall" />
            </div>
            <div>
              <ColorChangingButton barnObject={barnObject} barnComponent="wainscotting" />
            </div>
          </div>
          <div id="toggle-container">
            <div>
              <ToggleButton barnObject={barnObject} barnComponent="rightWall" />
            </div>
            <div>
              <ToggleButton barnObject={barnObject} barnComponent="leftWall" />
            </div>
            <div>
              <ToggleButton barnObject={barnObject} barnComponent="wainscotting" />
            </div>
          </div>
        </div>
      )}
      <div id="canvas-container">
        <canvas id="barnCanvas" />
      </div>
    </div>
  );
}

export default App;
