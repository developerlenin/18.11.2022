import logo from './logo.svg';
import './App.css';
import header from './header/header';
function App() {
  return (
    <div className='nav'>
    <div className='navone'>
       <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
       <div>
          <div className='search'>
             <form className='form-box'>
                <input className='input-box' type="text" placeholder="Facebook.." />
                <button className='class-button'>
                   <FontAwesomeIcon icon={faSearch} />
                </button>
             </form>
          </div>
       </div>
    </div>
    <div className="navtwo">
       <ul>
          <li>
             <FontAwesomeIcon icon={faHome} />
          </li>
          <li>
             <FontAwesomeIcon icon={faTv} />
          </li>
          <li>
             <FontAwesomeIcon icon={faBox} />
          </li>
          <li>
             <FontAwesomeIcon icon={faTv} />
          </li>
          <li>
             <FontAwesomeIcon icon={faBoxesPacking} />
          </li>
       </ul>
    </div>
    <div className='navthree'>
       <ul>
          <li>
             <FontAwesomeIcon icon={faFacebookMessenger}/>
          </li>
          <li>
             <FontAwesomeIcon icon={faBell}/>
          </li>
          <li>
             <FontAwesomeIcon icon={faUser}/>
          </li>
          <li></li>
       </ul>
    </div>
 </div>

   
  );
}

export default App;
