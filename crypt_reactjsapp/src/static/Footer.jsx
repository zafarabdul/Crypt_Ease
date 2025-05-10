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
        borderTop: "1px solid #222"
    };

    const sectionStyle = {
        flex: "1",
        minWidth: "200px",
        marginBottom: "20px"
    };

    const titleStyle = {
        fontSize: "20px",
        marginBottom: "12px",
        fontWeight: "600"
    };

    const linkList = {
        listStyle: "none",
        padding: 0,
        lineHeight: "1.8"
    };

    const iconStyle = {
        display: "flex",
        gap: "16px",
        fontSize: "20px",
        marginTop: "10px"
    };

    const gradientText = {
        background: "linear-gradient(90deg, rgba(0,240,255,1) 0%, rgba(255,0,255,1) 100%)",
        WebkitBackgroundClip: "text",
        color: "transparent",
        fontWeight: "bold"
    }

    return (
        <footer style={footerStyle}>
            <div style={sectionStyle}>
                <h3 style={gradientText}>Quick Links</h3>
                <ul style={linkList}>
                    <li><a href="#encrypt" style={{ color: '#ccc', textDecoration: 'none' }}>Encrypt</a></li>
                    <li><a href="#decrypt" style={{ color: '#ccc', textDecoration: 'none' }}>Decrypt</a></li>
                    <li><a href="#purchase" style={{ color: '#ccc', textDecoration: 'none' }}>Purchase ID</a></li>
                    <li><a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact Me</a></li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h3 style={gradientText}>Social Media</h3>
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

