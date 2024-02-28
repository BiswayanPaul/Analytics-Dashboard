import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function AssetsCollection() {
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
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
    setData({ ...data, OperationalStatus: checked });
  };

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
      const { data } = await axios.post("/dashboard/assetcollection", {
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
        navigate("/dashboard/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {!!user && <h2> Hi {user.name}!</h2>}
      <form action="" onSubmit={assetCollection}>
        <label>AssetName</label>
        <input
          type="AssetName"
          placeholder="Enter AssetName"
          value={data.AssetName}
          onChange={(e) => setData({ ...data, AssetName: e.target.value })}
        />
        <br />

        <label>AssetType</label>
        <input
          type="AssetType"
          placeholder="Enter AssetType"
          value={data.AssetType}
          onChange={(e) => setData({ ...data, AssetType: e.target.value })}
        />
        <br />

        <label>Location</label>
        <input
          type="Location"
          placeholder="Enter Location"
          value={data.Location}
          onChange={(e) => setData({ ...data, Location: e.target.value })}
        />
        <br />

        <label>PurchaseDate</label>
        <input
          type="date"
          placeholder="Enter PurchaseDate"
          value={data.PurchaseDate}
          onChange={(e) => setData({ ...data, PurchaseDate: e.target.value })}
        />
        <br />

        <label>InitialCost</label>
        <input
          type="number"
          placeholder="Enter InitialCost"
          value={data.InitialCost}
          onChange={(e) => setData({ ...data, InitialCost: e.target.value })}
        />
        <br />

        <label>OperationalStatus</label>
        <input
          type="checkbox"
          checked={checked}
          value={data.OperationalStatus}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
