import React, {useEffect, useState} from 'react';


const ToggleButton = ({barnObject, barnComponent}) => {
  const [barnElement, setBarnElement] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Select the child element that we want to change and save to state
    const selectedObjects = [];
    barnObject.children.forEach((elem, idx) => {
      const lowerName = elem.name.toLowerCase();
      if (lowerName.indexOf(barnComponent) > -1) {
        selectedObjects.push(elem);
      }
    });
    
    setBarnElement(selectedObjects);
  }, []);
  
  // Toggle visibility of element
  const changeToggle = (event) => {
    const elemsToChange = {...barnElement}
    for(var elem in elemsToChange){
      elemsToChange[elem].visible = !isVisible;
    }
    setBarnElement(elemsToChange);
    setIsVisible(!isVisible);
  };


  return (
    <div>
        <h3>Toggle visibility of {barnComponent}</h3>
        <label>
          <input 
          type='radio'
          name={`toggleBtn${barnComponent}`}
          value='on'
          checked={isVisible}
          onChange={changeToggle}/>

          On
        </label>
        <label>
          <input 
          type='radio'
          name={`toggleBtn${barnComponent}`}
          value='off'
          checked={!isVisible}
          onChange={changeToggle}/>

          Off
        </label>
    </div>
  );
};

export default ToggleButton;
