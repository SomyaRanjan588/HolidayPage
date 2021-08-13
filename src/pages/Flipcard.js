import React from "react";

function Flipcard() {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
          </div>
          <div className="flip-card-back">
            <h6>John Doe</h6>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
