import '../App.css';

export default function Footer() {
    const footerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "40px 10vw",
        backgroundColor: "#111",
        color: "#fff",
        flexWrap: "wrap",
        borderTop: "1px solid #222",
        fontFamily: "'Roboto', sans-serif",
    };

    const sectionStyle = {
        flex: "1",
        minWidth: "220px",
        marginBottom: "20px",
    };

    const titleStyle = {
        fontSize: "22px",
        marginBottom: "12px",
        fontWeight: "600",
        letterSpacing: "1px",
    };

    const iconStyle = {
        display: "flex",
        gap: "16px",
        fontSize: "24px",
        marginTop: "10px",
    };

    return (
        <footer style={footerStyle}>
            <div style={sectionStyle}>
                <h3 style={titleStyle}>Social Media</h3>
                <div style={iconStyle}>
                    <a href="https://github.com/zafarabdul" style={{ color: '#ccc' }}>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="#" style={{ color: '#ccc' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="#" style={{ color: '#ccc' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
                    </a>
                    <a href="#" style={{ color: '#ccc' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" style={{ width: '24px', height: '24px' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}