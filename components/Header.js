import Propic from '../images/Rectangle 90.png'
import mail from '../images/Mail.png'
import linkedin from "../images/linkedin.png"


function Header() {
return (
    <div className='container'>
      <div className="Bio">
      
    <img src= {Propic} className='profilepic' alt="Profile pic" />
    
      <h3 className='name1'>Laura Smith</h3>
      <div className='jobtitle1'>Frontend Developer</div>
      <a href="#" className='link1'>laurasmith.website</a>
      <div className="button1">
        <button className='mail1'> <img src= {mail} />Email</button>
        <button className='linkedin1'><img src={linkedin}/>Linkedin</button>
      </div>
      </div>
  
    
    </div>
)

}

export default Header;