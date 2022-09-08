import { getAllEvents } from '../../dummy-data';
import { Fragment } from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const events = getAllEvents();
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
export default AllEventsPage;
