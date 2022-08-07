import Photo from "./Photo";
import Social from "./Social";
import "./main.css";

function Main(props) {
  return (
    <main className={props.class}>
      <div className="container">
        <div className="main-wrap">
          <div className="main-info">
            <h1 className="title-h1">So, who am I?</h1>
            <p className="main-txt">
              I am Marina. I am a young developer. I know the basic of HTML,
              CSS, JavaScript, Git and learn React. I am currently study at
              Hillel IT school on Front-end Pro course. I want to develop as a
              specialist in this area and in frontend in general. I am sure that
              I will benefit the team, to achieve the best results in the work.
            </p>
            <Social class="social-list"></Social>
          </div>
          <Photo class="photo-wrap"></Photo>
        </div>
      </div>
    </main>
  );
}
export default Main;
