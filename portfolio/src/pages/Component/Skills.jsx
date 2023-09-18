import React from "react";
import "./Skills.scss";
import { useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import htmllogo from "../../assets/images/html.png";
import csslogo from "../../assets/images/css.png";
import javascriptlogo from "../../assets/images/javascript.png";
import reactlogo from "../../assets/images/React.png";
import nodejslogo from "../../assets/images/nodejs.png";
import java from "../../assets/images/java.png";
import mongodb from "../../assets/images/mongodb.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const skills = [
        {
            src: htmllogo,
            caption: "HTML",
            color:"#e64c18",
            percentage:"90%"
        },
        {
            src: csslogo,
            caption: "CSS",
            color:"#006bc0",
            percentage:"80%"
        },
        {
            src: javascriptlogo,
            caption: "JavaScript",
            color:"#e0953c",
            percentage:"80%"
        },
        {
            src: reactlogo,
            caption: "React Js",
            color:"#2691ff",
            percentage:"80%"
        },
        {
            src: nodejslogo,
            caption: "Node Js",
            color:"#6da75d",
            percentage:"80%"
        },
        {
            src: mongodb,
            caption: "mongoDB",
            color:"#4faa41",
            percentage:"75%"
        },
        {
            src: java,
            caption: "Java",
            color:"#e0953c",
            percentage:"80%"
        }
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        LargeDesktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        desktop:{
            breakpoint:{max:1024 ,min : 769},
            items:3
        },
        tablet:{
            breakpoint: {max:768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const skillLogos = document.querySelectorAll(".skill-card-logo");
          skillLogos.forEach((logo) => {
            const boundingBox = logo.getBoundingClientRect();
            const threshold = 0.5;
    
            if (
              boundingBox.top <= window.innerHeight * threshold &&
              boundingBox.bottom >= 0
            ) {
              logo.classList.add("animate");
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    return (
        <>
            <Carousel responsive={responsive} infinite={true} autoPlay={true}
                keyBoardControl={true}
                customTransition="transform 600ms ease"
                rtl={false}
                className="skill-carousel">
                {
                    skills.map((skill) => {
                        return (
                            <div key={index}>
                                <div className={`skill-card-logo ${isVisible ? "animate" : ""}`} style={{"--color":skill.color,"--percentage":skill.percentage}}>
                                    <div className="skill-card-content">
                                        <div className="skill-card-image">
                                            <img src={skill.src} alt={skill.caption} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    );
}
