import React, {useEffect, useState} from 'react';


const ToggleButton = ({barnObject, barnComponent}) => {
  const [barnElement, setBarnElement] = useState();
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    // Select the child element that we want to change the color of and save to state
    barnObject.children.forEach((elem, idx) => {
      if(elem.name.indexOf(barnComponent) > -1){
          setBarnElement(elem);
      }
    });

  },[])
  
  // When user clicks an option in the dropdown, set the color on the element in state
  const changeToggle = (event) => {
    console.log('got here');
    const selectedColor = event.target.value;
    const elemToChange = {...barnElement}
    console.log(elemToChange.visible);

    // Some barn components have multiple materials which are an array and some aren't,
    // need to handle both cases
    if(Array.isArray(elemToChange.material)){
      for(var i = 0; i < elemToChange.material.length; i++){
        elemToChange.visible = !elemToChange.visible;
      }
    }else{
      elemToChange.visible = !elemToChange.visible;
    }
    console.log(elemToChange.visible);
    setBarnElement(elemToChange)

    setIsOn(!isOn);
  };


  return (
    <div>
        <h3>Select to show/hide the {barnComponent}</h3>
        <input 
        type='radio'
        name='toggleBtn'
        value='on'
        checked={isOn}
        onChange={changeToggle}/>
        <input 
        type='radio'
        name='toggleBtn'
        value='off'
        checked={!isOn}
        onChange={changeToggle}/>
        
    </div>
  );
};

export default ToggleButton;
