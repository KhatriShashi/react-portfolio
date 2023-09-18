import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {HiOutlineMail} from 'react-icons/hi';
import {FaLocationArrow,FaWhatsapp} from 'react-icons/fa'
import './Home.scss';
// text typewritter
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// image
import profile from '../assets/images/profile-pic.png';
export default function Home() {
  const [text] = useTypewriter({
    words: [' Web Developer', ' Programmer'],
    loop: {},
  });
  return (
    <Container fluid>
      <Row className='profile-page'>
        <Col xs={12} md={12} lg={4} className='profile-pic'>
          <div className="image">
            <img src={profile} alt="profile" />
          </div>
        </Col>
        <Col xs={12} md={12} lg={8} className='profile-des'>
          <div className='profile-details'>
            <h6>Hello Everyone 👋</h6>
            <h1>I'm Shashi Khatri</h1>
            <h1 className='text-developer'>I'm a
              <span>
                {text}
              </span>
              <span>
                <Cursor />
              </span>
            </h1>
            <Row className="profile-contact mt-3">
              <Col xs={12} md={12} lg={4} className='text-center'>
                <a href='#'><FaWhatsapp style={{color:"var(--yellow)",fontSize:"20px",marginRight:"5px"}}/>+91 9546454878</a>
              </Col>
              <Col xs={12} md={12} lg={5} className='text-center'>
                <a href='#'><HiOutlineMail style={{color:"var(--yellow)",fontSize:"20px",marginRight:"5px"}}/>shashikrkhatri9546@gmail.com</a>
              </Col>
              <Col xs={12} md={12} lg={3} className='text-center'>
                <a><FaLocationArrow style={{color:"var(--yellow)",fontSize:"20px",marginRight:"5px"}}/>Aurangabad,Bihar</a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {/* About section */}
       <Row>
         <Col xs={12} md={12} lg={12} className='about-me-details'>
          <div className="about-me">
            <h1>About me</h1>
            <p>Who Am i</p>
          </div>
          <div className="about-me-des">
            <p>Hello there! I'm Shashi Kumar Khatri, a passionate Full Stack Developer with a solid web tech foundation. I embarked on my journey with HTML, CSS, and JavaScript, refining skills in crafting responsive interfaces. My curiosity drove me deeper into modern web development, mastering dynamic and interactive apps.My toolkit features React.js for immersive UX, Node.js/Express.js for seamless backends, and MongoDB for efficient data management. Countless hours of coding, debugging, and problem-solving enabled me to breathe life into diverse projects, each a fusion of creativity and functionality.</p>
          </div>
         </Col>
       </Row>
    </Container>
  )
}
