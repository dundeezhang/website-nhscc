import ExecCardSeg from "./execcard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Team() {
    return (
        <div className="exec-container">
            <h2 className="exec">
                Meet the Executives
            </h2>
            <Container>
                <Row>
                    <ExecCardSeg />
                </Row>
            </Container>
        </div>
    );
}
