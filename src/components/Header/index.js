import "./main.css";
import Navigation from "../Navigation";

function Header(props) {
  return (
    <header className={props.class}>
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <Navigation class="nav"></Navigation>
      </div>
    </header>
  );
}

export default Header;
