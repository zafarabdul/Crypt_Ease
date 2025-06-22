import { useState } from 'react';
import '../App.css';
import Form from './Form';
export default function Section_1() {
    const size=390;
    const fst={
        backgroundColor:"black",
    }
    const [count,setCount] = useState(0);

    return (
        <div id="main">
            <div id="main_1">
                {count %2 ==0 ? <Form head="Decrypt Data" message="GET MESSAGE" first="Id" second="Secret Number" handleSub="GET" style={fst}/> : <Form head="Encrypt Data" message="SAVE MESSAGE" first="Id" second="Secret Number" handleSub="POST" style={fst}/> }
                {count %2 ==0 ? <img src="/boy_1.png" alt="Lock Icon" height={size} width={400}/>:<img src="/girl_1.png" alt="Lock Icon" height={size} width={360}/>}
            </div>
            <div id="section2" onClick={()=> setCount(count +1)}>
                <h>
                {count %2 == 0 ? <h1>Encrypt Data</h1> : <h1>Decrypt Data</h1> }
                <p>Save Your Message With High Security</p>
                </h>
            </div>
        </div>
    );
}
