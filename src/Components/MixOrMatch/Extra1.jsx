import React, { useState } from "react";
import "./Extra.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import superman from "../../assets/Images/superman.png";
import spiderman from "../../assets/Images/spideyAmazing.png";
import hulk from "../../assets/Images/hulk.png";
import falcon from "../../assets/Images/falcon.png";
import captain from "../../assets/Images/captain.png";
import thor from "../../assets/Images/thor.png";
import captainmarvel from "../../assets/Images/captain marvel.png";
import doctor from "../../assets/Images/doctor-strange.png";
import hero from "../../assets/Images/HERO.png";
import timeup from "../../assets/Images/timeup.jpeg";
import complete from "../../assets/Images/complete.jpeg";
import start from "../../assets/Images/start.jpg";
import { Modal } from "react-bootstrap";
import useSound from "use-sound";
import custSound from "../../assets/audio.wav";
import avenger_theme from "../../assets/Avengers_Theme.wav";
function shuffleArray(array) {
  for (var i = array?.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

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

var DisplayArray = shuffleArray(PicArray);

export default function Extra() {
  const [counter, setCounter] = useState(14);
  const [ClickCounter, setClickCounter] = useState(0);
  const [play] = useSound(custSound, {
    volume: 0.25,
    sprite: {
      start: [0, 1500],
      click: [1800, 400],
      end: [3500, 700],
    },
  });
  const [playAvengers] = useSound(avenger_theme, {
    volume: 0.5,
    sprite: {
      end: [206800, 25000],
    },
  });

  let [timer, setTimer] = useState();
  const [preval, setpreval] = useState();
  const [Prepos, setPrepos] = useState();
  const [preName, setPreName] = useState();
  const [endtime, setEndtime] = useState();
  const [flip,setFlip] = useState(0)
  const [state, setState] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    check9: false,
    check10: false,
    check11: false,
    check12: false,
    check13: false,
    check14: false,
    check15: false,
    check16: false,
  });

  const Timer = () => {
    play({ id: "start" });

    let time = 100;
    var x = setInterval(() => {
      if (time > 0) {
        setTimer(time--);
      } else if (time === 0) {
        // setTimer(time);
        setShow2(true);
        refreshpage()
        clearInterval(x);
      }
    }, 1000);
  };

  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const refreshpage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 7000);
  };
