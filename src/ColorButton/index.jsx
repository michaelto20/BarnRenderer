import React from 'react';

const ColorChangingButton = (object) => {
  const handleClick = () => {
    console.log(object.barnObject);
    object.barnObject.children.forEach((elem, idx) => {
        if(elem.name.indexOf('roof') > -1){
            console.log(elem);
            elem.material[0].color.set(0xff0000);
        }
    });
    // barnObject['children'].forEach((idx, child) => {
    //     console.log("got here");
    //     if (child instanceof THREE.Mesh) {
    //       // Perform color change for the desired part
    //     }
    //   });
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
        }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default ColorChangingButton;
