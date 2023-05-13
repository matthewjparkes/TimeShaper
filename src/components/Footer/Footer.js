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
                <a href="https://twitter.com/matthewparkes97"><img src={Twitter} className="SocialItem" ></img></a>
                <a href="https://github.com/matthewjparkes"><img src={Github} className="SocialItem"></img></a>
                <a href="mailto:matthew.parkes123@googlemail.com"><img src={MailLogo}className="SocialItem"></img></a>
              </ul>
          </div>
        </div>
    );
  }
  
  export default Footer;
  