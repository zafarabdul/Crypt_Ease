import '../App.css';
function changeForm(){

}
function Header(){
    const nav = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position:'sticky',
        top:'0px',
        padding:'10px',
    };

    const cryptease = {
        fontSize: '24px',
        fontWeight: 400,
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