import React, { useEffect } from "react";
import styled from "styled-components";

import Streams from "../components/dashboard/Streams";
import scrollreveal from "scrollreveal";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar";
import Earnings from "../components/dashboard/Earnings";
import TopReleases from "../components/dashboard/TopReleases";
import TargetAudience from "../components/dashboard/TargetAudience";

function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row,
        .row2
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (

    <Section>

<Navbar />
      <div className="grid">
        <div className="row">
<Streams />
<Earnings />
        </div>
        <div className="row2">
        <TargetAudience />
          <TopReleases />
        </div>
      </div>

    </Section>

  );
}

const Section = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(3, 3, 27, 0.7);

  .grid {
    padding: 2rem;
    padding-top: 0;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    .row {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1rem;
    }
    .row2 {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 1rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: max-content;
    .grid {
      grid-template-columns: 1fr;
      padding: 1rem;
      height: max-content;
      .row,
      .row2 {
        /* height: max-content; */
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Dashboard;
