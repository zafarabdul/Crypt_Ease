import '../App.css';
export default function Form(){
        return(
                <form>
                    <p className="formEle">Id : <input type='text' required/></p>
                    <p className="formEle">Secret Number : <input type='text' required/></p>
                    <p className="formEle">Message : <input type='textbox' required/></p>
                    <button type="submit" id="Submit">submit</button>
                </form>
        )
}