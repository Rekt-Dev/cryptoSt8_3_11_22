import { React } from "react";
import { useNavigate } from "react-router-dom";

export let Card = (props) => {
  const nav = useNavigate();
  const updateSomething = () => {
    console.log("updateSomething ran bish");
    props.coins.function;
  };
  return (
    <div>
      <div>
        <div className="Card" /* onClick={() => nav(`opencoin`)} */>
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "http://books.google.com/books/content?id=FDJBgvXyZrsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
            }}
            alt=" 3 cats"
            height="300"
            width="300"
            src={
              "http://books.google.com/books/content?id=FDJBgvXyZrsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
            onMouseOut={() => console.log("out of hover")}
            onMouseOver={() => console.log("into hover")}
          />
          <div>bluh: {props.element[0]}</div>
          <button onClick={updateSomething}>press me 2 update something</button>
          <div style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
          <p>toileth: {props.element[1]}</p>
          <div>coins: </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
