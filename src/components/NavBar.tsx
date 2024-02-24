export default function NavBar() {
  document.addEventListener(
    "click",
    function (event) {
      let targetelement = event.target as HTMLBodyElement;
      if (!(targetelement as HTMLBodyElement)?.closest(".menu")) {
        // !targetelement?.closest(".menu-button") ||
        // if menu icon clicked then by pass
        let menuIconClicked =
          !!(targetelement as HTMLBodyElement)?.closest(".menu-button") ||
          !!targetelement?.closest("#menu-toggle");
        if (!menuIconClicked && document.querySelector("#menu-toggle"))
          closeMenu();
      }
    },
    { capture: true }
  );

  function closeMenu() {
    (document.querySelector("#menu-toggle") as HTMLInputElement).checked =
      false;
  }

  return (
    <section className="top-nav">
      <h2>Waseem Akram P</h2>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-container" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#contact-container" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}
