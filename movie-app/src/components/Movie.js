import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={medium_cover_image} alt="coverImg" />
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres?.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  medium_cover_image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
};

export default Movie;
