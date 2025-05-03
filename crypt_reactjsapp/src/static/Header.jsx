import '../App.css';
function Header(){
    const nav = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position:'sticky',
        top:'0px',
        padding:'30px 100px',
    };

    const cryptease = {
        fontSize: '24px',
        fontWeight: 600,
    };

return (
    <>
    <nav style={nav}>
        <div style={cryptease}>
                Crypt Ease
            </div>
            <div>Buy a Coffee</div>
        </nav>
    </>
)
}
export default Header;