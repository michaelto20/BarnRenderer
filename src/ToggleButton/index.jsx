import React, {useEffect, useState} from 'react';


const ToggleButton = ({barnObject, barnComponent}) => {
  const [barnElement, setBarnElement] = useState([]);
  const [isOn, setIsOn] = useState(true);
  useEffect(() => {
    // Select the child element that we want to change and save to state
    const selectedObjects = []
    barnObject.children.forEach((elem, idx) => {
      if(elem.name.indexOf(barnComponent) > -1){
          selectedObjects.push(elem);
        }
      });

    setBarnElement(selectedObjects);
  },[])
  
  // Toggle visibility of element
  const changeToggle = (event) => {
    const elemsToChange = {...barnElement}

    if(Object.keys(elemsToChange).length > 1){
      for(var i = 0; i < Object.keys(elemsToChange).length; i++){
        console.log(elemsToChange[i].material[0].visible);
        elemsToChange[i].material.visible = !elemsToChange[i].material.visible;
        if(Array.isArray(elemsToChange[i].material)){
          // elemsToChange[i].material[0].visible = !elemsToChange[i].material[0].visible;
          console.log("got here");
          console.log(elemsToChange[i].material.length);
          console.log(elemsToChange[i].material[0].visible);
          for(var j = 0; j < elemsToChange[i].material.length; i++){
            console.log(`i: ${i}, j: ${j}`);
            console.log(elemsToChange[i].material[j].visible);
            elemsToChange[i].material[j].visible = !elemsToChange[i].material[j].visible;
            console.log(elemsToChange[i].material[j].visible);
          }
        }
      }
    }else{
      elemsToChange[0].material.visible = !elemsToChange[0].material.visible
    }
    setBarnElement(elemsToChange)
    setIsOn(!isOn);
  };


  return (
    <div>
        <h3>Toggle visibility of {barnComponent}</h3>
        <label>
          <input 
          type='radio'
          name={`toggleBtn${barnComponent}`}
          value='on'
          checked={isOn}
          onChange={changeToggle}/>

          On
        </label>
        <label>
          <input 
          type='radio'
          name={`toggleBtn${barnComponent}`}
          value='off'
          checked={!isOn}
          onChange={changeToggle}/>

          Off
        </label>
    </div>
  );
};

export default ToggleButton;
