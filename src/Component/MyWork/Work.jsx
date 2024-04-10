import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

import './Work.css'

const Work = () => {
  return (
      <div id='work' className='Work'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
              <img src={theme_pattern} alt="logo" />
        </div>
        <div className="mywork-container">
              {mywork_data.map((work, index)=>{
                return <img key={index} src={work.w_img} alt="img"/>
              })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
              <img src={arrow_icon} alt="icon" />
        </div>
      </div>
  )
}

export default Work