import  '../App.css';

function Navbar() {
  return (
    <div>
      <nav>
        <div className ="logo">
        <img src="./brand_logo.png" alt= "Brand Logo"></img>
        </div>
        <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
        </nav>
        
     
    </div>
  );
}

export default Navbar;
