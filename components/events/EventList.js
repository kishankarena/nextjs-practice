import EventItem from './EventItem';

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
