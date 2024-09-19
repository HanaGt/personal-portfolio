import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Showcase.module.css";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import Projects from "../UI/Projects";
import { useEffect, useState } from "react";
import reactQuizImage from "../../assets/images/Showcase/ReactMockup-min.png";
import libraryImage from "../../assets/images/Showcase/hero-min.png";
import CartNet from "../../assets/images/Showcase/CartNet.png";
import { motion } from "framer-motion";

function Showcase() {
    const projectData = [
       
        {
            id: 0,
            name: "Travello",
            description:"Travello - Travel Made Simpler is a sleek and modern travel website designed to transform travel planning into a seamless and enjoyable experience. With a clean and user-friendly interface, Travello allows users to explore breathtaking destinations, discover diverse cultures, and create personalized itineraries tailored to their unique interests.",
            image: libraryImage,
            languages: ["Nextjs", "Mongodb", "RTK Query" , "TailwindCss"],
            githubLink: "https://github.com/HanaGt/Travello",
            liveServer: "https://travello-six.vercel.app/",
        },
        {
            id: 1,
            name: "Bank Dashboard",
            description:
                "Genzeb is an innovative financial SaaS platform designed to streamline personal and business finances by providing a centralized solution for managing multiple bank accounts. With Genzeb, users can securely connect to various bank accounts and view all their transactions in real-time, ensuring they stay up-to-date with their financial activities. it has: Real-Time Transaction Monitoring,Seamless Money Transfers,Comprehensive Financial Management",
            image: reactQuizImage,
            languages: ["Nextjs", "TailwindCss", "RTK Query" , "Chart.js"],
            githubLink: "https://github.com/HanaGt/Genzeb_Bank",
            liveServer: "https://Genzeb_bank.vercel.app",
        },
        {
            id: 2,
            name: "an Ecommerce site",
            description:
                " a responsive e-commerce website featuring that showcases products, promotions, and new arrivals, with clean navigation and user-friendly interactions. Integrated newsletter signup and promotional banners enhance customer engagement.",
            image: CartNet,
            languages: ["HTML", "CSS", "bootstrapp"],
            githubLink: "https://github.com/HanaGt/Ecommerce",
            liveServer: "https://hanagt.github.io/Ecommerce/",
        },
    ];

    const [index, setIndex] = useState(0);
    const [currentShowcase, setCurrentShowcase] = useState(projectData[index]);
    useEffect(() => {
        setCurrentShowcase(projectData[index]);
    }, [index]);

    function toggleLeft() {
        if (index > 0) {
            setIndex((index) => {
                return index - 1;
            });
        }
    }

    function toggleRight() {
        if (index < projectData.length - 1) {
            setIndex((index) => {
                return index + 1;
            });
        }
    }

    return (
        <div className={classes.ShowcaseSection}>
            <div id="showcase" className={classes.showRoom}></div>
            <motion.h1 className={classes.sectionName} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} >Showcase or Experience</motion.h1>
            <motion.div className={classes.showContainer} initial={{ x:-100, opacity: 0 }} whileInView={{ x:0, opacity: 1  }} transition={{ duration: 0.5 }}>
                <Projects
                    name={currentShowcase.name}
                    description={currentShowcase.description}
                    image={currentShowcase.image}
                    languages={currentShowcase.languages}
                    githubLink={currentShowcase.githubLink}
                    liveServer={currentShowcase.liveServer}
                    id={currentShowcase.id}
                />
                <motion.div className={classes.arrowContainer}>
                    <div className={classes.leftNRightContainer}>
                        <button
                            className={classes.toggleLeft}
                            onClick={toggleLeft}
                            style={
                                index === 0
                                    ? { color: "gray", border: "2px solid gray" }
                                    : null
                            }
                        >
                            <FontAwesomeIcon icon={faLeftLong} />
                        </button>
                        <button
                            className={classes.toggleRight}
                            onClick={toggleRight}
                            style={
                                index === projectData.length - 1
                                    ? { color: "gray", border: "2px solid gray" }
                                    : null
                            }
                        >
                            <FontAwesomeIcon icon={faRightLong} />
                        </button>
                    </div>
                    <div className={classes.statusBarContainer}>
                        <div
                            className={classes.statusBar}
                            style={{
                                width: `${
                                    (100 * index) / (projectData.length - 1)
                                }%`,
                            }}
                        ></div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Showcase;
