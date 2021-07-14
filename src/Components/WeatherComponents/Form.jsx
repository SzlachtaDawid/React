import { Input, Button } from "./Style";

const Weather = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  function handleSubmit(e) {
    props.onSubmit(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={props.value}
        onChange={handleChange}
        placeholder="City"
      />
      <Button>Search</Button>
    </form>
  );
};

export default Weather;
