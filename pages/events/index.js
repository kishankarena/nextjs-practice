import { getAllEvents } from '../../helpers/api-utils';
import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';

const AllEventsPage = ({ events }) => {
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
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
