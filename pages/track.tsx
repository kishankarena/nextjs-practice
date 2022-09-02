// Static Generation with getStaticProps
import { GetStaticProps, NextPage } from 'next';
interface Props {
  tracks: Track[];
}
interface Track {
  id: String;
  title: String;
}
const Track: NextPage<Props> = ({ tracks }) => {
  return (
    <ul>
      {tracks.map((track) => {
        return (
          <div>
            <h4>{`ID: ${track.id} => Title: ${track.title}`}</h4>
          </div>
        );
      })}
    </ul>
  );
};

export default Track;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://odyssey-lift-off-rest-api.herokuapp.com/tracks'
  );
  const tracks = await res.json();
  return {
    props: {
      tracks,
    },
  };
};
