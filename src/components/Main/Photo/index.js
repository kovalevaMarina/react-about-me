import "./main.css";
import photoImg from "../../../img/photo.jpg";

function Photo(props) {
  return (
    <div className={props.class}>
      <img className="photo-img" src={photoImg} alt="My avatar"></img>
    </div>
  );
}

export default Photo;
