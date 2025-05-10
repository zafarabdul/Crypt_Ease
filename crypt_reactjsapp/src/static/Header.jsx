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
    };

    const cryptease = {
        fontSize: '24px',
        fontWeight: 600,
        cursor:"pointer"
    };

return (
    <>
    <nav style={{...nav, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
        <div style={cryptease}>
                Crypt Ease
            </div>
            <div id="payment"> Buy Premium ID</div>
        </nav>
    </>
)
}
export default Header;