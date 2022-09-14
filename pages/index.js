import EventList from '../components/events/EventList';
import { getFeaturedEvents } from './../helpers/api-utils';
import Head from 'next/head';

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Next.JS Events</title>
        <meta name="description" content="Find a lot of events here that help you to evolve....."/>
      </Head>
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
    revalidate: 1800,
  };
}
export default HomePage;
