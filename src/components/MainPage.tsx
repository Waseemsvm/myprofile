import profilepic from "../assets/profilepic.png";

export default function MainPage() {
  return (
    <div className="main--page">
      <div className="main--block">
        <div>
          <img
            className="main--profile--pic"
            alt="profile pic"
            src={profilepic}
          />
        </div>
        <div className="main--profile--name">Waseem Akram P</div>
        <div className="main--profile--desgn">Developer, Founder, Tutor</div>
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href="" className="main--profile--email"></a>
        </div>
      </div>
    </div>
  );
}
