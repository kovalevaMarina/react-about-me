import "./main.css";

function Navigation(props) {
  const arrMenuItems = ["About Me", "Portfolio", "Hobby", "Contact"];

  return (
    <nav className={props.class}>
      <ul className="list">
        {arrMenuItems.map((item) => (
          <li className="list-item">
            <a className="list-item__link" href="/">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
