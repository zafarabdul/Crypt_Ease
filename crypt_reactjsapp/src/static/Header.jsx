import '../App.css';
function Header(){
    const nav = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'sticky',
        top:'0px',
        padding:'30px 10vw',
    };

    const cryptease = {
        fontSize: '24px',
        fontWeight: 600,
        cursor:"pointer"
    };

return (
    <>
    <nav style={nav}>
        <div style={cryptease}>
                Crypt Ease
            </div>
            <div id="payment"> Buy Premium ID</div>
        </nav>
    </>
)
}
export default Header;