/*ERROR  HAPPEND*/
  const handleClick = (e) => {
    play({ id: "click" });

    setClickCounter(ClickCounter + 1);
    console.log("Clicked");
    const name = e.target.getAttribute("name");

    let temp = { ...state };
   
     
    if (temp[name]===true && flip===0){
      console.log("ami true",temp[name])
      temp[name] = false;
    } 
    else if( temp[name] === false){
      temp[name]=true
      setFlip(flip+1)
      console.log(flip)
    } 
    setState(temp);
    console.log(state);
  };

  const isWin = () => {
    setCounter(counter - 2);

    if (counter === 0) {
      setShow1(true);

      refreshpage();
    }
  };

  const CheckCard = (arg1, pos, nm) => {
    if (!preval && !Prepos && !preName) {
      setpreval(arg1);
      setPrepos(pos);
      setPreName(nm);
     
      return;
    } else {
      if (preval === arg1 && Prepos !== pos) {
        let temp = { ...state };
        temp[nm] = "match";
        temp[preName] = "match";

        console.log(temp);
        setState(temp);
        isWin();
      } else {
        let temp = { ...state };
        temp[nm] = false;
        temp[preName] = false;
        setState(temp);
        console.log(state);
      }
      setPrepos();
      setpreval();
      setPreName();
      setFlip(0)
    }
  };

  // useEffect(() => {
  //   isGameReady();

  return (
    <div>
      <Modal
        show={show}
        size="lg"
        fullscreen="true"
        onHide={() => {
          setShow(false);
          Timer();
        }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      > 
       {show===true ?      playAvengers({id:"end"}): "" }
        <div className="modal-size-back" style={{ margin: "30px" }}>
          <img className="switch-on-game" src={start} alt="" srcset="" />
        </div>
      </Modal>

      <div className="Heroheader">
        <img className="heroimg" src={hero} alt="" srcSet="" />
      </div>

      <Container className="maincontainer">
        <Container className="infocontainer">
          <div className="game-info">
            Time <span> {timer}</span>
          </div>
          <div className="game-info flipsss">
            Flips <span>{ClickCounter}</span>
          </div>
        </Container>
        <div id="mainrow">
          <Row>
            <Col>
              <Card
                className={`card-color ${state?.check1 && "card-color-chng"}`}
                name="check1"
                onClick={(e) => {
                  if (state?.check1 !== "match") {
                    handleClick(e,flip);
                    CheckCard(
                      DisplayArray[0],
                      0,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 0 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check1 && "card-back-img2"
                  }`}
                  name="check1"
                  src={DisplayArray[0]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check2 && "card-color-chng"}`}
                name="check2"
                onClick={(e) => {
                  if (state?.check2 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[1],
                      1,
                      e.target.getAttribute("name")
                    );
                  }
                }}  
                style={{ pointerEvents: Prepos === 1 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check2 && "card-back-img2"
                  }`}
                  name="check2"
                  src={DisplayArray[1]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check3 && "card-color-chng"}`}
                name="check3"
                onClick={(e) => {
                  if (state?.check3 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[2],
                      2,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 2 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check3 && "card-back-img2"
                  }`}
                  name="check3"
                  src={DisplayArray[2]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check4 && "card-color-chng"}`}
                name="check4"
                onClick={(e) => {
                  if (state?.check4 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[3],
                      3,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 3 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check4 && "card-back-img2"
                  }`}
                  name="check4"
                  src={DisplayArray[3]}
                  alt=""
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                className={`card-color ${state?.check5 && "card-color-chng"}`}
                name="check5"
                onClick={(e) => {
                  if (state?.check5 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[4],
                      4,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 4 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check5 && "card-back-img2"
                  }`}
                  name="check5"
                  src={DisplayArray[4]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check6 && "card-color-chng"}`}
                name="check6"
                onClick={(e) => {
                  if (state?.check6 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[5],
                      5,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 5 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check6 && "card-back-img2"
                  }`}
                  name="check6"
                  src={DisplayArray[5]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check7 && "card-color-chng"}`}
                name="check7"
                onClick={(e) => {
                  if (state?.check7 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[6],
                      6,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 6 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check7 && "card-back-img2"
                  }`}
                  name="check7"
                  src={DisplayArray[6]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check8 && "card-color-chng"}`}
                name="check8"
                onClick={(e) => {
                  if (state?.check8 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[7],
                      7,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 7 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check8 && "card-back-img2"
                  }`}
                  name="check8"
                  src={DisplayArray[7]}
                  alt=""
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                className={`card-color ${state?.check9 && "card-color-chng"}`}
                name="check9"
                onClick={(e) => {
                  if (state?.check9 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[8],
                      8,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 8 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check9 && "card-back-img2"
                  }`}
                  name="check9"
                  src={DisplayArray[8]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check10 && "card-color-chng"}`}
                name="check10"
                onClick={(e) => {
                  if (state?.check10 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[9],
                      9,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 9 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check10 && "card-back-img2"
                  }`}
                  name="check10"
                  src={DisplayArray[9]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check11 && "card-color-chng"}`}
                name="check11"
                onClick={(e) => {
                  if (state?.check11 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[10],
                      10,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 10 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check11 && "card-back-img2"
                  }`}
                  name="check11"
                  src={DisplayArray[10]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check12 && "card-color-chng"}`}
                name="check12"
                onClick={(e) => {
                  if (state?.check12 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[11],
                      11,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 11 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check12 && "card-back-img2"
                  }`}
                  name="check12"
                  src={DisplayArray[11]}
                  alt=""
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                className={`card-color ${state?.check13 && "card-color-chng"}`}
                name="check13"
                onClick={(e) => {
                  if (state?.check13 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[12],
                      12,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 12 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check13 && "card-back-img2"
                  }`}
                  name="check13"
                  src={DisplayArray[12]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check14 && "card-color-chng"}`}
                name="check14"
                onClick={(e) => {
                  if (state?.check14 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[13],
                      13,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 13 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check14 && "card-back-img2"
                  }`}
                  name="check14"
                  src={DisplayArray[13]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check15 && "card-color-chng"}`}
                name="check15"
                onClick={(e) => {
                  if (state?.check15 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[14],
                      14,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 14 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check15 && "card-back-img2"
                  }`}
                  name="check15"
                  src={DisplayArray[14]}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <Card
                className={`card-color ${state?.check16 && "card-color-chng"}`}
                name="check16"
                onClick={(e) => {
                  if (state?.check16 !== "match") {
                    handleClick(e);
                    CheckCard(
                      DisplayArray[15],
                      15,
                      e.target.getAttribute("name")
                    );
                  }
                }}
                style={{ pointerEvents: Prepos === 15 ? "none" : "" }}
              >
                <img
                  className={`card-back-img1 ${
                    state?.check16 && "card-back-img2"
                  }`}
                  name="check16"
                  src={DisplayArray[15]}
                  alt=""
                />
              </Card>
            </Col>
          </Row>
        </div>

        <Modal
          show={show1}
          size="lg"
          fullscreen="true"
          onHide={() => {
            setShow1(false);
          }}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
          > 
           {/* {show1===true ?      playAvengers({id:"end"}): "" } */}
          <div className="modal-size-back" style={{ margin: "30px" }}>
            <img className="switch-on-game" src={complete} alt="" srcset="" />
          </div>
        </Modal>
        <Modal
          show={show2}
          size="lg"
          fullscreen="true"
          onHide={() => {
            setShow2(true);
          }}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <div className="modal-size-back" style={{ margin: "30px" }}>
            <img className="switch-on-game" src={timeup} alt="" srcset="" />
          </div>
          {/* {show2===true ?      playAvengers({id:"end"}): "" } */}
        </Modal>
      </Container>
    </div>
  );
}
