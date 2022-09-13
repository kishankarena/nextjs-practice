import EventList from '../components/events/EventList';
import { getFeaturedEvents } from './../helpers/api-utils';

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  // console.log(`${featuredEvents} getStaticProps`);
  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
}
export default HomePage;
