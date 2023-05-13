import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
          <div className='NavContainer'>
           <h1 className="Title"><span className="accent">T</span>ime<span className="accent">S</span>haper</h1>
           <span className="NavBar"> 
                <div className="NonBox">About Us</div>
                <div className="NonBox">FAQs</div>
                <div className='Box'>
                  <Link className='ColouredBox' to="/login">Create</Link>
                </div>
                <div className='Box'>
                <Link className='ColouredBox' to="/login">Login</Link>
                </div>
            </span>
          </div>
        </header>
    );
  }
  
  export default Header;