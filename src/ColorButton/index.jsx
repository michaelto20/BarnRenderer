import React, {useEffect, useState} from 'react';

const colorHexMapping = {
  'default': 0XABB0B9,
  'red': 0xff0000,
  'blue': 0x0000ff,
  'green': 0x00ff00
}

const ColorChangingButton = ({barnObject, barnComponent}) => {
  const [barnElement, setBarnElement] = useState();
  useEffect(() => {
    // Select the child element that we want to change the color of and save to state
    barnObject.children.forEach((elem, idx) => {
      if(elem.name.indexOf(barnComponent) > -1){
        // verify we aren't selecting the window embedded in the wall
        if(!elem.name.indexOf('window')){
          setBarnElement(elem);
        }
      }
    });

  },[])
  
  // When user clicks an option in the dropdown, set the color on the element in state
  const changeColorClick = (event) => {
    const selectedColor = event.target.value;
    const elemToChange = {...barnElement}

    // Some barn components have multiple materials which are an array and some aren't,
    // need to handle both cases
    if(Array.isArray(elemToChange.material)){
      for(var i = 0; i < elemToChange.material.length; i++){
        elemToChange.material[i].color.set(colorHexMapping[selectedColor]);
      }
    }else{
      elemToChange.material.color.set(colorHexMapping[selectedColor]);
    }
  };


  return (
    <div>
        <h3>Select a color for the {barnComponent}</h3>
        <select onChange={changeColorClick}>
            <option value='default'>-- Select --</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
        </select>
    </div>
  );
};

export default ColorChangingButton;
