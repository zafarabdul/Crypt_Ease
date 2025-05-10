import '../App.css';
import { FaGithub, FaInstagram, FaFacebook, FaXTwitter } from 'react-icons/fa6';

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
            <div style={sectionStyle}>
                <h3 style={{ ...gradientText, ...titleStyle }}>Quick Links</h3>
                <ul style={linkList}>
                    <li><a href="#encrypt" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Encrypt</a></li>
                    <li><a href="#decrypt" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Decrypt</a></li>
                    <li><a href="#purchase" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Purchase ID</a></li>
                    <li><a href="#contact" style={linkStyle} onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color} onMouseLeave={(e) => e.target.style.color = '#ccc'}>Contact Me</a></li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h3 style={{ ...gradientText, ...titleStyle }}>About CryptEase</h3>
                <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6', marginRight: '10px' }}>
                    CryptEase provides a secure way to store and retrieve your encrypted messages. With advanced cryptography, 
                    your data is protected, and only you can access it using your unique ID and number. 
                    Experience secure communication and data privacy today!
                </p>
            </div>
            <div style={{ ...sectionStyle, marginTop: "20px" }}>
                <h3 style={{ ...gradientText, ...titleStyle }}>Social Media</h3>
                <div style={iconStyle}>
                    <a href="https://github.com/zafarabdul" style={{ color: '#ccc' }}><FaGithub /></a>
                    <a href="#" style={{ color: '#ccc' }}><FaInstagram /></a>
                    <a href="#" style={{ color: '#ccc' }}><FaFacebook /></a>
                    <a href="#" style={{ color: '#ccc' }}><FaXTwitter /></a>
                </div>
            </div>
        </footer>
    );
}