import React from "react";
import styled from "styled-components";
import { cardStyle } from "../styles/CardStyle";
import { BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react"
import { supabase } from "../../client"

function LoginInput() {

const [email, setEmail] = useState('')

const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
        event.preventDefault()

    }

    async function signIn() {
      if (!email) return;
      const { error } = await supabase.auth.signIn({
        email
      })
      if (error) {
        console.log(error) }
        else {
        setSubmitted(true)
      }
    }
    if (submitted) {
      return (
        <div>
          <h1>Please check your email to sign in.</h1>
        </div>
      )
    }

  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Login</h4>
        </div>
<form onSubmit={signIn}>
    <input
        onChange={e=> setEmail(e.target.value)}
        type="text"
        placeholder="eMail adress"

        name="email"
    />
<button onClick={() => signIn()}> sign in </button>

</form>
          );

      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyle}
  color:white;
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    .title {
    }
    .filters {
      display: flex;
      align-items: center;
      gap: 3rem;
      color: var(--primary-color);
      button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        font-weight: bolder;
      }
    }
  }
  .musics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    .music {
      border-bottom: 0.1rem solid #242424;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .details {
        display: flex;
        gap: 1rem;
        .image {
          img {
            height: 2.5rem;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          h6 {
            font-weight: 100;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      flex-direction: column;
      gap: 0.5rem;
      .filters {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
    .musics {
      grid-template-columns: 1fr;
    }
  }
`;

export default LoginInput;
