// import cartoon from "./images/BAbceB8_d.webp";
import "./card.css";
function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="Card">
        <div className="cardImg">
          <img src={props.imgPath} alt="i"></img>
        </div>
        <div className="card-detail">
          <span>{props.title}</span>
          <div className="card-votes">
            <i className="fa fa-arrow-up" aria-hidden="true">
              <span>114</span>
            </i>
            <i className="fa fa-comments" aria-hidden="true">
              <span>26</span>
            </i>
            <i className="fa fa-thumbs-up" aria-hidden="true">
              <span>342</span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
