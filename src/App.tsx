import React, { FC, Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { Cluster, clusterApiUrl, Connection, PublicKey, Keypair } from '@solana/web3.js';
import QRCode from "./QRCode"

import config from "./config.json"
import styled from "styled-components";
import scrollreveal from "scrollreveal";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link
} from "react-router-dom";
import Streams from './components/dashboard/Streams';

//Dashboard
import SideBarLeft from "./components/dashboard/SideBarLeft"
import Dashboard from './pages/Dashboard';
import SideBarRight from "./components/dashboard/SideBarRight"

import Login from "./pages/Login"

process.env.REFERENCE = config.reference || ``;
process.env.LABEL = config.label || ``;
process.env.MESSAGE = config.message  || ``;
process.env.MEMO = config.memo || ``;
process.env.RECIPIENT = config.recipient || ``;



function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
       #sidebar
    `,
      {
        opacity: 0,
      }
    );
    const sr2 = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr2.reveal(
      `
       #rightSidebar
    `,
      {
        opacity: 0,
      }
    );
  }, []);

  return (
<Div>
  <Router>
    <Routes>
      <Fragment>


      <Route
      path="dashboard/*"
      element={
        <>
        <SideBarLeft />
        <Dashboard />
        <SideBarRight />
        </>
      }
    />

      <Route
        path="auth/login"
        element={
          <>
          <Login />
          </>
        }
      />
          
      </Fragment>
    </Routes>
  </Router>
</Div>


  );
}

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 12fr 4fr;
  min-height: 100vh;
  height: max-content;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    height: max-content;
  }
`;


export default App;


