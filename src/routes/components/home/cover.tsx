import Socialicons from "./socialbuttons";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Cover() {
    return (
        <div>
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="about">Newmarket High School</p>
                </motion.div>

                <TypeAnimation
                    sequence={[300, "Computer Science Club"]}
                    className="h-about"
                ></TypeAnimation>
                <Socialicons />
                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 1.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <p className="scroll-down about">Scroll Down for More</p>
                    </motion.div>
                
            </div>
        </div>
    );
}
