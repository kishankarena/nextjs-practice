import { Fragment } from 'react';
import { getEventById, getAllEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

const EventDetailPage = ({ event }) => {
  if (!event)
    return (
      <ErrorAlert>
        <p>No Event found!</p>
      </ErrorAlert>
    );
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};
export async function getStaticPaths() {
  const events = await getAllEvents();
  const ids = events.map((event) => event.id);
  const generatedPaths = ids.map((id) => `/events/${id}`);
  // const generatedPaths = events.map((event) => ({
  //   params: { eventId: event.id },
  // }));
  return {
    paths: generatedPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
  };
}
export default EventDetailPage;
