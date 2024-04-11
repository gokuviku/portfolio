import footer_logo from '../../assets/name.png'
import user_icon from '../../assets/user_icon.svg'
import './Footer.css'


const Footer = () => {
    return (
        <div className='Footer'>
            <div id='footer' className="Footer-top">
                <div className="Footer-top-left">
                    <img src={footer_logo} alt="" className='logoSize'/>
                    <p>i am an experienced FrontEnd Developer</p>
                </div>

                <div className="Footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="footer-subscribe">Subscribe Now!</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    © 2024 Vikas Soni. All Rights Reserved.
                </div>

                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer