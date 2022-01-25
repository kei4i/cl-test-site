import type {MetaFunction, ActionFunction} from "remix";
import {LoaderFunction, useLoaderData} from "remix";
import VacanciesList from "~/components/vacancies";
import {getTable} from "~/api/airtable";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - cookie policy",
  }
};

export const loader: LoaderFunction = async () => {
  return getTable();
};

export default function Privacy() {
  const vacanciesList = useLoaderData().records;
  return (
      <div>
        <section className="tech-radar">
          <div className="wrapper">
            <iframe src="https://cadolabs-techradar.s3-eu-west-1.amazonaws.com/index.html" height="1200" width="100%" title="Tech radar"></iframe>
          </div>
        </section>
        <VacanciesList data={vacanciesList} />
      </div>
    );
}
