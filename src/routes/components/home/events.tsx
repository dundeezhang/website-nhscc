import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventsColumn from "./eventscolumn";
import AnnouncementsColumn from "./announcementscolumn";

export default function Events() {
    return (
        <div className="events-container">
            <Container>
                <Row>
                    <Col>
                    <h2 className="events-col" id="events">Upcoming Events</h2>
                        <EventsColumn />
                    </Col>
                    <Col>
                    <h2 className="events-col" id="updates">Announcements</h2>
                        <AnnouncementsColumn /></Col>
                </Row>
            </Container>
        </div>
    );
}
