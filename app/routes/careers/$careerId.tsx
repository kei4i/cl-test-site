import type { MetaFunction, LoaderFunction } from "remix";
import VacanciesList from "~/components/vacancies";
import {useLoaderData, useParams} from "remix";
import {getTable, getVacancy} from "~/api/airtable";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - careers",
  }
};
//
// export const loader: LoaderFunction = async ({ params, context}) => {
//   let data = {
//     tableData: null,
//     careerData: null,
//     envData: null
//   };
//   const {
//     env, // same as existing Worker API
//   } = context;
//   data1.tableData = await getTable();
//   data1.careerData = await getVacancy(params.careerId);
//   data1.envData = context;
//   return data1;
// };


export const loader: LoaderFunction = async ({ params, context}) => {
  let data1 = {
    tableData: null,
    careerData: null,
    envData: null
  };
  const {
    env, // same as existing Worker API
  } = context;
  data1.tableData = await getTable();
  data1.careerData = await getVacancy(params.careerId);
  data1.envData = context;
  return data1;
};

export default function DynamicCareer() {
  const vacanciesList = useLoaderData().tableData.records;
  const careerData = useLoaderData().careerData.fields;
  console.log('useloaddata', useLoaderData());
  console.log('context', useLoaderData().envData);
  return (
      <div>
        <section className="vacancy">
          <div className="wrapper">
            <h1>{careerData.page_title}</h1>
            <div className="descr" dangerouslySetInnerHTML={{__html: careerData.page_short_descr}}/>
          </div>
        </section>
        <section className="how-we-do-it">
          <div className="wrapper">
            <div className="inner">
              <h2>HOW we do it</h2>
              <p>Most of the new services are developed and run in accordance with <b>microservices architecture</b>.
              </p>
              <p>We invest into our own <b>Kubernetes platform</b>.</p>
              <p>We adopt the <b>gRPC</b> framework in our platform or migrate our interfaces to a <b>micro-frontend
                pattern</b>.</p>
              <p>We actively use and support <b>open source products</b>.</p>
              <p>You can have a look at some of our code in our <br /> <a href="https://github.com/Cado-Labs"
                                                                        rel="noreferrer" target="_blank">GitHub
                account</a>.</p>
            </div>
          </div>
        </section>
        <section className="about-vacancy">
          <div className="wrapper">
            <div className="more-info">
              <div className="title">YOUR Responsibilities:</div>
              <ul dangerouslySetInnerHTML={{__html: careerData.responsibilities}} />
            </div>
            <div className="more-info">
              <div className="title">OUR Requirements:</div>
              <ul dangerouslySetInnerHTML={{__html: careerData.requirements}} />
            </div>
            <div className="more-info">
              <div className="title">CONSIDERED as an advantage:</div>
              <ul dangerouslySetInnerHTML={{__html: careerData.considered}} />
            </div>
            <div className="more-info">
              <div className="title">WHAT we offer:</div>
              <ul dangerouslySetInnerHTML={{__html: careerData.we_offer }} />
            </div>
            <div className="more-info">
              <div className="title">Apply by sending CV to <a href="mailto:hr@cadolabs.io">hr@cadolabs.io</a></div>
            </div>
          </div>
        </section>
        <section className="cado-do">
          <div className="wrapper">
            <h2>CADO DO</h2>
            <ul>
              <li>
                <div className="inner">
                  <div className="title">Traffic Management Systems</div>
                  <div className="descr">to boost your growth!</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">CRM Platforms</div>
                  <div className="descr">to bring some order to your Data!</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">Payment systems</div>
                  <div className="descr">we know how to make money work for you!</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">BI Systems</div>
                  <div className="descr">our secrets to a good night's sleep</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">Anti-Fraud Solutions</div>
                  <div className="descr">our secrets to the BEST night's sleep</div>
                </div>
              </li>
              <li>
                <div className="inner">
                  <div className="title">Machine Learning Products</div>
                  <div className="descr">for the love of Robots!</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <VacanciesList data={vacanciesList} />
      </div>
);
}
