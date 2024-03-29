import { useEffect, useState, useContext } from "react";
import Champion from "./Champion.js";
import { API_BASE_URL } from "../constants";
import { UserContext } from "../contexts/UserContext";
import { defaultChamp } from "../static/DefaultChampion";

const Champions = (props) => {
  const [champions, setChampions] = useState([defaultChamp]);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    const getChampions = async () => {
      const search = props.location.search;
      const params = new URLSearchParams(search);
      const tag = params.get("tag");
      let championsFromApi = await fetchChampions(tag);
      championsFromApi = Object.entries(championsFromApi).map((e) => e[1]);
      setChampions(championsFromApi);
    };
    getChampions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.search, user]);

  const toggleUpdate = () => {};

  const fetchChampions = async (tag) => {
    let res;
    let requestOptions;
    console.log(user);
    if (!user) {
      res =
        tag !== null
          ? await fetch(`${API_BASE_URL}/champions/${tag}`)
          : await fetch(`${API_BASE_URL}/champions`);
    } else {
      requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
      };
      res =
        tag !== null
          ? await fetch(`${API_BASE_URL}/user/champions/${tag}`, requestOptions)
          : await fetch(`${API_BASE_URL}/user/champions`, requestOptions);
    }
    const data = await res.json();
    return data.data;
  };

  return (
    <div>
      {champions.map((champion) => (
        <Champion
          key={champion.id}
          champion={champion}
          toggleUpdate={toggleUpdate}
        />
      ))}
    </div>
  );
};

export default Champions;
