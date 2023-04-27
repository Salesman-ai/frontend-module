const EngineDisplacement = props =>{
    const changeEngine = event =>{
        props.engine(event.target.value)
    }
    return <div className="block">
      <label> Engine</label>
      <input
        type="number"
        min="0"
        step="0.1"
        max="20"
        value={props.value}
        onChange={changeEngine}
      ></input>
    </div>
}
export default EngineDisplacement