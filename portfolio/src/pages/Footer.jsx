import React from 'react'
import './Footer.scss'
import { Container,Row,Col} from 'react-bootstrap'
import {FaFacebookF,FaGithub,FaInstagram, FaLinkedinIn,FaWhatsapp} from 'react-icons/fa';
export default function Footer() {
  return (
    <>
    <Container fluid>
        {/* Footer */}
       <Row className='pb-4 pt-5'>
        <Col>
          <div className='social-media'>
            <a href="https://www.facebook.com/shashi.khatri.9615/" target='_blank'><FaFacebookF/></a>
            <a href="https://www.instagram.com/khatri_s.h.a.s.h.i/" target='_blank'><FaInstagram/></a>
            <a href=" https://wa.me/9546454878" target='_blank'><FaWhatsapp/></a>
            <a href="https://github.com/KhatriShashi" target='_blank'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/shashi-khatri-7a0381214/" target='_blank'><FaLinkedinIn/></a>
          </div>
        </Col>
       </Row>
    </Container>
    </>
  )
}
