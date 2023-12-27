import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Aditya</h1>
          <p> Choose Your Favourate Destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"/>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"/>
          </a>
          <a href="/">
            <i className="fa-brands fa-snapchat-square"/>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"/>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licence</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms Of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Licence</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Suppoort</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
