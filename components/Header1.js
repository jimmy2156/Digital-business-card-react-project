
import Propic from "../images/Rectangle 90.png"
import Email from "../images/Mail.png"

function Header1() {
    return (
<div className="Header1">
    <div className="header1">
        <img src={Propic} alt="" />
        <h2 className="name2">Laura Smith</h2>
        <p className="title5">Frontend Developer</p>
        <a href="#" className="link2">laurasmith.website</a>
        <div className="button2">
            <button className="button11"><img src={Email} /> Email</button>
        </div>
    </div>
</div>
    )
}
export default Header1