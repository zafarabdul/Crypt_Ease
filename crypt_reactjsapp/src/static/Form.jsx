import '../App.css';
export default function Form(){
    const div_col={
        backgroundColor:"rgb(22, 22, 22)",
    }
    const form ={
        backgroundColor:"inherit",
        alignItem:"center",
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        minHeight:"30px",
    }
        return(
            <div style={div_col}>
                <form style={form}>
                    <div className="formEle">Id : <input type='text' required/></div>
                    <div className="formEle">Secret Number : <input type='text' required/></div>
                    <div className="formEle">Message : <input type='text' required/></div>
                    <button type="submit" id="Submit">submit</button>
                </form>
            </div>
        )
}