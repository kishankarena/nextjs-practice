import { NextPage } from 'next';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch(
    'https://odyssey-lift-off-rest-api.herokuapp.com/tracks'
  );
  const data = await res.json();
  return data;
};
const DashboardSWR: NextPage = () => {
  const { data, error } = useSWR('dashboard', fetcher);
  if (error) return <div>{`Error: ${error}`}</div>;
  return <div>{data}</div>;
};

export default DashboardSWR;
