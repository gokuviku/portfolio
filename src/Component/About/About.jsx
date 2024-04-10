import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/vikas-img (1).png';
import './About.css';

const About = () => {
  return (
    <div id='about' className='About'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="img" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>i am an experienced FrontEnd Developer</p>
            <p>my passion for front end is not only,but also enthusiasm and dedication i bring to each project.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p><hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS</p><hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years Of Experience</p>
        </div>
        {/* <hr /> */}
        <div className="about-achievement">
          <h1>39+</h1>
          <p>Projects Completed</p>
        </div>
        {/* <hr /> */}
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>

      </div>
    </div>
  )
}

export default About