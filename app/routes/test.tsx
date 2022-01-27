import type {MetaFunction} from "remix";
import {LoaderFunction, useLoaderData} from "remix";
import {getTable} from "../../functions/api/airtable1";
export const meta: MetaFunction = () => {
  return {
    title: "Cadolabs - privacy policy",
  }
};

export function loader() {
  return getTable;
};

export default function Privacy() {
  const data = useLoaderData();
  console.log(data);
  return (
      <div>
        {useLoaderData()}
      </div>
);
}
