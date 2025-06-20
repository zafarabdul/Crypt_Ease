import '../App.css';
export default function Form(props){
        const del={
                height:"90px",
                width:"40vw",
        }
        return(
                <form>
                        <h1>{props.head}</h1>
                        <p className="formEle">{props.first} : <input type='text' required/></p>
                        <p className="formEle">{props.second} : <input type='text' required/></p>
                        <p className="formEle">Message : <textarea style={del} type='textbox' required/></p>
                        <button type="submit" id="Submit">{props.message}</button>
                </form>
        )
}