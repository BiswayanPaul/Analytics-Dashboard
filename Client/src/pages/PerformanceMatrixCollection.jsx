import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function PerformanceMatrixCollection() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    AssetName: "",
    AssetType: "",
    Location: "",
    PurchaseDate: "",
    InitialCost: "",
    OperationalStatus: "",
  });

  const assetCollection = async (e) => {
    e.preventDefault();
    const {
      AssetName,
      AssetType,
      Location,
      PurchaseDate,
      InitialCost,
      OperationalStatus,
    } = data;
    try {
      const { data } = await axios.post("/dashboard", {
        AssetName,
        AssetType,
        Location,
        PurchaseDate,
        InitialCost,
        OperationalStatus,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Asset Collection Successful!!");
        navigate;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <form action="" onSubmit={assetCollection}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
