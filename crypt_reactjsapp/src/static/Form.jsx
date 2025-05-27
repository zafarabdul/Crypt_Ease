import '../App.css';
export default function Form({head}){
        const del={
                height:"90px",
                width:"40vw",
        }
        return(
                <form>
                        <h1>Encrypt Data</h1>
                        <p className="formEle">Id : <input type='text' required/></p>
                        <p className="formEle">Secret Number : <input type='text' required/></p>
                        <p className="formEle">Message : <textarea style={del} type='textbox' required/></p>
                        <button type="submit" id="Submit">SAVE MESSAGE</button>
                </form>
        )
}