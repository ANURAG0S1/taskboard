import React, { useState } from "react";
import "./content.css";

var arr = [
  { name: "all", value: 2 },
  { name: "started", value: 3 },
  { name: "Approval", value: 10 },
  { name: "completed", value: 18 },
];
function Content() {
  const [title, settitle] = useState(" ");
  const [progress, setprogress] = useState(" ");
  const [deadline, setDeadline] = useState(" ");
  // function handleclick() {
  //   document.querySelector("#input").style.display = "block";
  // }

  function TopContent() {
    return (
      <div className="flex topcontent">
        <div>
          <div className="t1">Reporting</div>
          <div className="t2">All projects in current month</div>
        </div>
        <button className="add_button">+</button>
      </div>
    );
  }
  function SortBar() {
    return (
      <div className="flex db">
        <ul className="status">
          {arr.map((a) => {
            return (
              <div className="box flex" key={a.value}>
                <div className="name">{a.name}</div>
                <div className="value ico">{a.value}</div>
              </div>
            );
          })}
        </ul>
        <ul className="icons">
          <li className="ico">o</li>
          <li className="ico">o</li>
          <li className="ico">o</li>
        </ul>
      </div>
    );
  }

  function CardForm() {
    function Addcard(e) {
      console.log(title);
    }
    return (
      <form>
        <label htmlFor="title">
          {" "}
          <input
            className="title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
              console.log(e.target.value);
            }}
            type="text"
          />
        </label>
        <label htmlFor="deadline">
          <input className="deadline" type="text" />
        </label>
        <button type="submit" onClick={Addcard}>
          {" "}
          add{" "}
        </button>
      </form>
    );
  }

  function Cards() {
    const [card, setcard] = useState([
      {
        color: "g ico-col",
        t1: " Acquisition mitra",
        t2: "Marketing team",
        t3: "1 weeks left",
        t4: ["q", "r", "p"],
        t5: "76%",
      },
      {
        color: "b ico-col",
        t1: "Web design",
        t2: "Marketing team",
        t3: "1 weeks left",
        t4: ["./../assets/head1.svg", "r", "p"],
        t5: "76%",
      },
      {
        color: "r ico-col",
        t1: "Landing page",
        t2: "Marketing team",
        t3: "1 weeks left",
        t4: ["q", "r", "p"],
        t5: "76%",
      },
      {
        color: "r ico-col",
        t1: "Sales & marketing",
        t2: "Marketing team",
        t3: "1 weeks left",
        t4: ["q", "r", "p"],
        t5: "76%",
      },
    ]);

    return (
      <div className="cards flex">
        {card.map((b) => {
          return (
            <div className="card" key={b.t1}>
              <div className={b.color}> </div>
              <div className="t1"> {b.t1} </div>
              <div className="t2 flex mt">
                {" "}
                <div className="goal s-ico"></div>
                {b.t2}
              </div>
              <div className="t3 flex mt">
                <div className="clo s-ico"></div>
                {b.t3}
              </div>
              <div className="t4 flex">
                <div className="team">
                  <div className="tea">Team members</div>
                  <div className="team-ico">
                    {b.t4.map((c) => {
                      return <img key={c} src={c} alt="" />;
                    })}
                  </div>
                </div>
                <div className="t5">
                  <div className="tea"> progress</div>
                  <div className="prg"> 70%</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="content">
      <TopContent />

      <hr />
      <SortBar />
      <Cards />
      <CardForm />
    </div>
  );
}

export default Content;
