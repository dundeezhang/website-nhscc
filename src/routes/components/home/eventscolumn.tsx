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
    event: string;
    date: string;
    location: string;
}

const eventsData: [string, string, string][] = [
    ["First Meeting", "September 9, 2023", "Room 305"],
    ["No more events", "2020", "Check later for new events"],
];

function EventsCol({ event, date, location }: Datas) {
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
                    <h3 className="event-cards">{event}</h3>
                    <h4 className="event-cards">{date}</h4>
                    <p className="event-cards">{location}</p>
                    <hr></hr>
                </div>
            </motion.div>
        </Row>
    );
}

export default function EventsColumn() {
    return eventsData.map(([event, date, location]) => (
        <EventsCol event={event} date={date} location={location} key={null} />
    ));
}
