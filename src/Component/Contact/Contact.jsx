import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Contact.css'

// 00d2d273-5316-4dad-8a6e-aa8bd9e83cdc apikey

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "00d2d273-5316-4dad-8a6e-aa8bd9e83cdc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }


    return (
        <div id='contact' className='Contact'>
            <div className="Contact-title">
                <h1> Get In Touch </h1>
                <img src={theme_pattern} alt="img" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm curently available to take on new projects, so feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>vikasvikusoni019@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>8734082989</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Ahmedabad,Gujrat</p>
                        </div>

                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="enetr your name" name="name" />
                    
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="enetr your email" name="email" />

                    <label htmlFor="">Write your message here</label>
                    <textarea rows="8" placeholder="enetr your message" name="message" />

                    <button type='submit' className='contact-submit'>Submit Now</button>

                </form>

            </div>
        </div>
    )
}

export default Contact