import { Form, Input, Button } from "./Style";

const Weather = (props) => {
  function handleChange(e) {
    props.onChange(e.target.value);
  }
  function handleSubmit(e) {
    props.onSubmit(e);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={props.value}
        onChange={handleChange}
        placeholder="City"
      />
      <Button>Search</Button>
    </Form>
  );
};

export default Weather;
