import { useEffect } from 'react';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import Init from './Init/Init';

function App() {
  useEffect(() => {
    const test = new Init('barnCanvas');
    test.initialize();
    test.animate();


    // Set up the MTL Loader
    const mtlLoader = new MTLLoader();
    mtlLoader.setResourcePath('/src/assets/')
    mtlLoader.setPath('/src/assets/')
    mtlLoader.load('barn.mtl', (materials) => {
      
      // Set up the OBJ loader
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath('src/assets/');
      objLoader.load('barn.obj', (object) => {
        test.scene.add(object);
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
    <div>
      <canvas id="barnCanvas" />
    </div>
  );
}

export default App;