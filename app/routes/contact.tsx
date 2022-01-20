import type { MetaFunction } from "remix";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - contact",
  }
};

export default function Contact() {
  return (
      <div>
        <section className="contact">
          <div className="wrapper">
            <h1>We are an IT company with a <span
                className="marked">high level of experience</span> in <b>consulting</b>, <b>software
              enhancement</b> and <b>business growth solutions</b>
            </h1>
            <div className="contact-form">
              <div className="contact-form-inner">
                <h2>Let’s talk</h2>
                <p>For any inquiries please contact us at <a href="mailto:info@cadolabs.io">info@cadolabs.io</a></p>
                <form action="/send-message" method="post">
                  <div className="input-outer">
                    <input type="text" placeholder="Your name" name="name" required />
                  </div>
                  <div className="input-outer">
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <div className="input-outer">
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Message" required></textarea>
                  </div>
                  <div className="input-outer">
                    <button type="submit" value="Send">Send</button>
                  </div>
                </form>
              </div>
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
