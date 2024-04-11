import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/vik.jpeg';
import cv from '../../assets/vikasCV.pdf';
import './Hero.css';

const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl = cv
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='hero' className='hero'>
      <img src={profile_img} alt="" id="img-radius" />
      <h1>im <span>Vikas Soni</span> , full stack developer based in India.</h1>
      <p>i am a full stack developer from india with 2 years of experience in companies like TCS, Infosys etc.</p>
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={onButtonClick}>My resume</div>
      </div>
    </div>
  )
}

export default Hero