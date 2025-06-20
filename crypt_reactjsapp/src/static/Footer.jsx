
import "../App.css";
const footr = {
    display:"flex",
    justifyContent:"space-between",
    gap:"2vw",
    padding:"3vh 2vw",
};
const icon={
    display:"flex",
    gap:"2vw",
};
export default function Footer() {
  return (
    <footer >
      <section style={footr}>
        <div id="ql">
          <h3 style={{ color: 'aqua' }}>Quick Links</h3>
          <p><a href="#encrypt">Encrypt</a></p>
          <p><a href="#decrypt">Decrypt</a></p>
          <p><a href="#purchase">Purchase</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
        <div id="con">
          <h3 style={{ color: 'aqua', }}>About Service</h3>
          <p  style={{ maxWidth: '50vw', textSize:'5%'}}>CryptEase provides a secure and fastest way to store and retrieve your encrypted text . With advanced cryptography, your data is protected, and only you can access it using your unique ID and number. 
                    Experience secure storage and data privacy today!</p>
        </div>
        <div id="soc">
          <h3 style={{ color: 'aqua' }}>Social Media</h3>
          < div style={icon}><p><a href="https://github.com/zafarabdul"><i class="fa-brands fa-github"></i></a></p>
                            <p><i class="fa-brands fa-instagram"></i></p>
                            <p><i class="fa-brands fa-facebook"></i></p>
                            <p><i class="fa-brands fa-x-twitter"></i></p></div>
        </div>
      </section>
    </footer>
  );
}