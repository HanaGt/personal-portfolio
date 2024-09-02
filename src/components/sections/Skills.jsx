import { useState } from "react";
import classes from "./Skills.module.css";
import SkillSet from "../UI/SkillSet";
import {
  faCss3,
  faFigma,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function Skills() {
  const [developmentActive, setDevelopmentActive] = useState(true);
  const [designActive, setDesignActive] = useState(false);

  return (
    <div className={classes.skillContainer}>
      <div id="skills"></div>
      <motion.h1 className={classes.sectionTitle} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} >Skills and Expertise</motion.h1>
      <div className={classes.skillSelector}>
        <div
          className={`${classes.frontSelector} ${
            developmentActive && classes.active
          }`}
          onClick={() => {
            setDevelopmentActive(true);
            setDesignActive(false);
          }}
        >
         <FontAwesomeIcon icon={faCode} /> <span className={classes.hideDev}>Developement</span>
        </div>
        <div
          className={`${classes.backSelector} ${
            designActive && classes.active
          }`}
          onClick={() => {
            setDesignActive(true);
            setDevelopmentActive(false);
          }}
        >
          <FontAwesomeIcon icon={faPaintBrush} /> <span className={classes.hideDes}>Designing</span>
        </div>
      </div>
      <div className={classes.skillsWrapper}>
        {developmentActive ? (
          <div className={`${classes.devSkills} ${classes.devNDesSkills}`}>
            <SkillSet
              language={"HTML"}
              icon={faHtml5}
              percent={"95%"}
            />
            <SkillSet
              language={"CSS / Tailwind css"}
              icon={faCss3}
              // years={""}
              percent={"95%"}
            />
            <SkillSet
              language={"JavaScript"}
              icon={faJsSquare}
              percent={"80%"}
            />
            <SkillSet
              language={"React / Nextjs"}
              icon={faReact}
              percent={"60%"}
            />
          </div>
        ) : (
          <div className={`${classes.designSkills} ${classes.devNDesSkills}`}>
            <SkillSet
              language={"Figma"}
              icon={faFigma}
              percent={"80%"}
            />
           
           
           
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
