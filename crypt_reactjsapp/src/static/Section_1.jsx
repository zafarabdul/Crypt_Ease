import '../App.css';
import Form from './Form';
export default function Section_1() {
    const size=290;
    return (
        <div id="main">
            <div id="section2">
                <h>
                <h1>Encrypt Data</h1>
                <p>Save Your Message With High Security</p>
                </h>
            </div>
            {/*<div id="section1">
            <span id="s1e1">
                <h1 id="h1tag">Decrypt Data</h1>
                <Form/>
            </span>
            </div> */}
            <div id="main_1">
                <Form/>
                <img src="/boy_1.png" alt="Lock Icon" height={size} width={400}/>
            </div>
        </div>
    );
}
