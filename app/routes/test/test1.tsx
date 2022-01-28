import type { MetaFunction } from "remix";
import VacanciesList from "~/components/vacancies";
import {LoaderFunction, useLoaderData} from "remix";
import {getTable} from "~/api/airtable";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - careers",
  }
};
//
// export const loader: LoaderFunction = async () => {
//   return getTable();
// };

export const loader: LoaderFunction = async () => {
  const response = await fetch("/test/test1", {
    method: "POST"
  });
  const data = await response.json();
  return data;
};
export default function CareerIndex() {
  const vacanciesList = useLoaderData();
  console.log('test1', vacanciesList);
  return (
      <div>
        test1
      </div>
);
}
