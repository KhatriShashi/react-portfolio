import React from "react";
import "./Resume.scss";
import "animate.css";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import Skills from "./Skills";
function Resume() {
  const [isShownFirst, setIsShownFirst] = useState(false);
  const [isShownSecond, setIsShownSecond] = useState(false);
  const [isShownThird, setIsShownThird] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12} className="mb-5">
            <div className="education-header-sec">
              <div className="education-header">
                <h1>Education</h1>
                <p>Learning</p>
              </div>
            </div>
            <div className="education-section">
              <Row>
                <Col sm={12} md={6} lg={6}></Col>
                <Col sm={12} md={6} lg={6}>
                  <div
                    className="education-box education-box-right"
                    onMouseEnter={() => setIsShownFirst(true)}
                    onMouseLeave={() => setIsShownFirst(false)}
                  >
                    <div className="education-box-year">
                      <h1
                        className={`${
                          isShownFirst
                            ? "animate__animated animate__pulse animate__infinite infinite"
                            : " "
                        }`}
                      >
                        2017
                      </h1>
                    </div>
                    <div className="education-box-desc">
                      <div className="education-box-info">
                        <p>10th Grade (BSEB)</p>
                        <p>+2 High School Siris,Aurangabad(Bihar)</p>
                        <p>Percentage-78%</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <div
                    className="education-box education-box-left"
                    onMouseEnter={() => setIsShownSecond(true)}
                    onMouseLeave={() => setIsShownSecond(false)}
                  >
                    <div className="education-box-desc">
                      <div className="education-box-info">
                        <p>12th Grade (BSEB)</p>
                        <p>Intermediate Of Science</p>
                        <p>S.N Sinha College Aurangabad(Bihar)</p>
                        <p>Percentage-78%</p>
                      </div>
                    </div>
                    <div className="education-box-year">
                      <h1
                        className={`${
                          isShownSecond
                            ? "animate__animated animate__pulse animate__infinite infinite"
                            : " "
                        }`}
                      >
                        2019
                      </h1>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={6}></Col>
                <Col sm={12} md={6} lg={6}></Col>
                <Col sm={12} md={6} lg={6}>
                  <div
                    className="education-box education-box-right"
                    onMouseEnter={() => setIsShownThird(true)}
                    onMouseLeave={() => setIsShownThird(false)}
                  >
                    <div className="education-box-year">
                      <h1
                        className={`${
                          isShownThird
                            ? "animate__animated animate__pulse animate__infinite infinite"
                            : " "
                        }`}
                      >
                        2020
                        <span className="btech-final-year">to 2024</span>
                      </h1>
                    </div>
                    <div className="education-box-desc">
                      <div className="education-box-info">
                        <p>B.tech (Computer Science & Engineering)</p>
                        <p>Haldia Institute Of Technology (West Bengal)</p>
                        <p>AVG CGPA-9.08</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Skills */}
        <section>
            <div className="skill-header-sec">
              <div className="skill-header">
                <h1>My SKills</h1>
                <p>Expert in</p>
              </div>
            </div>
            <div className="skill-section">
              <Skills/>
            </div>
        </section>
      </Container>
    </>
  );
}

export default Resume;
