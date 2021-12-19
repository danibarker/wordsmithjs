import { Link } from "react-router-dom";
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
      <Link to="/">Home</Link>
      <Link to="/setup">Setup</Link>
    </div>
  );
};
export default NavBar;
