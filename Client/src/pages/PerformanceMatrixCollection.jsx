import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import axios from "axios";

export default function PerformanceMatrixCollection() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    Downtime: "",
    MaintainanceCose: "",
    FailureRate: "",
    Efficiency: "",
  });

  const performanceCollection = async (e) => {
    e.preventDefault();
    const { Uptime, Downtime, MaintainanceCose, FailureRate, Efficiency } =
      data;
    try {
      const { data } = await axios.post(
        "/dashboard/performancematrixcollection",
        {
          Uptime,
          Downtime,
          MaintainanceCose,
          FailureRate,
          Efficiency,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        console.log("done");
        toast.success("Performance Collection Successful!!");
        navigate("/dashboard/");
      }
    } catch (e) {
      console.log("Failed to get the data");
      console.log(e);
    }
  };

  return (
    <div>
      {!!user && <h2> Hi {user.name}!</h2>}
      <form action="" onSubmit={performanceCollection}>
        <label>Uptime</label>
        <input
          type="text"
          placeholder="Enter Uptime"
          value={data.Uptime}
          onChange={(e) => setData({ ...data, Uptime: e.target.value })}
        />
        <br />
        <label>Downtime</label>
        <input
          type="text"
          placeholder="Enter Downtime"
          value={data.Downtime}
          onChange={(e) => setData({ ...data, Downtime: e.target.value })}
        />
        <br />

        <label>MaintainanceCose</label>
        <input
          type="number"
          placeholder="Enter MaintainanceCose"
          value={data.MaintainanceCose}
          onChange={(e) =>
            setData({ ...data, MaintainanceCose: e.target.value })
          }
        />
        <br />

        <label>FailureRate</label>
        <input
          type="number"
          placeholder="Enter FailureRate"
          value={data.FailureRate}
          onChange={(e) => setData({ ...data, FailureRate: e.target.value })}
        />
        <br />

        <label>Efficiency</label>
        <input
          type="number"
          placeholder="Enter Efficiency"
          value={data.Efficiency}
          onChange={(e) => setData({ ...data, Efficiency: e.target.value })}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
