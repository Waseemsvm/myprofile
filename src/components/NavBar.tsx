export default function NavBar() {
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
