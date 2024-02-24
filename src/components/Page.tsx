import backgroundVideo from "../assets/network.mp4";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
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
      <AboutPage />
      <ContactPage />
    </div>
  );
}
