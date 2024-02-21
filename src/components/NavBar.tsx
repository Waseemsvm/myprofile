export default function NavBar() {
  //Home, Biodata, CV
  return (
    <nav id="nav--container">
      <div className="nav--container">
        <h1 className="nav--brand">Waseem Akram P</h1>
        <ul className="nav--links collapsed">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Biodata</a>
          </li>
          <li>
            <a href="/contact">CV</a>
          </li>
        </ul>
        <div className="menu-button-checkbox">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle" />
          <div className="menu-button"></div>
        </div>
      </div>
    </nav>
  );
}
