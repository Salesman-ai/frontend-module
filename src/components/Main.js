import Form from './Form'
import Result from './Result'
import {useState} from 'react'
const Main = () =>{
    const [result,setResult]=useState();
    const getResult = (data) =>{
        setResult(data);
    }
return (
<div className='row'>
<Form result={getResult}/>
<div className="right">
         <Result result={result}/>
</div>
</div>
)}
export default Main