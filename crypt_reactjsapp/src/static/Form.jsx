import { useState } from 'react';
import '../App.css';
export default function Form(props){
        const del={
                height:"90px",
                width:"40vw",
        }
        const [resData,setResData] =useState('data');
        const [error, setError] = useState(null);
        // const handleSub = async (e)=>{
        //         e.preventDefault();
        //         try{
        //                 const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
        //                         method:'POST'
        //                 });
        //                 const result=await res.json();
        //                 setResData(result);
        //         }
        //         catch (err){

        //         }
        // }
        const handleMessageChange = (e) => {
                setResData((prev) => ({ ...prev, message: e.target.value }));
        };
        return(
                <form action={props.handleSub} onSubmit={props.handleSubmit}>
                        <h1>{props.head}</h1>
                        <p className="formEle">
                                {props.first}: <input type="text" name="id" required />
                        </p>
                        {props.second}: <input type="text" name="key" required />
                        <p className="formEle">
                        </p>
                        {(props.head == "Encrypt Data")?
                                <p className="formEle">
                                        Message: <textarea style={del} name="message" value={resData.message} onChange={handleMessageChange} required />
                                </p>
                        :<br/>}
                        <button type="submit" id="Submit">
                                {props.message}
                        </button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                </form>
        )
}