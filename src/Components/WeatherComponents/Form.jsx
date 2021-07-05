const Weather = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  function handleSubmit(e) {
    props.onSubmit(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={props.value}
        onChange={handleChange}
        placeholder="City"
      />
      <button>Search</button>
    </form>
  );
};

export default Weather;
