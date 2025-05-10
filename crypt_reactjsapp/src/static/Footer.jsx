import '../App.css';
export default function Footer(){
    const z1={
        display:"flex",
        gap:"16px",
        fontSize:"larger",
        backgroundColor:" rgb(26, 26, 26)",
    }
    
    const col={
        backgroundColor:" rgb(26, 26, 26)",
    }
    return (
        <footer>
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li>Encrypt</li>
                    <li>Decrypt</li>
                    <li>Purchase Id</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <div style={z1}>
                <p><a href="https://github.com/zafarabdul"><i class="fa-brands fa-github"></i></a></p>
                <p><i class="fa-brands fa-instagram"></i></p>
                <p><i class="fa-brands fa-facebook"></i></p>
                <p><i class="fa-brands fa-x-twitter"></i></p>
                </div>
            </div>
        </footer>
    )
}