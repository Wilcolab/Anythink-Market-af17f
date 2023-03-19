import React from "react";

import agent from "../../agent";

const SearchBox = (props) => {
  const onSearchChange = (e) => {
    props.onSearchFilter(
      e.target.value,
      (page) => agent.Items.byTitle(e.target.value),
      agent.Items.byTitle(e.target.value)
    );
  };
  const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
  };

  return (
    <form>
      <input
        id="search-box"
        name="term"
        style={BarStyle}
        type="text"
        placeholder="what is it that you truly desire?"
        onChange={onSearchChange}
      />
    </form>
  );
};

export default SearchBox;
