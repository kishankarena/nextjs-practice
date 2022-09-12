// Static Generation with getStaticProps
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
interface Props {
  tracks: Track[];
}
interface Track {
  id: String;
  title: String;
}
const Track: NextPage<Props> = ({ tracks }) => {
  const router = useRouter();
  function clickHandler(id: String) {
    router.push(`./product/${id}`);
  }
  return (
    <ul>
      {tracks.map((track) => {
        return (
          <div key={`${track.id}`}>
            <button onClick={() => clickHandler(track.id)}>{track.id}</button>
            <h4>{`Title: ${track.title}`}</h4>
          </div>
        );
      })}
    </ul>
  );
};

export default Track;

export const getStaticProps: GetStaticProps = async () => {
  console.log('Re-Generating....');
  const res = await fetch(
    'https://odyssey-lift-off-rest-api.herokuapp.com/tracks'
  );
  const tracks = await res.json();
  if (!tracks) {
    return {
      redirect: {
        destination: './',
        permanent: false,
      },
    };
  }
  if (tracks.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      tracks,
    },
    revalidate: 10,
  };
};
