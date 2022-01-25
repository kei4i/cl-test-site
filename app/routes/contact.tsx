import type {MetaFunction, ActionFunction, LoaderFunction} from "remix";
import {Form, useLoaderData} from "remix";
import {getTable, sendMessage} from "~/api/airtable";
import {redirect} from "remix";
import VacanciesList from "~/components/vacancies";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - contact",
  }
};


export const action: ActionFunction = async ({request}) => {
  const body = await request.formData();
  console.log(body);
  const message = {
    name: body.get('name') as string,
    message: body.get('message') as string,
    email: body.get('email') as string,
  }

  await sendMessage(message);

  return redirect(`/contact`);
}

export const loader: LoaderFunction = async () => {
  return getTable();
};


export default function Contact() {
  const vacanciesList = useLoaderData().records;
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
                <p>For1 any inquiries please contact us at <a href="mailto:info@cadolabs.io">info@cadolabs.io</a></p>
                <Form reloadDocument method="post">
                  <div className="input-outer">
                    <input type="text" placeholder="Your name" name="name" required />
                  </div>
                  <div className="input-outer">
                    <input type="email" placeholder="Email" name="email" required />
                  </div>
                  <div className="input-outer">
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Message" required />
                  </div>
                  <div className="input-outer">
                    <button type="submit" value="Send">Send</button>
                  </div>
                </Form>
            </div>
            </div>
          </div>
        </section>
        <VacanciesList data={vacanciesList} />
      </div>
);
}
