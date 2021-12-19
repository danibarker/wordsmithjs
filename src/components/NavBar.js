import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";
const NavBar = ({ client, setConnected }) => {
  return (
    <div
      className="nav-bar"
      onClick={() => {
        if (client.ws) {
          client.disconnect();
          setConnected(false)
        }
      }}
    >
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/setup"><Button>Setup</Button></Link>
    </div>
  );
};
export default NavBar;
