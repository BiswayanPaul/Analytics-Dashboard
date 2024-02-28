import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2> Hi {user.name}!</h2>}
      <Link to="./assetcollection">Asset Collection</Link>
      <br />
      <Link to="./calculate">Calculate</Link>
      <br />
    </div>
  );
}
