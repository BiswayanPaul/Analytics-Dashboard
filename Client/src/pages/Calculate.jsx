import axios from "axios";
import { useEffect, useState } from "react";

const Calculate = () => {
  const [cost, setCost] = useState();
  const [fail, setFail] = useState();
  const [time, setTime] = useState();
  const { highest_failure, total_cost, total_downtime } = axios.get(
    "/dashboard/calculate"
  );

  useEffect(() => {
    setCost(total_cost);
    setFail(highest_failure);
    setTime(total_downtime);
  }, [total_cost, highest_failure, total_downtime]);

  return (
    <div>
      <div>The total cost is {cost}</div>
      <div>The total Downtime is {fail}</div>
      <div>The highest failure is {time}</div>
    </div>
  );
};

export default Calculate;
