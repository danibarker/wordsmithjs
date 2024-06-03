import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";
import { useData } from "../providers/DataProvider";
const NavBar = () => {
  const { client, setConnected } = useData();

  return (
    <div
      className="nav-bar"
      onClick={() => {
        if (client && client.ws) {
          client.disconnect();
          setConnected(false);
        }
      }}
    >
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/setup">
        <Button>Setup</Button>
      </Link>
      <Link to={`/test`}>
        <Button>Test</Button>
      </Link>
    </div>
  );
};
export default NavBar;
