function Header(){
    const msct = {
        fontFamily: "Poppins, sans-serif",
        fontWeight: 800,
        fontStyle: "normal",
        fontSize: "20px",
    };
    return <>
        <div>
            <div className="cryptease"  style={msct}>
                <p>CryptEase</p>
            </div>
            <div>Buy a Coffee</div>
        </div>
    </>
}
export default Header