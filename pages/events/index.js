import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../helpers/api-utils';

const AllEventsPage = ({ events }) => {
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find all of events here that help you to evolve....."
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
