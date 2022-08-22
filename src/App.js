import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  const [selects, setSelects] = useState();
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  if (login) {
    return <Login setLogin={setLogin} />;
  }

  return (
    <>
      <div className="container">
        <Navbar
          selects={selects}
          setSelects={setSelects}
          search={search}
          setSearch={setSearch}
        />

        <Card
          loading={loading}
          setLoading={setLoading}
          selects={selects}
          setSelects={setSelects}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  );
}

export default App;
