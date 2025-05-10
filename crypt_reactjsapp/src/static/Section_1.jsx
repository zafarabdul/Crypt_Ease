import '../App.css';
import Form from './Form';
export default function Section_1() {
    const size=390;
    const fst={
        backgroundColor:"black",
    }
    return (
        <div id="main">
            <div id="main_1">
                <Form head="Encrypt Data" style={fst} />
                <img src="/boy_1.png" alt="Lock Icon" height={size} width={400}/>
            </div>
            <div id="section2">
                <h>
                <h1>Decrypt Data</h1>
                <p>Save Your Message With High Security</p>
                </h>
            </div>
        </div>
    );
}
