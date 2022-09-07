import Link from 'next/link';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `events/${id}`;
  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
