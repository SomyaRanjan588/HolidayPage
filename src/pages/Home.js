import React from "react";
import "../App.css";
import Pho from "../Homeimage";
import Cen from "../century";
import Rem from "../Remax";
import Win from "../Wind";
import Cor from "../Corcorna";
import Cold from "../cold";

function Home() {
  return (
    <div>
      <div className="container-fluid10">
        <div className="homecard">
          <div className="row">
            <div className="col-md-7">
              <div className="leftone">
                <p className="leftpara1">Verified and Exclusive </p>
                <p className="leftpara2">
                  We turn leads into <br></br>
                  <span className="leftspan">buyer-ready customers</span>
                </p>

                <p className="leftpara3">
                  What could be better for your employer brand that own
                  employees
                  <br></br>
                  tell their friends, families and{" "}
                  <span className="leftspan2">social networks </span>
                  how great is to work.
                </p>
                <p className="leftpara4">At your company?</p>
                <div className="check">
                  <button className="checkbtn">Check availability</button>
                </div>
                <div className="PPC">
                  <p className="leftpara5">
                    We need to improve our digital marketing efforts, ReadyLead
                    provide a<br></br>turnkey solution for our PPC ads ISA
                    efforts
                  </p>
                </div>
                <div className="hrline"></div>
                <div className="lastline">
                  <p className="leftpara6">
                    <b>Daniel Moskowitz,</b> Dunes Real Estate
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="rightone">
                <div className="photo">
                  <Pho />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white">
          <div className="row" className="lastdiv">
            <div className="col-md-12">
              <p className="trust">Trusted by the best in the business</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-1">
              <Cen />
            </div>
            <div className=" col-md-1">
              <p className="berk">
                BERKSHIER<br></br>HATHWAY
              </p>
            </div>
            <div className="col-md-1">
              <p className="soth">Sotheby's</p>
            </div>
            <div className="col-md-1.5">
              <p className="rem">RE/MAX</p>
            </div>
            <div className="col-md-1.5">
              <p className="winder">
                <Win />
              </p>
            </div>
            <div className="col-md-1.5">
              <p className="corco">
                <Cor />
              </p>
            </div>
            <div className="col-md-1">
              <Cold />
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
