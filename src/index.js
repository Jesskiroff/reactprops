import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
  <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
  );
} 

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="cat in hat" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    tel="12345678" 
    email="catinhat@gmail.com"
    />
    <Card 
    name="Jerry" 
    img="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png" 
    tel="12345679" 
    email="jerry@gmailcom"
    />
  </div>,
  document.getElementById("root")
);
