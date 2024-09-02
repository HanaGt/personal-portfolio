import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"; // Import PropTypes
import classes from "./SkillSet.module.css";
import { motion } from "framer-motion";

function SkillSet(props) {
    return (
        <motion.div className={classes.skillCard} initial={{ y: 100, opacity: 0.5 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className={classes.row1}>
                <FontAwesomeIcon icon={props.icon} />
            </h1>
            <h2 className={classes.row2}>{props.language}</h2>
            <div className={classes.expertBarContainer}>
                <div
                    className={classes.expertBar}
                    style={{ width: `${props.percent}` }}
                ></div>
            </div>
        </motion.div>
    );
}

SkillSet.propTypes = {
    icon: PropTypes.object.isRequired, 
    language: PropTypes.string.isRequired,
    percent: PropTypes.string.isRequired,
};

export default SkillSet;
