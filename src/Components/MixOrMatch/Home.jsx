import React, { useEffect, useState } from "react";
import "./Home.css";
import { Container, Button } from "react-bootstrap";
import pumpkin from "../../assets/Images/pumpkin.png";
import superman from "../../assets/Images/superman.png";
import ironman from "../../assets/Images/ironman.png";
import spiderman from "../../assets/Images/spiderman.png";
import hulk from "../../assets/Images/hulk.png";
import falcon from "../../assets/Images/falcon.png";
import captain from "../../assets/Images/captain.png";
import thor from "../../assets/Images/thor.png";
import captainmarvel from "../../assets/Images/captain marvel.png";
import doctor from "../../assets/Images/doctor-strange.png";
import logo from "../../assets/Images/marvel-logo-0.png";
import hero from "../../assets/Images/HERO.png";
import start from "../../assets/Images/start.jpg";
import { Modal } from "react-bootstrap";
import { log } from "loglevel";
export default function Home() {
  // const [counter, setCounter] = useState(100);
  const [ClickCounter, setClickCounter] = useState(0);
  let [DisplayArray, setDisplayArray] = useState([]);
  let [Timer, setTimer] = useState();
  const [modalShow, setModalShow] = useState(false);

  const isFlipped = (e) => {
    setClickCounter(ClickCounter + 1);
    const id = e.target.getAttribute("id");
  console.log(id);
  };

  var PicArray = [
    superman,
    spiderman,
    hulk,
    falcon,
    captain,
    thor,
    doctor,
    captainmarvel,
    superman,
    spiderman,
    hulk,
    falcon,
    captain,
    thor,
    doctor,
    captainmarvel,
  ];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const isGameReady = () => {
    console.log(shuffleArray(PicArray));
    var x = shuffleArray(PicArray);
    setDisplayArray(...DisplayArray, x);
  };

  const timer = () => {
    let time = 100;
    setInterval(() => {
      if (time > 0) setTimer(time--);
    }, 1000);
  };

  const [show, setShow] = useState(false);
  const showme = () => {
    if (show === false) {
      setShow(true);
    } else setShow(false);
  };

  useEffect(() => {
    isGameReady();
    showme();
  }, []);

  return (
    <div>
      <div onClick={showme}>
        <Modal
          show={show}
          fullscreen="true"
          onHide={() => {
            showme();
            timer();
          }}
     
         
          centered
        >
          <div className="modal-size-back " style={{ padding: "50px",background:"transparent"  }}>
            {/* <h1 className="switch-on-game">
             click to start
            </h1> */}
            <img className="switch-on-game" src={start} alt="" srcset="" />
          </div>
        </Modal>
      </div>

      <div className="Heroheader">
        {/* MIX <img src={pumpkin} style={{ width: "100px" }} />R MATCH */}

        <img className="heroimg" src={hero} alt="" srcSet="" />
      </div>

      <Container className="maincontainer">
        <Container className="infocontainer">
          <div className="game-info">
            Time <span> {Timer} </span>
          </div>
          <div className="game-info">
            Flips <span>{ClickCounter}</span>
          </div>
        </Container>

        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f ">
            <imgcardf
              className="card-value imgfit"
              // src={spiderman}
              src={DisplayArray[0]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={spiderman}
              src={DisplayArray[1]}
              alt=""
              srcSet=""
            />
          </div>
        </div>

        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={captain}
              src={DisplayArray[2]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={captain}
              src={DisplayArray[3]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={hulk}
              src={DisplayArray[4]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={hulk}
              src={DisplayArray[5]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={superman}
              src={DisplayArray[6]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={superman}
              src={DisplayArray[7]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={doctor}
              src={DisplayArray[8]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={doctor}
              src={DisplayArray[9]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={falcon}
              src={DisplayArray[10]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={falcon}
              src={DisplayArray[11]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={captainmarvel}
              src={DisplayArray[12]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={captainmarvel}
              src={DisplayArray[13]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>
          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet="" />
          </div>
          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              // src={thor}
              src={DisplayArray[14]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="card" onClick={isFlipped}>

          <div className="card_b cardf">
            <img className="spider imgfit" src={logo} alt="" srcSet=""  id="CardNo16"/>
          </div>



          <div className="card_f cardf">
            <img
              className="card-value imgfit"
              src={DisplayArray[15]}
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
