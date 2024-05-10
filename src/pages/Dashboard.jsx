import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const letters = [
    ..."The quick brown fox jumps over the lazy dog"
      .split("")
      .filter((item) => item !== " "),
  ];
  const navigate = useNavigate();

  const generateRandomRoomId = (limit) => {
    const ranNum = Math.ceil(Math.random() * 1000);

    const ranName = [];

    for (let i = 0; i < limit; i++) {
      console.log(i);
      const ranIndex = Math.ceil(Math.random() * limit);
      const element = letters[ranIndex];
      console.log("ele", element);
      if (element) {
        ranName.push(element);
      }
    }
    console.log(ranName);
    return `${ranName.join("")}${ranNum}`;
  };

  const randomRoomId = generateRandomRoomId(6);

  return (
    <div className="dashboard">
      <div className="form">
        <h1 className="heading">Room Id</h1>
        <div className="room-id"> {randomRoomId}</div>
        <button onClick={() => navigate(`document/${randomRoomId}`)}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
