import '../App.css';
function Header(){
    const nav = {
        backgroundColor:"black",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'sticky',
        top:'0px',
        padding:'20px 10vw',
        zIndex:"10",
        margin:"-10px -10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };

    const cryptease = {
        fontSize: '17px',
        fontWeight: 300,
        cursor:"pointer"
    };

return (
    <>
    <nav style={nav}>
        <div style={cryptease}>
            <h1 className='gradient-text'>
                Crypt Ease
            </h1>
            </div>
            <div id="payment"> 
                <h1 style={cryptease}>
                    Buy Premium ID
                    </h1>
                    </div>
        </nav>
    </>
)
}
export default Header;