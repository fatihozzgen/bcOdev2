import React from "react";
import { useState, useEffect } from "react";

function Card({ loading, selects, setSelects, setLoading, search, setSearch }) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .finally(setLoading(false));
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const deleteUser = (id) => {
    setData([...data.filter((item) => item.name !== id)]);
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          {" "}
          <div className="line-wobble"> </div>{" "}
        </div>
      ) : (
        <div>
          {data
            .filter((item) => item.name.toLowerCase().includes(search))
            .map((user, i) => (
              <div className="cards" key={i}>
                <div className="card">
                  <div> {user.name} </div>
                  <div> {user.height}</div>
                  <div> {user.gender}</div>
                  <div className="lastch"></div>
                </div>
                <button
                  className="remove"
                  onClick={() => deleteUser(user.name)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Card;
{
}
