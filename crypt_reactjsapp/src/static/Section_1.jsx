import Form from './Form.jsx';
export default function Section_1() {
    const size=190;
    const image={
        
    }
    return (
        <div>
            <div id="section1">
            <span id="s1e1">
                <h1>Decrypt Data</h1>
                <Form/>
            </span>
            <img src="/boy_1.png" alt="Lock Icon" height={size} width={size} style={image}/>
            </div>
        </div>
    );
}
