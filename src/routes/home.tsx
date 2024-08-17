import Navbar from "./components/home/navbar";
import Cover from "./components/home/cover";
import Events from "./components/home/events";
import Team from "./components/home/team";
import Footer from "./components/home/footer";

export default function Home() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Navbar />
            <div id="cover">
                <Cover />
            </div>
            <Events />
            <div id="team">
                <Team />
            </div>
            <Footer />
        </div>
    );
}
