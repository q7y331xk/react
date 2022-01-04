import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "../styles/detail.css";
function Detail() {
  const [ready, setReady] = useState(false);
  const [data, setdata] = useState({});

  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setdata(json.data.movie);
    setReady(true);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <Fragment>
      {ready ? <span>{data.id}</span> : <h2> load data...</h2>}
    </Fragment>
  );
}

export default Detail;
