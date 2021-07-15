import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { H1, Home } from "./Style";

const ChatApp = () => {
  return (
    <>
      <H1>Coming Soon</H1>
      <Link to="/">
        <Home icon={faHome} />
      </Link>
    </>
  );
};

export default ChatApp;
