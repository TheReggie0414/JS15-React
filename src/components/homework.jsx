import { useEffect, useState } from "react";

const App = () => {
  const [post, setPosts] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [coord, setCoord] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch("https://dummyjson.com/posts");
      const data = await resp.json();
      setPosts(data.posts);
    };

    loadData();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [seconds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const long = pos.coords.longitude;
      const lat = pos.coords.latitude;
      setCoord({ long, lat });
    });
  }, []);

  return (
    <div>
      {seconds}
      <br />
      {coord?.long}
      &nbsp;
      {coord?.lat}
      {post?.map(({ id, title }) => {
        return <p key={id}>{title}</p>;
      })}
    </div>
  );
};

export default App;
