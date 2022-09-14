import { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

const EventDetailPage = ({ event }) => {
  if (!event)
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
  const events = await getFeaturedEvents();
  const ids = events.map((event) => event.id);
  const generatedPaths = ids.map((id) => `/events/${id}`);
  // const generatedPaths = events.map((event) => ({
  //   params: { eventId: event.id },
  // }));
  return {
    paths: generatedPaths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}
export default EventDetailPage;
