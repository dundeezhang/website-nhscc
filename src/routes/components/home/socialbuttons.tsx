import { motion } from "framer-motion";
export default function Socialicons() {
    return (
        <div className="social-container">
            <ul className="social">
                <li className="social social-p-button">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <a
                            className="social  social-p-button"
                            rel="noreferrer"
                            href="https://www.instagram.com/newmarketcodingclub/"
                            target="_blank"
                        >
                            <i className="fa-brands fa-instagram instagram-icons"></i>
                            Instagram
                        </a>
                    </motion.div>
                </li>
                <li className="social social-s-button">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            delay: 0.9,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                    >
                        <a
                            className="social social-s-button"
                            rel="noreferrer"
                            href="https://github.com/Newmarket-High-School-Coding-Club"
                            target="_blank"
                        >
                            <i className="fa-brands fa-github github-icons"></i>
                            Github
                        </a>
                    </motion.div>
                </li>
            </ul>
        </div>
    );
}
