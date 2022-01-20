import type { MetaFunction } from "remix";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - careers",
  }
};

export default function Careers() {
  return (
      <div>
        <section className="about-career">
          <div className="wrapper">
            <h1>CADO Careers</h1>
            <p>If you are <b>dynamic and motivated</b> to do something big, check out our open positions!</p>
            <div className="cado-has-denies">
              <div>
                <div className="title">CADO HAS</div>
                <ul>
                  <li>Professional and motivated team</li>
                  <li>Clear goals</li>
                  <li>Personal responsibility of each team member</li>
                  <li>Supportive and friendly Team</li>
                  <li>Latest technology tools</li>
                  <li><b>Check out </b> <a href="/tech-radar"> our Tech Radar!</a></li>
                </ul>
              </div>
              <div>
                <div className="title">CADO DENIES</div>
                <ul>
                  <li>Overcomplicated product infrastructure</li>
                  <li>Fear of new technology</li>
                  <li>Creating processes for the sake of processes</li>
                  <li>Army discipline</li>
                  <li>Useless and endless meetings</li>
                  <li>Bureaucracy and strict rules</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="become-one-of-us">
          <div className="wrapper">
            <h2><span>TO BECOME of one of us you will have to:</span></h2>
            <ul>
              <li>
                <img src="images/step-1.svg" alt="Step 1" />
                  <div>
                    <div className="title">Apply the vacancy</div>
                    <div className="descr">by send your CV</div>
                  </div>
              </li>
              <li>
                <img src="images/step-2.svg" alt="Step 2" />
                  <div>
                    <div className="title">Pass tech interview</div>
                    <div className="descr">by ZOOM or in our office</div>
                  </div>
              </li>
              <li>
                <img src="images/step-3.svg" alt="Step 3" />
                  <div>
                    <div className="title">Show your projects</div>
                    <div className="descr">or do optional test task</div>
                  </div>
              </li>
              <li>
                <img src="images/step-4.svg" alt="Step 3" />
                  <div>
                    <div className="title">Pass 2nd interview</div>
                    <div className="descr">with our friendly CTO</div>
                  </div>
              </li>
            </ul>
            <div className="get-offer">
              <div className="title">Get an offer!</div>
              <div className="descr">and celebrate it with us!</div>
            </div>
          </div>

        </section>
        <section className="cado-looking-for">
          <div className="wrapper">
            <div className="header">
              <h2>CADO is looking for</h2>
              <div className="descr">If you are dynamic and motivated to do something big, check out our open
                positions!
              </div>
              <div className="view-all"><a href="/careers">View all vacancies</a></div>
            </div>
            <ul>
              <li>
                <div className="inner">
                  <a href="/vacancy">
                    <span className="title">Ruby on Rails</span>
                    <span className="descr">Senior Developer</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">QA</div>
                  <div className="descr">Middle Engineer</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">Accountant</div>
                  <div className="descr">with experince in IT</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">Ruby on Rails</div>
                  <div className="descr">Middle Developer</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">DevOPS</div>
                  <div className="descr">System Engineer</div>
                </div>
              </li>
              <li className="send-cv">
                <a href="mailto:hr@cadolabs.io">Send your CV</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
);
}
