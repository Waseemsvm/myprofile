export default function NavBar() {
  document.addEventListener(
    "click",
    function (event) {
      if (!event.target?.closest(".menu")) {
        // !event.target?.closest(".menu-button") ||
        // if menu icon clicked then by pass
        let menuIconClicked =
          !!event.target?.closest(".menu-button") ||
          !!event.target?.closest("#menu-toggle");
        if (!menuIconClicked && document.querySelector("#menu-toggle"))
          document.querySelector("#menu-toggle").checked = false;
      }
    },
    { capture: true }
  );

  return (
    <section className="top-nav">
      <h2>Waseem Akram P</h2>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">CV</a>
        </li>
      </ul>
    </section>
  );
}
