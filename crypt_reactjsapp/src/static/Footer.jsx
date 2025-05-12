import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';
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

    const linkList = {
        listStyle: "none",
        padding: 0,
        lineHeight: "1.8",
    };

    const iconStyle = {
        display: "flex",
        gap: "16px",
        fontSize: "24px",
        marginTop: "10px",
    };

    const gradientText = {
        background: "linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(255,0,255,1) 100%)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontWeight: "bold",
    };

    const linkStyle = {
        color: "#ccc",
        textDecoration: "none",
        transition: "color 0.3s ease",
    };

    const linkHoverStyle = {
        color: "#00f4ff", // Light cyan color on hover
    };

    return (
        <footer style={footerStyle}>
            <div style={{...sectionStyle, marginLeft: '200px', marginRight: '20px'}}>
                <h3 style={{ ...gradientText, ...titleStyle }}>Quick Links</h3>
                <ul style={{...linkList, marginLeft: '20px',}}>
                    <li><a href="#encrypt" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Encrypt</a></li>
                    <li><a href="#decrypt" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Decrypt</a></li>
                    <li><a href="#purchase" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Purchase ID</a></li>
                    <li><a href="#contact" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Contact Me</a></li>
                </ul>
            </div>
            <div style={{...sectionStyle , marginRight: '180px',textAlign: 'center'}}>
                <h3 style={{ ...gradientText, ...titleStyle }}>About CryptEase</h3>
                <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' , marginRight: '10px' }}>
                    CryptEase provides a secure way to store and retrieve your encrypted messages. With advanced cryptography, 
                    your data is protected, and only you can access it using your unique ID and number. 
                    Experience secure communication and data privacy today!
                </p>
            </div>
            <div style={sectionStyle}>
                <h3 style={{ ...gradientText, ...titleStyle }}>Social Media</h3>
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svghttps://www.google.com/url?sa=i&url=https%3A%2F%2Fpenji.co%2Ftwitters-new-x-logo%2F&psig=AOvVaw1jrpRspKOlcNn174a-XzRZ&ust=1747160624506000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDcitbGno0DFQAAAAAdAAAAABAL" alt="Twitter" style={{ width: '24px', height: '24px' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
