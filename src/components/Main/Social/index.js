import "./main.css";
import instagram from "../../../img/instagram.png";
import github from "../../../img/github.png";
import linkedin from "../../../img/linkedin.png";

function Social(props) {
  const arrSocials = [
    {
      network: instagram,
      alt: "instagram",
      link: "https://www.instagram.com/marinkakoval/",
    },
    {
      network: github,
      alt: "github",
      link: "https://github.com/web-smithy",
    },
    {
      network: linkedin,
      alt: "linkedin",
      link: "https://www.linkedin.com/in/marina-kovaleva-b7470b166/",
    },
  ];
  return (
    <ul className={props.class}>
      {arrSocials.map((elem) => (
        <li className="social-item">
          <a href={elem.link}>
            <img src={elem.network} alt={elem.alt}></img>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
