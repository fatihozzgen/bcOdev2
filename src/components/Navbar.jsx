function Navbar({ query, setQuery, selects, setSelects, search, setSearch }) {
  const changeS = (e) => {
    setSelects(e);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="navcont">
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={handleSearch}
        />

        <select
          value={selects}
          className="select"
          onChange={(event) => changeS(event.target.value)}
        >
          <option>All</option>
          <option>male</option>
          <option>female</option>
          <option>n/a</option>
        </select>
      </div>

      <div className="info">
        <div className="name">Name</div>
        <div className="height">Height</div>
        <div className="gender">Gender</div>
        <div className="fav">Favorite Films</div>
      </div>
    </div>
  );
}

export default Navbar;
