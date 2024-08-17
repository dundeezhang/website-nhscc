import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";

const CardDiv: Variants = {
    offscreen: {
        y: 10,
        opacity: 0.1,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        },
    },
};

interface Datas {
    name: string;
    role: string;
    bio: string;
    img: string;
}

const execInfo: [string, string, string, string][] = [
    [
        "Mr. Ierfino",
        "Teacher Advisor",
        "The one and only Mr. Ierfino",
        "exec-temp-img.jpg",
    ],
    ["Andy Zhang", "Co-President", "temp text", "exec-temp-img.jpg"],
    ["Tim Shnayder", "Co-President", "temp text", "exec-temp-img.jpg"],
    ["Name", "General Executive", "temp text", "exec-temp-img.jpg"],
    ["Name", "Marketing", "temp text", "exec-temp-img.jpg"],
];

function ExecCard({ name, role, bio, img }: Datas) {
    return (
        <Col>
            <motion.div
                className="exec-card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardDiv}
            >
                <div className="exec-card-container">
                    <img src={`/execs/${img}`} className="exec-images" />

                    <h3 className="exec-name">{name}</h3>
                    <h4 className="mb-2 exec-role">{role}</h4>
                    <div className="about-exec">
                        <p className="about-exec">{bio}</p>
                    </div>
                </div>
            </motion.div>
        </Col>
    );
}

export default function ExecCardSeg() {
    return execInfo.map(([name, role, bio, img]) => (
        <ExecCard name={name} role={role} bio={bio} img={img} key={null} />
    ));
}
