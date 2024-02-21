import ContactPage from "./ContactPage";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import backgroundVideo from "../assets/network.mp4";
export default function Page() {
  return (
    <div className="page">
      <div className="page--video--container">
        <video autoPlay muted loop id="idVideoBg">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <NavBar />
      <MainPage />
      <ContactPage />
    </div>
  );
}
