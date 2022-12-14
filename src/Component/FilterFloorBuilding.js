import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FilterFloorBuilding({ setFloorBuilding, students }) {
  const [dormitories, setDormitories] = useState({});

  const onChange = (e) => {
    setFloorBuilding(e.target.value);
  };

  useEffect(() => {
    async function getDormitories() {
      try {
        const dormitory = await axios.get(
          `http://localhost:8000/dormitories/1`
        );
        // console.log(dormitory.data);
        setDormitories(dormitory.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDormitories();
  }, []);

  // console.log(dormitories);
  const getNumfloor = new Array(dormitories.floor)
    .fill(0)
    .map((value, index) => index + 2)
    .slice(0, dormitories.floor - 1);
  // console.log(getNumfloor);

  return (
    <>
      <select
        onChange={onChange}
        class="form-select mb-3"
        aria-label="Default select example"
        disabled={students.statusReserve}
      >
        {students.statusReserve ? <option>-</option> : <option>ทั้งหมด</option>}
        {students.statusReserve
          ? null
          : getNumfloor.map((floor) => (
              <option key={floor} value={floor}>
                {floor}
              </option>
            ))}
      </select>
    </>
  );
}
