export default function AboutPage() {
  return (
    <div id="about-container" className="about-container">
      <div className="about-container--block">
        <div className="education--container">
          <h2 className="">Education</h2>
          <div className="education--container--content">
            <div className="education--container--block">
              <h3>Graduation</h3>
              <p>MVJ College of Engineering</p>
              <p>BE - Computer Science and Engineering</p>
              <p>Year: 2018-2022</p>
              <p>CGPA: 8.59</p>
            </div>
            <div className="education--container--block">
              <h3>Class XII</h3>
              <p>MVJ Pre-University College</p>
              <p>PCMB</p>
              <p>Year: 2016-2018</p>
            </div>
            <div className="education--container--block">
              <h3>Class X</h3>
              <p>Sharada Vidya Mandira</p>
              <p>Year: 2016</p>
              <p>Percentage: 89.2</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-container--block">
        <div className="experience--container">
          <h2>Experience</h2>
          <div className="experience--container--content"></div>
        </div>
      </div> */}
    </div>
  );
}
