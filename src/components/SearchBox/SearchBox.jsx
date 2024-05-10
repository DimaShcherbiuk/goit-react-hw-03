function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="searche"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
