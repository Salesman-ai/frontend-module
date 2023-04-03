import React, {useState} from 'react'
const EngineDisplacement = props =>{
    const [engine,setEngine] = useState('');
    const changeEngine = event =>{
        setEngine(event.target.value);
        props.engine(event.target.value)
    }
    return <div>
      <label> Engine Displacement</label>
      <input
        type="number"
        min="0"
        step="0.1"
        max="20"
        value={engine}
        onChange={changeEngine}
      ></input>
    </div>
}
export default EngineDisplacement