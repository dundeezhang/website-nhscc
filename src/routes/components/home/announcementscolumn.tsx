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
    [
        "New Club Presidents",
        "June 28, 2024",
        "Dundee",
        "Your coding club presidents for next year is Andy Zhang and Tim Shnayder",
    ],
    [
        "NRGHacks Winners",
        "November 27, 2023",
        "Dundee",
        "Hello NRGHackers! We have the long anticipated results of NRGHacks 2023! We are excited to announce the winners of the first ever instance of NRGHacks. For the Senior Division: First place: INGENIAL (William Wei, Arthur Chen, Jason Li, Roland Lu, Jeffery Chiu) from Newmarket H.S. Second place: SecurED (Henry Wang, Alex Tan, Andersen Lee, Dylan Lam, Calim Kim-Wansbrough) from Richmond Hill H.S. Third place: Happy Campers (Ken Jiang, Tommy Shan, Harry Xu, Ilya Kononov, William Li) from Richmond Hill H.S. For the Junior Division: First place: Dough (Margaret Luo, Thomas Tang, William Cheung, Aakash Rao, Amrita Shunbuli) from G.W. Williams. Second place: Kachow (Mithulan Nanthakumar, Mike Zhan, Justin Shi, Jaden Shi, Matthew Pacitto) from Richmond Hill H.S. Third place: Destiny Canvas (Emily Yan, Diana Lu, Emily Zhu, Lisa Nguyen) from G.W. Williams. Special Awards go to: Best Frontend: Quizzy (Ajay Umaipagan, Zack Panagiotakopoulos, Alex Wu) from G.W. Williams. Most Elegant Code: Micheal (Micheal Baikov) from Newmarket H.S. Most Creative Solution: Reyab and David (Reyab Saluja, David Daniliuc) from Richmond Hill H.S. Prizes and details are found in the handbook here: 'https://docs.google.com/document/d/16c7qiCTyP_XCY4fwQyS9SPWlFlLSVfweS94bL6DskUc/edit?usp=sharing' Prizes will be delivered to your executives at your respective schools this week. Please see your club presidents for more details. Congratulations to the winners, and great job everyone! All your projects were exceptional and insanely imaginative. Everyone exceeded expectations! We hope you see you back for NRGHacks 2024! On another note, thank you to Mrs. Schmidt, Dr. Park, Mme. Waseil, Ms. Rastegar, Mr. Payne, Mr. R-D., Mr. Grigorov, Caretakers and all other teachers, committees, and executives (Claire, Joanna, Nevin, Sergei, Logan, Kelly, Emma, Alan, and Yearbook and Newscast) for supervising and helping out with the event. Thank you to our external judges Matthew Hyeun and Jacob Park for their time. AND a special thanks to Mr. Park for enabling NRGHacks 2023! With love, Your judges (Andrew Chu, Dundee Zhang, Enric Duong, Matthew Hyeun, Pranav Upreti, Jacob Park, Josh Wang, and Vincent Qu)",
    ],
    [
        "Club Annoucement",
        "October 17, 2023",
        "Dundee",
        "The Waterloo Canadian Computing Competition will be written on February 21, 2024 from 12pm to 3pm in the Library. Please buy your ticket at School Cash Online by January 31, 2024!",
    ],
    [
        "Club Annoucement",
        "September 13, 2023",
        "Dundee and Josh",
        "Do you want to learn to code? Create games? Discuss about NFTs? And prepare for Contests? You should join the computer science club! All levels of programmers are welcome from complete beginners to advanced developers! Come stop by room 305 on Monday September 25 after school to learn more!",
    ],
    [
        "No more announcements",
        "Beginning",
        "Dundee",
        "Listen for school announcements or check this website for up to date news about CSC",
    ],
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
        <EventsCol
            title={title}
            date={date}
            author={author}
            content={content}
            key={null}
        />
    ));
}
