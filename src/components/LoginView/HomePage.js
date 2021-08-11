import React from "react";
import { useState } from "react";
import ModalDialog from "./ModalDialog";
// import styled, { keyframes } from "styled-components";
// import { fadeIn } from "react-animations";
// import "./HomePage.css";
// import ParticlesBg from "particles-bg";

function HomePage() {
  // const Bounce = styled.div`
  //   animation: 2s ${keyframes`${fadeIn}`};
  // `;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="particles">
        {/* <ParticlesBg color="#5cfafa" type="cobweb" bg={true} /> */}
        <button class="btn" onClick={handleOpen}>
          <b>SIGN IN</b>
        </button>
        <ModalDialog open={open} handleClose={handleClose} />
      </div>
      {/* <Bounce>
        <h1>WELCOME TO CEHR</h1>
      </Bounce> */}
    </div>
  );
}

export default HomePage;
