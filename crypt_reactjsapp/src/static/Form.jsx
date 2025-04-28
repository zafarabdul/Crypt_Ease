export default function Form(){
    let show=true;
    const form ={
        alignItem:"center",
        display:"flex",
        flexDirection:"column",
        maxWidth:"70%",
        minHeight:"30px",
        border:"1px solid white",
        borderRadius:"6px",
    }
    if(show){
        return(
            <div>
                <form style={form}>
                    <div>Id : <input type='text' required/></div>
                    <div>Secret Number : <input type='text' required/></div>
                    <div>Message : <input type='text' required/></div>
                </form>
            </div>
        )
    }
}