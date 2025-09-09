import Marquee from "react-fast-marquee";
import "../css/HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="content">
        <Marquee className="home-title">
          Welcome to Soliflore's homepage!
        </Marquee>
      </div>
    </>
  );
}
