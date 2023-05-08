import Twitter from "./Files/2021 Twitter logo - black.png"
import Github from "./Files/github-mark.png"
import MailLogo from "./Files/pngwing.com.png"
import './Footer.css';


function Footer() {
    return (
        <div className="BottomBar">
          <div className="LinkContainer">
            <ul className="LinkList">
              <li className="LinkItems">Contact Us</li>
              <li className="LinkItems">About Us</li>
              <li className="LinkItems">Terms and Conditions</li>
            </ul>
          </div>
          <div className="SignatureContainer">
              <p>TimeShaper by Matthew Parkes</p>
              <p>A Timeline Creation App</p>
              <ul className="ImageLinkContainer">
                <img src={Twitter} className="SocialItem"></img>
                <img src={Github} className="SocialItem"></img>
                <img src={MailLogo}className="SocialItem"></img>
              </ul>
          </div>
        </div>
    );
  }
  
  export default Footer;
  