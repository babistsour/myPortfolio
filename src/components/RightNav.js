import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: #ee5134;
  margin-right: 2rem;
  gap: 2rem;

  li {
    padding: 18px 10px;
    font-size: 1.5rem;
    text-transform: lowercase;

    a {
      transition: all 0.3s ease-in-out;

      :hover {
        color: #d1d1d1;
      }
    }
  }

  @media (max-width: 650px) {
    font-family: "Pathway Gothic One", sans-serif;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    gap: 0rem;
    background-color: #d1d1d1;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: -2rem;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #23252a;
      text-transform: uppercase;

      a {
        font-size: 2rem;
        display: inline-block;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in-out;

        :hover {
          border-bottom: 2px solid red;
          color: #23252a;
        }
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </Ul>
  );
};

export default RightNav;
