import "../css/HomePage.css";
import ojigi from "../assets/figure_ojigi.png";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <p className="title">Soliflore</p>
        <nav className="header-nav">
          <ul className="header-ul">
            <li className="header-list">page1</li>
            <li className="header-list">page2</li>
            <li className="header-list">page3</li>
            <li className="header-list">page4</li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <p>準備中</p>
        <img src={ojigi} alt="Ojigi" />
      </div>
    </>
  );
}
