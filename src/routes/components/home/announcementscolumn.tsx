import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";

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
    title: string;
    date: string;
    author: string;
    content: string;
}

const eventsData: [string, string, string, string][] = [
    ["New Club Presidents", "June 28, 2024", "Dundee", "Your coding club presidents for next year is Andy Zhang and Tim Shnayder"],
    ["Club Annoucement", "September 13, 2023", "Dundee and Josh", "Do you want to learn to code? Create games? Discuss about NFTs? And prepare for Contests? You should join the computer science club! All levels of programmers are welcome from complete beginners to advanced developers! Come stop by room 305 on Monday September 25 after school to learn more!"],
    ["No more announcements", "Beginning", "Dundee", "Listen for school announcements or check this website for up to date news about CSC"],
];

function EventsCol({ title, date, author, content }: Datas) {
    return (
        <Row>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={CardDiv}
            >
                <div className="event-cards">
                    <h3 className="event-cards">{title}</h3>
                    <h4 className="event-cards">By: {author}</h4>
                    <h4 className="event-cards">{date}</h4>    
                    <p className="event-cards">{content}</p>
                    <hr></hr>
                </div>
            </motion.div>
        </Row>
    );
}

export default function AnnouncementsColumn() {
    return eventsData.map(([title, date, author, content]) => (
        <EventsCol title={title} date={date} author={author} content={content} key={null} />
    ));
}
