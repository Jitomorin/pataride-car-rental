import styled from "styled-components";

import React from "react";
import { useTheme } from "@/components/Theme";

export const ThemeLight = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&family=Poppins&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #ffffff;
    font-family: "Poppins", sans-serif;
    position: relative;
  }
  .not-found-wrapper {
    background: rgb(251, 251, 253);
    /* margin: 10rem 0; */
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shared-container {
    max-width: 130em;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
  }
  .banner_container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
    height: 50vh;
  }
  .not-found-title {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    position: relative;
    width: auto;
    padding: 0 1rem;
    margin: auto, auto;
    margin-bottom: 3rem;
    ::after {
      content: "";
      position: absolute;
      top: 95%;
      width: 20%;
      aspect-ratio: 3 / 1;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 50%;
      border: 6px solid #f8d521;
      /* Use a conic gradient mask to hide and show the bits you want */
      --spread: 140deg;
      --start: 290deg;
      mask: conic-gradient(
        from var(--start),
        white 0 var(--spread),
        transparent var(--spread)
      );
    }
  }
  .not-found-description {
    font-size: 3rem;
    opacity: 0.8;
    font-family: "Poppins", sans-serif;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #000000 #ffffff;
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(83, 76, 75);
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #413b3b;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #5f5c5c;
  }
  /* components */
  .hero_button_light {
    display: inline-block;
    text-align: center;
    background: #000;
    color: #fff;
    font-weight: bold;
    padding: 2rem 4rem;
    line-height: 1;
    border-radius: 10px;
    position: relative;
    /* min-width: 8.23em; */
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    transition: color 1s ease;
    &:hover {
      color: #f8d521;
      transition: color 1s ease; /* Add a transition for the color change */
    }

    &:before,
    &:after {
      width: 4.4em;
      height: 2.95em;
      position: absolute;
      content: "";
      display: inline-block;
      background: #000;
      border-radius: 50%;
      transition: transform 1s ease;
      transform: scale(0);
      z-index: -1;
    }

    &:before {
      top: -25%;
      left: 20%;
    }

    &:after {
      bottom: -25%;
      right: 20%;
    }

    &:hover:before,
    &:hover:after {
      transform: none;
    }
  }
  .input_field {
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 16px;
    font-size: 15px;
  }
  .input_field:focus {
    outline: none;
    border: none;
  }
  .auth_button {
    background-color: #f8d521;
    color: white;
    font-weight: 700;
    font-size: 20px;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
  }
  .auth_button:hover {
    scale: 1.02;
  }
  .or-divider {
    display: flex;
    align-items: center;
    color: #777; /* Customize the color as needed */
    margin: 10px 0;
  }

  .or-divider .line {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc; /* Customize the color as needed */
  }

  .or-divider .or-text {
    margin: 0 10px;
    font-weight: bold;
    font-size: 14px; /* Customize the font size as needed */
  }
  /* components end */

  .navbar {
    max-width: 133rem;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.7rem 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 99999;
    margin: 0 auto;
  }
  .navbar__img {
    width: 14.5rem;
  }
  .navbar__img img {
    width: 100%;
    height: 100%;
  }
  .navbar__links {
    display: flex;
    list-style: none;
    gap: 2.7rem;
  }
  .navbar__links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #f8d521; /* Change the color as needed */
    transition: width 0.3s ease; /* Add animation effect */
  }
  .navbar__links a {
    font-size: 2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    color: #010103;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
  }
  .navbar__links a:hover {
    color: #f8d521;
  }
  .navbar__links a:hover::after {
    width: 100%;
  }
  @media (max-width: 1000px) {
    .navbar__links {
      display: none;
    }
  }
  .navbar__buttons {
    display: flex;
    gap: 2.7rem;
    font-size: 2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .navbar__buttons {
      display: none;
    }
  }
  .navbar__buttons__sign-in {
    color: #010103;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
  }
  .navbar__buttons__sign-in::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #f8d521; /* Change the color as needed */
    transition: width 0.3s ease; /* Add animation effect */
  }
  .navbar__buttons__sign-in:hover {
    color: #f8d521;
  }
  .navbar__buttons__sign-in:hover::after {
    width: 100%;
  }
  .navbar__buttons__register {
    background-color: #6d6b6b;
    color: white;
    padding: 1.5rem 3rem;
    border-radius: 3px;
    box-shadow: 0 10px 15px 0 rgba(61, 61, 61, 0.35) transition;
    all: 0.3s;
  }
  .navbar__buttons__register:hover {
    box-shadow: 0 10px 15px 0 rgba(94, 93, 93, 0.5);
    background-color: #f8d521;
  }
  .navbar__buttons a {
    text-decoration: none;
  }

  .mobile-hamb {
    font-size: 2.8rem;
    display: none;
    cursor: pointer;
    transition: all 0.3s;
  }
  .mobile-hamb:hover {
    color: rgb(99, 95, 95);
  }
  @media (max-width: 1000px) {
    .mobile-hamb {
      display: flex;
    }
  }

  .mobile-navbar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -100%;
    background-color: #ffffff;
    z-index: 999999;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }
  .mobile-navbar__close {
    font-size: 3rem;
    position: absolute;
    top: 3.5rem;
    right: 3.5rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  .mobile-navbar__close:hover {
    color: #3b3b3b;
  }
  .mobile-navbar__links {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 2.3rem;
    gap: 3rem;
    text-align: center;
  }
  .mobile-navbar__links li a {
    text-decoration: none;
    color: #010103;
    font-weight: 500;
    transition: all 0.3s;
  }
  .mobile-navbar__links li a:hover {
    color: #313131;
  }

  .open-nav {
    left: 0;
  }

  .hero-section {
    width: 100%;
    height: 97vh;
    background-color: #f8f8f8;
    position: relative;
  }

  .bg-shape {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  @media (max-width: 800px) {
    .bg-shape {
      display: none;
    }
  }

  .map_wrapper {
    flex: 2;
    margin: 0 10rem;
    @media (max-width: 1200px) {
      max-width: 90%;
    }

    @media (max-width: 768px) {
      margin: 0 2rem;
    }

    h3 {
      font-size: 3.5rem;
      /* font-weight: bold; */
      color: black;
      margin-top: 3rem;
      margin-bottom: 3rem;
      font-family: "Oswald", sans-serif;
    }
  }

  .hero-content {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
  }
  @media (max-width: 800px) {
    .hero-content {
      justify-content: center;
    }
  }
  .hero-content__text {
    display: flex;
    flex-direction: column;
    z-index: 3;
    max-width: 50rem;
    margin-top: 5rem;
  }
  @media (max-width: 800px) {
    .hero-content__text {
      text-align: center;
      align-items: center;
    }
  }
  .hero-content__text h2 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    color: #010103;
  }
  .hero-content__text h4 {
    font-size: 2.2rem;
    font-family: "Oswald", sans-serif;
    color: #010103;
  }
  .hero-content__text h1 {
    font-size: 5.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #010103;
    line-height: 1.2;
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    @media (max-width: 425px) {
      font-size: 4.2rem;
    }
    @media (max-width: 320px) {
      font-size: 3.2rem;
    }
  }
  .hero-content__text h1 div {
    border-bottom: 5px solid #f8d521;
    margin-right: 4px;
  }
  .hero-content__text h1 span {
    color: rgb(20, 14, 13);
  }
  .hero-content__text p {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    line-height: 1.6;
    color: #706f7b;
    margin-bottom: 4rem;
  }
  .hero-content__text__btns {
    display: flex;
    gap: 2rem;
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
  }
  /* @media (max-width: 450px) {
  .hero-content__text__btns {
    flex-direction: column;
  }
} */
  .hero-content__text__btns a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
  .hero-content__text__btns__book-ride {
    background-color: rgb(46, 64, 75);
    padding: 1.8rem 3rem;
    border-radius: 0.3rem;
    box-shadow: 0 10px 15px 0 rgba(24, 40, 85, 0.35);
    transition: all 0.3s;
    border: 2px solid #000000;
  }
  @media (max-width: 450px) {
    .hero-content__text__btns__book-ride {
      padding: 1.8rem 8rem;
    }
  }
  .hero-content__text__btns__book-ride:hover {
    box-shadow: 0 10px 15px 0 rgba(7, 3, 2, 0.6);
    background-color: #000000;
  }
  .hero-content__text__btns__learn-more {
    background-color: #010103;
    padding: 1.8rem 3rem;
    border-radius: 0.3rem;
    border: 2px solid #010103;
    transition: all 0.3s;
  }
  .hero-content__text__btns__learn-more:hover {
    background-color: transparent;
    color: #010103;
  }
  .hero-content__car-img {
    z-index: 2;
    position: absolute;
    right: 0;
    width: 60%;
    margin-top: 5rem;
  }
  @media (max-width: 800px) {
    .hero-content__car-img {
      display: none;
    }
  }

  .scroll-up {
    position: fixed;
    font-size: 2.5rem;
    color: white;
    width: 2rem;
    height: 2rem;
    bottom: 5rem;
    right: 5rem;
    z-index: 20;
    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2rem;
    cursor: pointer;
  }

  .show-scroll {
    display: flex;
  }

  .book-section {
    position: relative;
    background: linear-gradient(to bottom, #f8f8f8 20%, #ffffff 80%);
  }

  .book-content {
    margin: 0 auto;
    margin-bottom: 10rem;
  }
  .book-content__box {
    background-color: #444444;
    width: 100%;
    padding: 4rem 4.5rem 5rem 5.5rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    height: auto;
    position: relative;
    z-index: 4;
    color: white;
    border-radius: 5px;
    background-image: url("/images/book-car/book-bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    color: #010103;
  }
  @media (max-width: 400px) {
    .book-content__box {
      padding: 4rem 2.5rem 5rem 2.5rem;
    }
  }
  .book-content__box h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 2.7rem;
  }
  .book-content__box .box-form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }
  .book-content__box .box-form b {
    color: #ffffff;
  }
  @media (max-width: 1000px) {
    .book-content__box .box-form {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 630px) {
    .book-content__box .box-form {
      grid-template-columns: 1fr;
    }
  }
  .book-content__box .box-form__car-type {
    display: flex;
    flex-direction: column;
  }
  .book-content__box .box-form__car-type label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
  .book-content__box .box-form__car-type label i {
    color: #130503;
  }
  .book-content__box .box-form__car-type select {
    font-size: 1.5rem;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    border: 1px solid #ccd7e6;
    border-radius: 3px;
    font-weight: 400;
    padding: 1.2rem 1.3rem;
    outline: none;
  }
  .book-content__box .box-form__car-time {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .book-content__box .box-form__car-time input {
    outline: none;
    color: #ffffff;
    padding-right: 3rem;
    border: 1px solid #ccd7e6;
  }
  .book-content__box .box-form__car-time label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
  .book-content__box .box-form__car-time label i {
    color: #2c2c2c;
  }
  .book-content__box .box-form__car-time ::-webkit-datetime-edit {
    padding: 1.3rem 1.3rem;
  }
  .book-content__box .box-form__car-time ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    font-size: 1.6rem;
  }
  .book-content__box button {
    padding: 1.3rem 1.3rem;
    height: -moz-fit-content;
    height: fit-content;
    align-self: self-end;
    border: none;
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    background-color: #838383;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.3s;
  }
  .book-content__box button:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.55);
  }

  .error-message {
    color: #462528;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 1rem 1.4rem;
    margin-bottom: 1.8rem;
    margin-top: -1rem;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    display: none;
    justify-content: space-between;
    align-items: center;
  }
  .error-message i {
    cursor: pointer;
  }

  .booking-done {
    color: #2a6817;
    background-color: #c3fabe;
    border-color: #e4d2d4;
    padding: 1rem 1.4rem;
    margin-bottom: 1.8rem;
    margin-top: -1rem;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    display: none;
    justify-content: space-between;
    align-items: center;
  }
  .booking-done i {
    cursor: pointer;
  }

  .active-modal {
    opacity: 1 !important;
    display: flex !important;
  }

  .modal-overlay {
    opacity: 0;
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999999999;
    top: 0;
    right: 0;
  }

  .booking-modal {
    opacity: 0;
    display: none;
    flex-direction: column;
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 999999999999;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 83rem;
    height: 100vh;
    border: 2px solid white;
    background-color: rgb(255, 255, 255);
    padding-right: 2px;
    color: #010103;
  }
  @media (max-width: 800px) {
    .booking-modal {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .booking-modal {
      top: 50%;
    }
  }
  .booking-modal__title {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: #a7a7a7;
    color: white;
    align-items: center;
  }
  .booking-modal__title h2 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }
  .booking-modal__title i {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.919);
    cursor: pointer;
    transition: all 0.2;
  }
  .booking-modal__title i:hover {
    color: white;
  }
  .booking-modal__message {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 3rem;
    background-color: #ffeae6;
  }
  .booking-modal__message h4 {
    font-size: 1.9rem;
    font-weight: 700;
    color: #3a3a3a;
  }
  .booking-modal__message h4 i {
    font-size: 2.5rem;
  }
  .booking-modal__message p {
    font-size: 1.7rem;
    color: #777777;
    font-weight: 500;
    line-height: 1.6;
  }
  .booking-modal__car-info {
    background-color: white;
    padding: 3rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid rgba(119, 119, 119, 0.6235294118);
  }
  @media (max-width: 650px) {
    .booking-modal__car-info {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  .booking-modal__car-info__dates {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .booking-modal__car-info__dates h5 {
    font-size: 1.8rem;
    color: #d3d3d3;
  }
  .booking-modal__car-info__dates span {
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 650px) {
    .booking-modal__car-info__dates span {
      grid-template-columns: 1fr;
      text-align: center;
      justify-content: center;
    }
  }
  .booking-modal__car-info__dates span i {
    font-size: 1.8rem;
    padding-top: 0.2rem;
    color: #777777;
  }
  @media (max-width: 650px) {
    .booking-modal__car-info__dates span i {
      display: none;
    }
  }
  .booking-modal__car-info__dates span h6 {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  .booking-modal__car-info__dates span p {
    font-size: 1.6rem;
    color: #777777;
  }
  .booking-modal__car-info__model {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  @media (max-width: 650px) {
    .booking-modal__car-info__model {
      margin-top: 3.5rem;
    }
  }
  .booking-modal__car-info__model h5 {
    font-size: 1.8rem;
    color: #c5c5c5;
  }
  .booking-modal__car-info__model h5 span {
    color: #010103;
  }
  .booking-modal__car-info__model img {
    width: 100%;
    height: auto;
  }
  .booking-modal__person-info {
    padding: 3rem 3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .booking-modal__person-info h4 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #252423;
    margin-bottom: 2rem;
  }

  .input-time {
    text-align: center;
    width: 8rem;
    font-size: 14px;
    cursor: pointer;
  }

  .info-form {
    display: flex;
    flex-direction: column;
  }
  .info-form__checkbox {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    color: #565454;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .info-form__checkbox input {
    width: 1.6rem;
    height: 1.6rem;
  }
  .info-form__1col {
    grid-template-columns: 1fr !important;
  }
  .info-form__2col,
  .info-form__1col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem 0;
  }
  @media (max-width: 650px) {
    .info-form__2col,
    .info-form__1col {
      grid-template-columns: 1fr;
    }
  }
  .info-form__2col span,
  .info-form__1col span {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .info-form__2col span label,
  .info-form__1col span label {
    font-size: 1.6rem;
    font-weight: 500;
    color: #777777;
  }
  .info-form__2col span label b,
  .info-form__1col span label b {
    color: #130c0b;
  }
  .info-form__2col span input,
  .info-form__1col span input {
    padding: 14px 15px;
    background-color: #dbdbdb;
    color: #555;
    font-size: 1.5rem;
    font-weight: 500;
    outline: none;
    border: none;
  }

  .reserve-button {
    background-color: #dbdbdb;
    margin: 0 -3rem;
    padding: 3rem;
    text-align: right;
  }
  @media (max-width: 650px) {
    .reserve-button {
      text-align: center;
    }
  }
  .reserve-button button {
    font-size: 2.4rem;
    color: white;
    font-weight: 700;
    background-color: #166856;
    border: 1px solid yellow;
    padding: 1.2rem 2rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .reserve-button button:hover {
    background-color: #11c429;
  }

  .dates-div {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .plan-section {
    background-color: #ffffff;
    padding: 5.3rem 0;
  }

  .plan-container {
    display: flex;
    flex-direction: column;
  }
  .plan-container__title {
    margin: 0 auto;
    margin-bottom: 4rem;
    text-align: center;
    color: #010103;
  }
  .plan-container__title h3 {
    font-size: 2.4rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    color: rgb(77, 77, 77);
  }
  .plan-container__title h2 {
    font-size: 4.2rem;
    font-family: "Oswald", sans-serif;
    margin: 1.3rem 0 3rem 0;
    position: relative;
  }
  .plan-container__title h2::after {
    content: "";
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #f8d521;
    /* Use a conic gradient mask to hide and show the bits you want */
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(
      from var(--start),
      white 0 var(--spread),
      transparent var(--spread)
    );
  }
  .plan-container__boxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-top: 3.7rem;
    padding: 0 3rem;
  }
  @media (max-width: 1021px) {
    .plan-container__boxes {
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
  }
  @media (max-width: 800px) {
    .plan-container__boxes {
      grid-template-columns: 1fr;
      margin-top: 1rem;
    }
  }
  .plan-container__boxes__box {
    text-align: center;
    padding: 1rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    .plan-container__boxes__box {
      padding: 1rem 1rem;
    }
  }
  .plan-container__boxes__box img {
    width: 24rem;
    height: auto;
  }
  .plan-container__boxes__box h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-family: "Oswald", sans-serif;
  }
  .plan-container__boxes__box p {
    font-size: 1.7rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.43;
  }

  .team-header {
    margin: 4rem auto;
    text-align: center;
    color: #010103;
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    /* border-bottom: #f8d521 5px solid; */
    position: relative;
    width: auto;
  }
  .team-header::after {
    content: "";
    position: absolute;
    top: 95%;
    width: 30%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #f8d521;
    /* Use a conic gradient mask to hide and show the bits you want */
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(
      from var(--start),
      white 0 var(--spread),
      transparent var(--spread)
    );
  }

  .pick-section {
    padding: 10rem 0;
  }

  .pick-container {
    display: flex;
    flex-direction: column;
  }
  .pick-container__title {
    margin: 0 auto;
    text-align: center;
    color: #010103;
    max-width: 50rem;
    margin-bottom: 5rem;
  }
  .pick-container__title p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.5;
  }
  .pick-container__title h3 {
    font-size: 2.4rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
  }
  .pick-container__title h2 {
    font-size: 4.2rem;
    font-family: "Oswald", sans-serif;
    margin: 0.5rem 0 1rem 0;
  }
  .pick-container__car-content {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  @media (max-width: 1050px) {
    .pick-container__car-content {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .pick-box {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .pick-box button {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 1.5rem 2.5rem;
    background-color: #e9e9e9;
    transition: all 0.2s;
    text-align: left;
  }
  .pick-box button:hover {
    background-color: #a5a4a4;
    color: white;
  }

  .pick-car {
    width: 50rem;
    position: relative;
  }
  @media (max-width: 700px) {
    .pick-car {
      width: 100%;
    }
  }
  .pick-car img {
    width: 100%;
    margin-top: 6rem;
  }

  .pick-description {
    width: 25rem;
  }
  .pick-description__price {
    width: 100%;
    background-color: #999291;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: white;
    padding: 0.3rem 1.9rem;
    white-space: nowrap;
  }
  .pick-description__price span {
    font-size: 2rem;
    font-weight: 700;
  }
  .pick-description__table {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    font-size: 1.4rem;
  }
  .pick-description__table__col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    grid-template-rows: auto;
    padding: 0.9rem 0.5rem;
    border-bottom: 2px solid #706f7b;
    border-right: 2px solid #706f7b;
    border-left: 2px solid #706f7b;
  }
  .pick-description__table__col span:nth-child(1) {
    border-right: 2px solid #706f7b;
  }

  .cta-btn {
    font-size: 2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    color: white;
    font-family: "Poppins", sans-serif;
    background-color: #868686;
    padding: 1rem 1rem;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1.4rem;
    transition: all 0.3s;
    box-shadow: 6px 6px 0 #efe9e9;
  }
  .cta-btn:hover {
    background-color: #222222;
  }

  .box-cars {
    gap: 11rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1200px) {
    .box-cars {
      gap: 2rem;
    }
  }
  @media (max-width: 700px) {
    .box-cars {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5rem;
    }
  }

  .colored-button {
    background-color: #f8d521 !important;
    color: white;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid rgba(0, 0, 0, 0.2588235294);
    border-bottom-color: #4e4e4e;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    right: 43%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .banner-section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 8rem;
    /* background-color: black; */
    /* padding: 6rem 0; */
    text-align: center;
    /* background: url("/images/banners/banner.jpg") no-repeat center; */
    /* background-color: #3a393941; */
  }
  .banner_image_background {
    background: url("/images/banners/banner.jpg") no-repeat center;
    width: 100%;
    height: 100%;
  }

  .banner-content {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .banner-content__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .banner-content__text h2 {
    font-size: 5.8rem;
    /* line-height: 1.3; */
    font-family: "Oswald", sans-serif;
  }
  @media (max-width: 550px) {
    .banner-content__text h2 {
      font-size: 4.8rem;
    }
  }
  .banner-content__text p {
    font-size: 2.8rem;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 550px) {
    .banner-content__text p {
      font-size: 2.4rem;
    }
  }
  .banner-content__text span {
    color: #5c5c5c;
    font-weight: 500;
  }

  .choose-section {
    background-color: white;
    padding: 2rem 0 10rem 0;
    background-image: url("/images/chooseUs/bg.png");
    background-position: -225px 255px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .choose-container {
    display: flex;
    flex-direction: column;
  }
  .choose-container__img {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  @media (max-width: 550px) {
    .choose-container__img {
      width: 100%;
    }
  }

  .text-container {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    width: 100%;
  }
  @media (max-width: 1000px) {
    .text-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 5.5rem;
    }
  }
  .text-container__left {
    text-align: left;
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    color: #010103;
  }
  @media (max-width: 1000px) {
    .text-container__left {
      align-items: center;
      text-align: center;
    }
  }
  .text-container__left h4 {
    font-size: 2.2rem;
    margin-bottom: 0.7rem;
    font-weight: 600;
    font-family: "Oswald", sans-serif;
  }
  .text-container__left h2 {
    font-size: 4.2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    font-family: "Oswald", sans-serif;
  }
  .text-container__left p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    color: #706f7b;
    margin-bottom: 3.3rem;
  }
  .text-container__left a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    background-color: #616161;
    padding: 1.5rem 2.5rem;
    border-radius: 0.3rem;
    box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
    transition: all 0.3s;
    border: 2px solid #312f2f;
    font-size: 1.6rem;
    width: -moz-fit-content;
    width: fit-content;
  }
  .text-container__left a:hover {
    box-shadow: 0 10px 15px 0 rgba(44, 43, 43, 0.6);
    background-color: #3b3a3a;
  }
  .text-container__right {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    max-width: 44rem;
  }
  .text-container__right__box {
    display: flex;
  }
  @media (max-width: 550px) {
    .text-container__right__box {
      flex-direction: column;
      align-items: center;
    }
  }
  .text-container__right__box img {
    width: 11rem;
    height: 11rem;
    margin-right: 1.1rem;
  }
  .text-container__right__box__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
  .text-container__right__box__text h4 {
    font-size: 2.4rem;
    font-family: "Oswald", sans-serif;
  }
  .text-container__right__box__text p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Poppins", sans-serif;
    line-height: 1.3;
  }

  .testimonials-section {
    background-color: #f8f8f8;
    padding: 10rem 0;
    color: #010103;
  }

  .testimonials-content {
    display: flex;
    flex-direction: column;
  }
  .testimonials-content__title {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    max-width: 70rem;
    margin-bottom: 5rem;
  }
  .testimonials-content__title h4 {
    font-size: 2.2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
  }
  .testimonials-content__title h2 {
    font-size: 4.2rem;
    margin-bottom: 1.4rem;
    font-family: "Oswald", sans-serif;
  }
  .testimonials-content__title p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.4;
  }

  .all-testimonials {
    display: flex;
    gap: 3rem;
    width: 100%;
    justify-content: center;
    padding: 3rem;
  }
  @media (max-width: 1000px) {
    .all-testimonials {
      padding: 0;
    }
  }
  .all-testimonials__box {
    background-color: white;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.08);
    width: 54rem;
    padding: 5.5rem;
    position: relative;
    border-radius: 10px;
  }
  @media (max-width: 1000px) {
    .all-testimonials__box {
      padding: 5rem 3rem;
    }
  }
  .all-testimonials__box p {
    font-size: 2.2rem;
    font-weight: 500;
  }
  .all-testimonials__box__name {
    display: flex;
  }
  .all-testimonials__box__name__profile {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 3rem;
  }
  .all-testimonials__box__name__profile img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }
  .all-testimonials__box__name__profile h4 {
    font-size: 1.8rem;
  }
  .all-testimonials__box__name__profile p {
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
  }

  .quotes-icon {
    font-size: 6.2rem;
    color: #000000;
    position: absolute;
    bottom: 33px;
    right: 60px;
  }
  @media (max-width: 470px) {
    .quotes-icon {
      display: none;
    }
  }

  @media (max-width: 900px) {
    .box-2 {
      display: none;
    }
  }

  .faq-section {
    background-image: url("/images/faq/car.png");
    padding: 10rem 0;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }
  .instructions-section {
    /* background-image: url("/images/faq/car.png"); */
    padding: 10rem 0;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }

  .faq-content {
    display: flex;
    flex-direction: column;
    color: #010103;
  }
  .faq-content__title {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    max-width: 80rem;
    line-height: 1.5;
  }
  .faq-content__title h5 {
    font-size: 2.2rem;
  }
  .faq-content__title h2 {
    font-size: 4.2rem;
    margin-bottom: 1.7rem;
    font-family: "Oswald", sans-serif;
  }
  .faq-content__title p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Poppins", sans-serif;
  }

  .all-questions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
  }

  .faq-box {
    display: flex;
    flex-direction: column;
    color: #010103;
    background-color: white;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
    width: 80rem;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    .faq-box {
      width: 100%;
    }
  }
  .faq-box__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    padding: 1.8rem 4.5rem;
    transition: 0.15s ease;
  }
  .faq-box__question p {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
  }
  .faq-box__question i {
    font-size: 2rem;
  }
  .faq-box__answer {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.7;
    max-height: 0;
    overflow: hidden;
    transition: 0.4s ease;
    padding: 0 4.5rem;
  }

  .active-answer {
    max-height: 20rem;
    padding: 2.8rem 4.5rem;
    transition: 0.4s ease;
  }
  @media (max-width: 550px) {
    .active-answer {
      max-height: 30rem;
    }
  }
  @media (max-width: 420px) {
    .active-answer {
      max-height: 55rem;
    }
  }

  .active-question {
    background-color: #2e2b2b;
    color: white;
    box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  }

  .download-section {
    background-image: url("/images/banners/bg02.png");
    background-color: #f8f8f8;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    padding: 10rem 0;
  }
  @media (max-width: 700px) {
    .download-section {
      background-image: none;
    }
  }

  .download-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 55rem;
    text-align: left;
  }
  @media (max-width: 700px) {
    .download-text {
      text-align: center;
      margin: 0 auto;
    }
  }
  .download-text h2 {
    font-size: 4.2rem;
    color: #010103;
  }
  .download-text p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Oswald", sans-serif;
    line-height: 1.5;
  }
  .download-text__btns {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
  }
  @media (max-width: 700px) {
    .download-text__btns {
      justify-content: center;
    }
  }
  @media (max-width: 550px) {
    .download-text__btns {
      flex-direction: column;
      align-items: center;
    }
  }
  .download-text__btns img {
    width: 40%;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    .download-text__btns img {
      width: 22rem;
    }
  }

  footer {
    background-color: #ffffff;
    padding: 10rem 0;
  }
  .footer_container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
    /* background: #17191a; */
  }
  .footer_title {
    font-family: "Oswald", sans-serif;
  }

  .footer-content {
    display: grid;
    color: #010103;
    grid-template-columns: 27fr 21fr 21fr 21fr;
    gap: 8rem;
    justify-content: center;
    text-align: left;
    color: #010103;
  }
  @media (max-width: 1100px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 650px) {
    .footer-content {
      grid-template-columns: 1fr;
    }
  }
  .footer-content__1 {
    list-style: none;
  }
  @media (max-width: 650px) {
    .footer-content__1 {
      text-align: center;
    }
  }
  .footer-content__1 li a {
    text-decoration: none;
    color: #010103;
    transition: all 0.2s;
  }
  .footer-content__1 li a:hover {
    color: #f8d521;
  }
  .footer-content__1 li:nth-child(1) {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
  .footer-content__1 li:nth-child(1) span {
    font-weight: 700;
  }
  .footer-content__1 li:nth-child(2) {
    font-size: 1.6rem;
    color: #706f7b;
    line-height: 1.7;
    margin-bottom: 3rem;
  }
  .footer-content__1 li:nth-child(3),
  .footer-content__1 li:nth-child(4) {
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .footer-content__2 {
    list-style: none;
  }
  @media (max-width: 650px) {
    .footer-content__2 {
      text-align: center;
    }
  }
  .footer-content__2 a {
    text-decoration: none;
    color: #010103;
    transition: all 0.2s;
  }
  .footer-content__2 a:hover {
    color: #f8d521;
  }
  .footer-content__2 li {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  .footer-content__2 li:nth-child(1) {
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    cursor: auto;
  }
  .footer-content__2 input {
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    background-color: #ececec;
    border-width: 1px;
    border-color: transparent;
    padding: 10px 60px;
    outline: none;
    margin-top: 1rem;
  }
  @media (max-width: 1100px) {
    .footer-content__2 input {
      width: 100%;
    }
  }

  .submit-email {
    text-decoration: none;
    color: white;
    font-weight: 700;
    background-color: #f8d521;
    padding: 1.5rem 2.5rem;
    border-radius: 0.3rem;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.25); */
    transition: all 0.3s;
    /* border: 2px solid #bcc8cc; */
    font-size: 1.6rem;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer;
    width: 100%;
  }
  .submit-email:hover {
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.4); */
    background-color: #fff;
    color: #000;
  }

  .hero-pages {
    width: 100%;
    height: 41rem;
    background-image: url("/images/hero/car-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .hero-pages__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(190, 190, 190, 0.8);
  }
  .hero-pages__text {
    display: flex;
    flex-direction: column;
    z-index: 3;
    position: relative;
    width: 100%;
    height: 41rem;
    text-align: center;
    justify-content: center;
    color: #010103;
  }
  .hero-pages__text h3 {
    font-size: 3.6rem;
    margin-bottom: 1.5rem;
    font-family: "Oswald", sans-serif;
    border-bottom: #f8d521 3px solid;
    margin-right: auto;
    margin-left: auto;
  }
  .hero-pages__text p {
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }
  .hero-pages__text p a {
    color: #010103;
    text-decoration: none;
    transition: all 0.2s;
  }
  .hero-pages__text p a:hover {
    color: #f8d521;
  }

  .about-main {
    margin: 10rem auto;
    display: flex;
    gap: 5rem;
    max-width: 90rem;
    align-items: center;
  }
  @media (max-width: 960px) {
    .about-main {
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
      max-width: 49rem;
    }
  }
  @media (max-width: 520px) {
    .about-main {
      max-width: 100%;
    }
  }
  .about-main__img {
    width: 43rem;
    height: 43rem;
  }
  @media (max-width: 960px) {
    .about-main__img {
      margin: 0 auto;
    }
  }
  @media (max-width: 520px) {
    .about-main__img {
      width: 100%;
      height: auto;
    }
  }
  .about-main__text {
    color: #010103;
    display: flex;
    flex-direction: column;
  }
  .about-main__text h3 {
    font-size: 2.2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .about-main__text h2 {
    font-family: "Oswald", sans-serif;
    font-size: 4.2rem;
    line-height: 1.2;
  }
  .about-main__text p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  .about-main__text__icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
  }
  @media (max-width: 520px) {
    .about-main__text__icons {
      grid-template-columns: 1fr;
      margin: 0 auto;
      gap: 0;
    }
    .about-main__text__icons p {
      margin-top: 0;
    }
  }
  .about-main__text__icons__box {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 520px) {
    .about-main__text__icons__box {
      align-items: center;
    }
  }
  .about-main__text__icons__box .last-fk {
    width: 5rem;
  }
  .about-main__text__icons__box img {
    width: 7rem;
  }
  .about-main__text__icons__box span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 520px) {
    .about-main__text__icons__box span {
      text-align: center;
      flex-direction: column;
    }
  }
  .about-main__text__icons__box span h4 {
    font-size: 4.6rem;
  }

  .book-banner {
    display: flex;
    width: 100%;
    height: 20rem;
    background-image: url("/images/banners/book-banner.png");
    position: relative;
    margin-top: 7rem;
  }
  @media (max-width: 750px) {
    .book-banner {
      height: -moz-fit-content;
      height: fit-content;
      padding: 1rem 0;
    }
  }
  .book-banner__overlay {
    background-color: #2d2d2d;
    opacity: 0.89;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .text-content {
    color: white;
    z-index: 5;
    position: relative;
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  @media (max-width: 750px) {
    .text-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }
  }
  .text-content h2 {
    font-size: 3.2rem;
  }
  .text-content span {
    display: flex;
    font-size: 2.7rem;
    gap: 1rem;
    align-items: center;
    color: #ff4d30;
    white-space: nowrap;
  }

  .models-div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 3rem;
    align-items: center;
    text-align: center;
    padding: 10rem 0;
    width: 110rem;
    margin: 0 auto;
  }
  @media (max-width: 1150px) {
    .models-div {
      grid-template-columns: 1fr 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  @media (max-width: 800px) {
    .models-div {
      grid-template-columns: 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  .models-div__box {
    border: 1px solid #d5d5d5;
    border-radius: 0.3rem;
    display: flex;
    width: 35rem;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    .models-div__box {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
  .models-div__box__img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
  }
  .models-div__box__img img {
    width: 100%;
    height: 27rem;
  }
  .models-div__box__descr {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    color: #010103;
  }
  .models-div__box__descr__name-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .models-div__box__descr__name-price__name {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;
  }
  .models-div__box__descr__name-price__name p {
    font-size: 2rem;
    font-weight: 700;
  }
  .models-div__box__descr__name-price__name span {
    display: flex;
    gap: 0.4rem;
  }
  .models-div__box__descr__name-price__name span i {
    font-size: 1.4rem;
    color: #ffc933;
  }
  .models-div__box__descr__name-price__price {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .models-div__box__descr__name-price__price h4 {
    font-size: 2rem;
  }
  .models-div__box__descr__name-price__price p {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .models-div__box__descr__name-price__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    -moz-column-gap: 7rem;
    column-gap: 7rem;
    margin-top: 2.5rem;
    margin: 2rem auto;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid #c6c6c6;
  }
  .models-div__box__descr__name-price__details span {
    font-size: 1.8rem;
    font-weight: 500;
    color: #777777;
    text-align: left;
  }
  .models-div__box__descr__name-price__details span i {
    color: #010103;
  }
  .models-div__box__descr__name-price__btn {
    background-color: #f8d521;
    padding: 1.8rem 3rem;
    border-radius: 0.3rem;
    transition: all 0.3s;
    font-size: 1.8rem;
    cursor: pointer;
  }
  .models-div__box__descr__name-price__btn:hover {
    scale: 1.07;
  }
  .models-div__box__descr__name-price__btn a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  .team-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 4rem;
    align-items: center;
    text-align: center;
    padding: 10rem 2rem;
    width: 110rem;
    margin: 0 auto;
  }
  @media (max-width: 1150px) {
    .team-container {
      grid-template-columns: 1fr 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  @media (max-width: 800px) {
    .team-container {
      grid-template-columns: 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  .team-container__box {
    width: 33rem;
    background-color: white;
    box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 400px) {
    .team-container__box {
      width: 100%;
    }
  }
  .team-container__box__img-div {
    width: 100%;
    height: auto;
    background-color: #f6f6f6;
  }
  .team-container__box__img-div img {
    width: 100%;
  }
  .team-container__box__descr {
    color: #010103;
    padding: 3rem;
  }
  .team-container__box__descr h3 {
    font-size: 2.2rem;
  }
  .team-container__box__descr p {
    font-size: 1.6rem;
    font-weight: 500;
    color: #777777;
  }
  .contact_container {
    /* background: #000; */
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
  }

  .contact-div {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 3rem; */
    margin: 0 auto;
    color: #010103;
    padding: 10rem 2rem;
    background-image: url("/images/banners/bg-contact.png");
    background-size: auto;
    background-position: center center;
    background-repeat: no-repeat;
  }
  @media (max-width: 950px) {
    .contact-div {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  .contact-div__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* max-width: 41rem; */
  }
  @media (max-width: 950px) {
    .contact-div__text {
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }
  .contact-div__text h2 {
    font-size: 4.2rem;
    line-height: 1.3;
    margin-bottom: 2rem;
    font-family: "Oswald", sans-serif;
  }
  .contact-div__text p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  .contact-div__text a {
    text-decoration: none;
    color: #010103;
    font-size: 1.8rem;
    font-weight: 500;
    transition: all 0.2s;
    margin-bottom: 0.5rem;
  }
  .contact-div__text a:hover {
    color: #f8d521;
  }
  .contact-div__form {
    display: flex;
    flex-direction: column;
  }
  .contact-div__form form {
    display: flex;
    flex-direction: column;
  }
  .contact-div__form form label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .contact-div__form form label b {
    color: #f8d521;
  }
  .contact-div__form form input {
    background-color: #f2f2f2;
    padding: 19px 30px 19px 30px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.3rem;
  }
  .link_container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2.3rem;
  }
  .contact-div__form form textarea {
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 18rem;
    padding: 19px 30px 19px 30px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.5rem;
  }
  .contact-div__form form button {
    background-color: #f8d521;
    padding: 1.8rem 3rem;
    border-radius: 10px;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35); */
    transition: all 0.3s;
    font-family: "Poppins", sans-serif;
    /* border: 2px solid #ff4d30; */
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .contact-div__form form button:hover {
    box-shadow: 0 10px 15px 0 rgba(151, 147, 146, 0.6);
    background-color: #000;
  } /*# sourceMappingURL=styles.css.map */
  .signup_wrapper {
    height: auto;
    /* width: 100vw; */
    background-image: url("/images/signup/authentication_wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .enlist-div__form {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-left: 20rem;
    margin-right: 20rem;
  }
  .enlist-div__form form {
    display: flex;
    flex-direction: column;
  }
  .enlist-div__form form label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .enlist-div__form form label b {
    color: #f8d521;
  }
  .enlist-div__form form input {
    background-color: #f2f2f2;
    padding: 19px 30px 19px 30px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.3rem;
  }
  .enlist-div__form form select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #f2f2f2;
    padding: 19px 30px 19px 30px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.3rem;
  }

  .enlist-div__form form textarea {
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 18rem;
    padding: 19px 30px 19px 30px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.5rem;
  }
  .enlist-div__form form button {
    background-color: #f8d521;
    padding: 1.8rem 3rem;
    border-radius: 10px;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35); */
    transition: all 0.3s;
    font-family: "Poppins", sans-serif;
    /* border: 2px solid #ff4d30; */
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .enlist-div__form form button:hover {
    box-shadow: 0 10px 15px 0 rgba(151, 147, 146, 0.6);
    background-color: #000;
  } /*# sourceMappingURL=styles.css.map */
  .signup_wrapper {
    height: 120vh;
    /* width: 100vw; */
    background-image: url("/images/signup/authentication_wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50rem 0;
    @media (max-width: 768px) {
      padding: 80rem 0;
    }
  }
  .signup_container {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    width: 40.486%;
    min-width: 320px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 47px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .signup_container img {
    width: 185px;
    height: 80px;
  }
  .signup_container h1 {
    font-family: "Oswald", sans-serif;
    font-size: 38px;
  }
  .input_container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    width: 100%;
    span {
      margin-bottom: 10px;
      font-size: 17px;
    }
  }
  .button_container {
    margin-top: 70px;
    width: 100%;
  }
  .auth_link {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    color: #000;
    text-decoration: none;
    display: flex;
    p {
      margin-right: 2px;
    }
    a {
      border-bottom: 1px solid #f8d521;
    }
    a:hover {
      scale: 1.03;
    }
  }
  .alt_signin_container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      div {
        margin-bottom: 1rem;
        margin-left: 5rem;
        margin-right: 5rem;
      }
    }
    div {
      background-color: white;
      border-radius: 10px;
      border: 0.5px solid #d1cece;
      /* height: auto; */
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
    img {
      width: 50px;
      height: 50px;
    }
    button:hover {
      scale: 1.05;
    }
  }
  .centered {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    filter: blur(10px) contrast(20);
  }
  .blob-1,
  .blob-2 {
    width: 70px;
    height: 70px;
    position: absolute;
    background: #000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .blob-1 {
    left: 20%;
    animation: osc-l 2.5s ease infinite;
  }
  .blob-2 {
    left: 80%;
    animation: osc-r 2.5s ease infinite;
    background: #f8d521;
  }
  @keyframes osc-l {
    0% {
      left: 20%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 20%;
    }
  }
  @keyframes osc-r {
    0% {
      left: 80%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 80%;
    }
  }
  .privacy-policy-container {
    /* background-color: #000; */
    padding: 10rem 0;
  }
  .social-bar {
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translateY(-50%);
    margin-left: 0.4rem;
    z-index: 1000;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .share-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bar-links {
    cursor: pointer;
    padding: 0, 0.5rem;
  }
  .bar-links:hover {
    scale: 1.2;
  }
`;
export const ThemeDark = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&family=Poppins&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
    font-family: "Poppins", sans-serif;
    position: relative;
  }
  .not-found-wrapper {
    background-color: #000;
    /* margin: 10rem 0; */
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: "white";
  }
  .shared-container {
    max-width: 130em;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
  }
  .banner_container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
    height: 50vh;
  }
  .not-found-title {
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    position: relative;
    width: auto;
    padding: 0 1rem;
    margin: auto, auto;
    margin-bottom: 3rem;
    color: "white";
    ::after {
      content: "";
      position: absolute;
      top: 95%;
      width: 20%;
      aspect-ratio: 3 / 1;
      left: 50%;
      transform: translate(-50%, 0);
      border-radius: 50%;
      border: 6px solid #f8d521;
      /* Use a conic gradient mask to hide and show the bits you want */
      --spread: 140deg;
      --start: 290deg;
      mask: conic-gradient(
        from var(--start),
        white 0 var(--spread),
        transparent var(--spread)
      );
    }
  }
  .not-found-description {
    font-size: 3rem;
    opacity: 0.8;
    color: "white";
    font-family: "Poppins", sans-serif;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #000000 #ffffff;
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-track:active {
    background-color: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: rgb(83, 76, 75);
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #413b3b;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #5f5c5c;
  }
  /* components */
  .input_field {
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 16px;
    font-size: 15px;
  }
  .input_field:focus {
    outline: none;
    border: none;
  }
  .auth_button {
    background-color: #f8d521;
    color: white;
    font-weight: 700;
    font-size: 20px;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
  }
  .auth_button:hover {
    scale: 1.02;
  }
  .or-divider {
    display: flex;
    align-items: center;
    color: #777; /* Customize the color as needed */
    margin: 10px 0;
  }

  .or-divider .line {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc; /* Customize the color as needed */
  }

  .or-divider .or-text {
    margin: 0 10px;
    font-weight: bold;
    font-size: 14px; /* Customize the font size as needed */
  }
  /* components end */

  .navbar {
    max-width: 133rem;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.7rem 2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 99999;
    margin: 0 auto;
  }
  .navbar__img {
    width: 14.5rem;
  }
  .navbar__img img {
    width: 100%;
    height: 100%;
  }
  .navbar__links {
    display: flex;
    list-style: none;
    gap: 2.7rem;
  }
  .navbar__links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #f8d521; /* Change the color as needed */
    transition: width 0.3s ease; /* Add animation effect */
  }
  .navbar__links a {
    font-size: 2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
  }
  .navbar__links a:hover {
    color: #f8d521;
  }
  .navbar__links a:hover::after {
    width: 100%;
  }
  @media (max-width: 1000px) {
    .navbar__links {
      display: none;
    }
  }
  .navbar__buttons {
    display: flex;
    gap: 2.7rem;
    font-size: 2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    align-items: center;
  }
  @media (max-width: 1000px) {
    .navbar__buttons {
      display: none;
    }
  }
  .navbar__buttons__sign-in {
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
  }
  .navbar__buttons__sign-in::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background-color: #f8d521; /* Change the color as needed */
    transition: width 0.3s ease; /* Add animation effect */
  }
  .navbar__buttons__sign-in:hover {
    color: #f8d521;
  }
  .navbar__buttons__sign-in:hover::after {
    width: 100%;
  }
  .navbar__buttons__register {
    background-color: #6d6b6b;
    color: white;
    padding: 1.5rem 3rem;
    border-radius: 3px;
    box-shadow: 0 10px 15px 0 rgba(61, 61, 61, 0.35) transition;
    all: 0.3s;
  }
  .navbar__buttons__register:hover {
    box-shadow: 0 10px 15px 0 rgba(94, 93, 93, 0.5);
    background-color: #f8d521;
  }
  .navbar__buttons a {
    text-decoration: none;
  }

  .mobile-hamb {
    font-size: 2.8rem;
    display: none;
    cursor: pointer;
    transition: all 0.3s;
  }
  .mobile-hamb:hover {
    color: rgb(99, 95, 95);
  }
  @media (max-width: 1000px) {
    .mobile-hamb {
      display: flex;
    }
  }

  .mobile-navbar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -100%;
    background-color: #000;
    z-index: 999999;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }
  .mobile-navbar__close {
    font-size: 3rem;
    position: absolute;
    top: 3.5rem;
    right: 3.5rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  .mobile-navbar__close:hover {
    color: #3b3b3b;
  }
  .mobile-navbar__links {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 2.3rem;
    gap: 3rem;
    text-align: center;
  }
  .mobile-navbar__links li a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    transition: all 0.3s;
  }
  .mobile-navbar__links li a:hover {
    color: #313131;
  }

  .open-nav {
    left: 0;
  }

  .hero-section {
    width: 100%;
    height: 97vh;
    background-color: #17191a;
    position: relative;
  }

  .bg-shape {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  @media (max-width: 800px) {
    .bg-shape {
      display: none;
    }
  }
  @media (max-width: 1200px) {
    .map_wrapper {
      max-width: 90%;
    }
  }

  @media (max-width: 768px) {
    .map_wrapper {
      margin: 0 2rem;
    }
  }
  .map_wrapper {
    flex: 2;
    margin: 0 10rem;
    @media (max-width: 1200px) {
      max-width: 90%;
    }

    @media (max-width: 768px) {
      margin: 0 2rem;
    }

    h3 {
      font-size: 3.5rem;
      /* font-weight: bold; */
      color: white;
      margin-top: 3rem;
      margin-bottom: 3rem;
      font-family: "Oswald", sans-serif;
    }
  }

  .hero-content {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
  }
  @media (max-width: 800px) {
    .hero-content {
      justify-content: center;
    }
  }
  .hero-content__text {
    display: flex;
    flex-direction: column;
    z-index: 3;
    max-width: 50rem;
    margin-top: 5rem;
  }
  @media (max-width: 800px) {
    .hero-content__text {
      text-align: center;
      align-items: center;
    }
  }
  .hero-content__text h2 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  .hero-content__text h4 {
    font-size: 2.2rem;
    font-family: "Oswald", sans-serif;
    color: #010103;
  }
  .hero-content__text h1 {
    font-size: 5.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    @media (max-width: 425px) {
  font-size: 4.2rem;
  }
  .hero-content__text h1 div {
    border-bottom: 5px solid #f8d521;
    margin-right: 4px;
  }
  .hero-content__text h1 span {
    color: rgb(20, 14, 13);
  }
  .hero-content__text p {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
    line-height: 1.6;
    color: #706f7b;
    margin-bottom: 4rem;
  }
  .hero-content__text__btns {
    display: flex;
    gap: 2rem;
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
  }
  /* @media (max-width: 450px) {
  .hero-content__text__btns {
    flex-direction: column;
  }
} */
  .hero-content__text__btns a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
  .hero-content__text__btns__book-ride {
    background-color: rgb(46, 64, 75);
    padding: 1.8rem 3rem;
    border-radius: 0.3rem;
    box-shadow: 0 10px 15px 0 rgba(24, 40, 85, 0.35);
    transition: all 0.3s;
    border: 2px solid #000000;
  }
  @media (max-width: 450px) {
    .hero-content__text__btns__book-ride {
      padding: 1.8rem 8rem;
    }
  }
  .hero-content__text__btns__book-ride:hover {
    box-shadow: 0 10px 15px 0 rgba(7, 3, 2, 0.6);
    background-color: #000000;
  }
  .hero-content__text__btns__learn-more {
    background-color: #010103;
    padding: 1.8rem 3rem;
    border-radius: 0.3rem;
    border: 2px solid #010103;
    transition: all 0.3s;
  }
  .hero-content__text__btns__learn-more:hover {
    background-color: transparent;
    color: #010103;
  }
  .hero-content__car-img {
    z-index: 2;
    position: absolute;
    right: 0;
    width: 60%;
    margin-top: 5rem;
  }
  @media (max-width: 800px) {
    .hero-content__car-img {
      display: none;
    }
  }

  .scroll-up {
    position: fixed;
    font-size: 2.5rem;
    color: white;
    width: 2rem;
    height: 2rem;
    bottom: 5rem;
    right: 5rem;
    z-index: 20;
    display: none;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2rem;
    cursor: pointer;
  }

  .show-scroll {
    display: flex;
  }

  .book-section {
    position: relative;
    background: linear-gradient(to bottom, #f8f8f8 20%, #ffffff 80%);
  }

  .book-content {
    margin: 0 auto;
    margin-bottom: 10rem;
  }
  .book-content__box {
    background-color: #444444;
    width: 100%;
    padding: 4rem 4.5rem 5rem 5.5rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    height: auto;
    position: relative;
    z-index: 4;
    color: white;
    border-radius: 5px;
    background-image: url("/images/book-car/book-bg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    color: #010103;
  }
  @media (max-width: 400px) {
    .book-content__box {
      padding: 4rem 2.5rem 5rem 2.5rem;
    }
  }
  .book-content__box h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 2.7rem;
  }
  .book-content__box .box-form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 2rem;
  }
  .book-content__box .box-form b {
    color: #ffffff;
  }
  @media (max-width: 1000px) {
    .book-content__box .box-form {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 630px) {
    .book-content__box .box-form {
      grid-template-columns: 1fr;
    }
  }
  .book-content__box .box-form__car-type {
    display: flex;
    flex-direction: column;
  }
  .book-content__box .box-form__car-type label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
  .book-content__box .box-form__car-type label i {
    color: #130503;
  }
  .book-content__box .box-form__car-type select {
    font-size: 1.5rem;
    color: #ffffff;
    font-family: "Oswald", sans-serif;
    border: 1px solid #ccd7e6;
    border-radius: 3px;
    font-weight: 400;
    padding: 1.2rem 1.3rem;
    outline: none;
  }
  .book-content__box .box-form__car-time {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .book-content__box .box-form__car-time input {
    outline: none;
    color: #ffffff;
    padding-right: 3rem;
    border: 1px solid #ccd7e6;
  }
  .book-content__box .box-form__car-time label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }
  .book-content__box .box-form__car-time label i {
    color: #2c2c2c;
  }
  .book-content__box .box-form__car-time ::-webkit-datetime-edit {
    padding: 1.3rem 1.3rem;
  }
  .book-content__box .box-form__car-time ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    font-size: 1.6rem;
  }
  .book-content__box button {
    padding: 1.3rem 1.3rem;
    height: -moz-fit-content;
    height: fit-content;
    align-self: self-end;
    border: none;
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    background-color: #838383;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: all 0.3s;
  }
  .book-content__box button:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.55);
  }

  .error-message {
    color: #462528;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 1rem 1.4rem;
    margin-bottom: 1.8rem;
    margin-top: -1rem;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    display: none;
    justify-content: space-between;
    align-items: center;
  }
  .error-message i {
    cursor: pointer;
  }

  .booking-done {
    color: #2a6817;
    background-color: #c3fabe;
    border-color: #e4d2d4;
    padding: 1rem 1.4rem;
    margin-bottom: 1.8rem;
    margin-top: -1rem;
    border: 1px solid transparent;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    display: none;
    justify-content: space-between;
    align-items: center;
  }
  .booking-done i {
    cursor: pointer;
  }

  .active-modal {
    opacity: 1 !important;
    display: flex !important;
  }

  .modal-overlay {
    opacity: 0;
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999999999;
    top: 0;
    right: 0;
  }

  .booking-modal {
    opacity: 0;
    display: none;
    flex-direction: column;
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 999999999999;
    top: 54%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 83rem;
    height: 100vh;
    border: 2px solid white;
    background-color: rgb(255, 255, 255);
    padding-right: 2px;
    color: #010103;
  }
  @media (max-width: 800px) {
    .booking-modal {
      width: 100%;
    }
  }
  @media (max-width: 600px) {
    .booking-modal {
      top: 50%;
    }
  }
  .booking-modal__title {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: #a7a7a7;
    color: white;
    align-items: center;
  }
  .booking-modal__title h2 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }
  .booking-modal__title i {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.919);
    cursor: pointer;
    transition: all 0.2;
  }
  .booking-modal__title i:hover {
    color: white;
  }
  .booking-modal__message {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 3rem;
    background-color: #ffeae6;
  }
  .booking-modal__message h4 {
    font-size: 1.9rem;
    font-weight: 700;
    color: #3a3a3a;
  }
  .booking-modal__message h4 i {
    font-size: 2.5rem;
  }
  .booking-modal__message p {
    font-size: 1.7rem;
    color: #777777;
    font-weight: 500;
    line-height: 1.6;
  }
  .booking-modal__car-info {
    background-color: white;
    padding: 3rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid rgba(119, 119, 119, 0.6235294118);
  }
  @media (max-width: 650px) {
    .booking-modal__car-info {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  .booking-modal__car-info__dates {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .booking-modal__car-info__dates h5 {
    font-size: 1.8rem;
    color: #d3d3d3;
  }
  .booking-modal__car-info__dates span {
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 650px) {
    .booking-modal__car-info__dates span {
      grid-template-columns: 1fr;
      text-align: center;
      justify-content: center;
    }
  }
  .booking-modal__car-info__dates span i {
    font-size: 1.8rem;
    padding-top: 0.2rem;
    color: #777777;
  }
  @media (max-width: 650px) {
    .booking-modal__car-info__dates span i {
      display: none;
    }
  }
  .booking-modal__car-info__dates span h6 {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }
  .booking-modal__car-info__dates span p {
    font-size: 1.6rem;
    color: #777777;
  }
  .booking-modal__car-info__model {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  @media (max-width: 650px) {
    .booking-modal__car-info__model {
      margin-top: 3.5rem;
    }
  }
  .booking-modal__car-info__model h5 {
    font-size: 1.8rem;
    color: #c5c5c5;
  }
  .booking-modal__car-info__model h5 span {
    color: #010103;
  }
  .booking-modal__car-info__model img {
    width: 100%;
    height: auto;
  }
  .booking-modal__person-info {
    padding: 3rem 3rem;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .booking-modal__person-info h4 {
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #252423;
    margin-bottom: 2rem;
  }

  .input-time {
    text-align: center;
    width: 8rem;
    font-size: 14px;
    cursor: pointer;
  }

  .info-form {
    display: flex;
    flex-direction: column;
  }
  .info-form__checkbox {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    color: #565454;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  .info-form__checkbox input {
    width: 1.6rem;
    height: 1.6rem;
  }
  .info-form__1col {
    grid-template-columns: 1fr !important;
  }
  .info-form__2col,
  .info-form__1col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem 0;
  }
  @media (max-width: 650px) {
    .info-form__2col,
    .info-form__1col {
      grid-template-columns: 1fr;
    }
  }
  .info-form__2col span,
  .info-form__1col span {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .info-form__2col span label,
  .info-form__1col span label {
    font-size: 1.6rem;
    font-weight: 500;
    color: #777777;
  }
  .info-form__2col span label b,
  .info-form__1col span label b {
    color: #130c0b;
  }
  .info-form__2col span input,
  .info-form__1col span input {
    padding: 14px 15px;
    background-color: #dbdbdb;
    color: #555;
    font-size: 1.5rem;
    font-weight: 500;
    outline: none;
    border: none;
  }

  .reserve-button {
    background-color: #dbdbdb;
    margin: 0 -3rem;
    padding: 3rem;
    text-align: right;
  }
  @media (max-width: 650px) {
    .reserve-button {
      text-align: center;
    }
  }
  .reserve-button button {
    font-size: 2.4rem;
    color: white;
    font-weight: 700;
    background-color: #166856;
    border: 1px solid yellow;
    padding: 1.2rem 2rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .reserve-button button:hover {
    background-color: #11c429;
  }

  .dates-div {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .plan-section {
    background-color: #17191a;
    padding: 5.3rem 0;
  }

  .plan-container {
    display: flex;
    flex-direction: column;
  }
  .plan-container__title {
    margin: 0 auto;
    margin-bottom: 4rem;
    text-align: center;
    color: #010103;
  }
  .plan-container__title h3 {
    font-size: 2.4rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    color: #706f7b;
  }
  .plan-container__title h2 {
    font-size: 4.2rem;
    font-family: "Oswald", sans-serif;
    margin: 1.3rem 0 3rem 0;
    position: relative;
    color: white;
  }
  .hero_button_dark {
    display: inline-block;
    text-align: center;
    background: #fff;
    color: #000;
    font-weight: bold;
    padding: 2rem 4rem;
    line-height: 1;
    border-radius: 10px;
    position: relative;
    /* min-width: 8.23em; */
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    transition: color 1s ease;
    &:hover {
      color: #f8d521;
      transition: color 1s ease; /* Add a transition for the color change */
    }

    &:before,
    &:after {
      width: 4.4em;
      height: 2.95em;
      position: absolute;
      content: "";
      display: inline-block;
      background: #fff;
      border-radius: 50%;
      transition: transform 1s ease;
      transform: scale(0);
      z-index: -1;
    }

    &:before {
      top: -25%;
      left: 20%;
    }

    &:after {
      bottom: -25%;
      right: 20%;
    }

    &:hover:before,
    &:hover:after {
      transform: none;
    }
  }

  .plan-container__title h2::after {
    content: "";
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #f8d521;
    /* Use a conic gradient mask to hide and show the bits you want */
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(
      from var(--start),
      white 0 var(--spread),
      transparent var(--spread)
    );
  }
  .plan-container__boxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin-top: 3.7rem;
    padding: 0 3rem;
  }
  @media (max-width: 1021px) {
    .plan-container__boxes {
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
  }
  @media (max-width: 800px) {
    .plan-container__boxes {
      grid-template-columns: 1fr;
      margin-top: 1rem;
    }
  }
  .plan-container__boxes__box {
    text-align: center;
    padding: 1rem 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    .plan-container__boxes__box {
      padding: 1rem 1rem;
    }
  }
  .plan-container__boxes__box img {
    width: 24rem;
    height: auto;
  }
  .plan-container__boxes__box h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-family: "Oswald", sans-serif;
    color: white;
  }
  .plan-container__boxes__box p {
    font-size: 1.7rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.43;
  }

  .team-header {
    margin: 4rem auto;
    text-align: center;
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-size: 5rem;
    /* border-bottom: #f8d521 5px solid; */
    position: relative;
    width: auto;
  }
  .team-header::after {
    content: "";
    position: absolute;
    top: 95%;
    width: 30%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid #f8d521;
    /* Use a conic gradient mask to hide and show the bits you want */
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(
      from var(--start),
      white 0 var(--spread),
      transparent var(--spread)
    );
  }

  .pick-section {
    padding: 10rem 0;
    background-color: #000;
  }

  .pick-container {
    display: flex;
    flex-direction: column;
  }
  .pick-container__title {
    margin: 0 auto;
    text-align: center;
    color: #010103;
    max-width: 50rem;
    margin-bottom: 5rem;
  }
  .pick-container__title p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.5;
  }
  .pick-container__title h3 {
    font-size: 2.4rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
  }
  .pick-container__title h2 {
    font-size: 4.2rem;
    font-family: "Oswald", sans-serif;
    margin: 0.5rem 0 1rem 0;
    color: white;
  }
  .pick-container__car-content {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  @media (max-width: 1050px) {
    .pick-container__car-content {
      flex-direction: column;
      gap: 5rem;
    }
  }

  .pick-box {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
  .pick-box button {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 1.5rem 2.5rem;
    background-color: #414141;
    transition: all 0.2s;
    text-align: left;
  }
  .pick-box button:hover {
    background-color: #a5a4a4;
    color: white;
  }

  .pick-car {
    width: 50rem;
    position: relative;
  }
  @media (max-width: 700px) {
    .pick-car {
      width: 100%;
    }
  }
  .pick-car img {
    width: 100%;
    margin-top: 6rem;
  }

  .pick-description {
    width: 25rem;
  }
  .pick-description__price {
    width: 100%;
    background-color: #414141;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: white;
    padding: 0.3rem 1.9rem;
    white-space: nowrap;
  }
  .pick-description__price span {
    font-size: 2rem;
    font-weight: 700;
  }
  .pick-description__table {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    font-size: 1.4rem;
    color: white;
  }
  .pick-description__table__col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    grid-template-rows: auto;
    padding: 0.9rem 0.5rem;
    border-bottom: 2px solid #706f7b;
    border-right: 2px solid #706f7b;
    border-left: 2px solid #706f7b;
  }
  .pick-description__table__col span:nth-child(1) {
    border-right: 2px solid #706f7b;
  }

  .cta-btn {
    font-size: 2rem;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    color: white;
    font-family: "Poppins", sans-serif;
    background-color: #868686;
    padding: 1rem 1rem;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1.4rem;
    transition: all 0.3s;
    box-shadow: 6px 6px 0 #efe9e9;
  }
  .cta-btn:hover {
    background-color: #222222;
  }

  .box-cars {
    gap: 11rem;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1200px) {
    .box-cars {
      gap: 2rem;
    }
  }
  @media (max-width: 700px) {
    .box-cars {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5rem;
    }
  }

  .colored-button {
    background-color: #f8d521 !important;
    color: white;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid rgba(0, 0, 0, 0.2588235294);
    border-bottom-color: #4e4e4e;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 40%;
    right: 43%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .banner-section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 8rem;
    background-color: black;
    /* padding: 6rem 0; */
    text-align: center;
    /* background: url("/images/banners/banner.jpg") no-repeat center; */
    /* background-color: #3a393941; */
  }
  .banner_image_background {
    background: url("/images/banners/banner.jpg") no-repeat center;
    width: 100%;
    height: 100%;
  }
  .banner-content {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .banner-content__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .banner-content__text h2 {
    font-size: 5.8rem;
    /* line-height: 1.3; */
    font-family: "Oswald", sans-serif;
  }
  @media (max-width: 550px) {
    .banner-content__text h2 {
      font-size: 4.8rem;
    }
  }
  .banner-content__text p {
    font-size: 2.8rem;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 550px) {
    .banner-content__text p {
      font-size: 2.4rem;
    }
  }
  .banner-content__text span {
    color: #5c5c5c;
    font-weight: 500;
  }

  .choose-section {
    background-color: #17191a;
    padding: 2rem 0 10rem 0;
    background-image: url("/images/chooseUs/bg.png");
    background-position: -225px 255px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .choose-container {
    display: flex;
    flex-direction: column;
  }
  .choose-container__img {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  @media (max-width: 550px) {
    .choose-container__img {
      width: 100%;
    }
  }

  .text-container {
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;
    width: 100%;
  }
  @media (max-width: 1000px) {
    .text-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 5.5rem;
    }
  }
  .text-container__left {
    text-align: left;
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    color: #fff;
  }
  @media (max-width: 1000px) {
    .text-container__left {
      align-items: center;
      text-align: center;
    }
  }
  .text-container__left h4 {
    font-size: 2.2rem;
    margin-bottom: 0.7rem;
    font-weight: 600;
    font-family: "Oswald", sans-serif;
  }
  .text-container__left h2 {
    font-size: 4.2rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    font-family: "Oswald", sans-serif;
  }
  .text-container__left p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    color: #706f7b;
    margin-bottom: 3.3rem;
  }
  .text-container__left a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    background-color: #616161;
    padding: 1.5rem 2.5rem;
    border-radius: 0.3rem;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35); */
    transition: all 0.3s;
    border: 2px solid #312f2f;
    font-size: 1.6rem;
    width: -moz-fit-content;
    width: fit-content;
  }
  .text-container__left a:hover {
    box-shadow: 0 10px 15px 0 rgba(44, 43, 43, 0.6);
    background-color: #3b3a3a;
  }
  .text-container__right {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    max-width: 44rem;
  }
  .text-container__right__box {
    display: flex;
  }
  @media (max-width: 550px) {
    .text-container__right__box {
      flex-direction: column;
      align-items: center;
    }
  }
  .text-container__right__box img {
    width: 11rem;
    height: 11rem;
    margin-right: 1.1rem;
  }
  .text-container__right__box__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
  .text-container__right__box__text h4 {
    font-size: 2.4rem;
    color: #fff;
    font-family: "Oswald", sans-serif;
  }
  .text-container__right__box__text p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Poppins", sans-serif;
    line-height: 1.3;
  }

  .testimonials-section {
    background-color: #010103;
    padding: 10rem 0;
    color: #fff;
  }

  .testimonials-content {
    display: flex;
    flex-direction: column;
  }
  .testimonials-content__title {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    max-width: 70rem;
    margin-bottom: 5rem;
  }
  .testimonials-content__title h4 {
    font-size: 2.2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
  }
  .testimonials-content__title h2 {
    font-size: 4.2rem;
    margin-bottom: 1.4rem;
    font-family: "Oswald", sans-serif;
  }
  .testimonials-content__title p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.4;
  }

  .all-testimonials {
    display: flex;
    gap: 3rem;
    width: 100%;
    justify-content: center;
    padding: 3rem;
  }
  @media (max-width: 1000px) {
    .all-testimonials {
      padding: 0;
    }
  }
  .all-testimonials__box {
    background-color: #0b0b0b;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.08);
    width: 54rem;
    padding: 5.5rem;
    position: relative;
    border-radius: 10px;
  }
  @media (max-width: 1000px) {
    .all-testimonials__box {
      padding: 5rem 3rem;
    }
  }
  .all-testimonials__box p {
    font-size: 2.2rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  .all-testimonials__box__name {
    display: flex;
  }
  .all-testimonials__box__name__profile {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 3rem;
  }
  .all-testimonials__box__name__profile img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }
  .all-testimonials__box__name__profile h4 {
    font-size: 1.8rem;
  }
  .all-testimonials__box__name__profile p {
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
    font-weight: 400;
  }

  .quotes-icon {
    font-size: 6.2rem;
    color: #000000;
    position: absolute;
    bottom: 33px;
    right: 60px;
  }
  @media (max-width: 470px) {
    .quotes-icon {
      display: none;
    }
  }

  @media (max-width: 900px) {
    .box-2 {
      display: none;
    }
  }

  .faq-section {
    background: #010103;
    background-image: url("/images/faq/car.png");

    padding: 10rem 0;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }
  .instructions-section {
    /* background-image: url("/images/faq/car.png"); */
    background: #010103;
    padding: 10rem 0;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }

  .faq-content {
    display: flex;
    flex-direction: column;
    color: #010103;
  }
  .faq-content__title {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    max-width: 80rem;
    line-height: 1.5;
  }
  .faq-content__title h5 {
    font-size: 2.2rem;
    color: #706f7b;
  }
  .faq-content__title h2 {
    font-size: 4.2rem;
    margin-bottom: 1.7rem;
    font-family: "Oswald", sans-serif;
    color: #fff;
  }
  .faq-content__title p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Poppins", sans-serif;
  }

  .all-questions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
  }

  .faq-box {
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: #0b0b0b;
    /* box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1); */
    width: 80rem;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    .faq-box {
      width: 100%;
    }
  }
  .faq-box__question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
    padding: 1.8rem 4.5rem;
    transition: 0.15s ease;
  }
  .faq-box__question p {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Oswald", sans-serif;
  }
  .faq-box__question i {
    font-size: 2rem;
  }
  .faq-box__answer {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.7;
    max-height: 0;
    overflow: hidden;
    transition: 0.4s ease;
    padding: 0 4.5rem;
  }

  .active-answer {
    max-height: 20rem;
    padding: 2.8rem 4.5rem;
    transition: 0.4s ease;
  }
  @media (max-width: 550px) {
    .active-answer {
      max-height: 30rem;
    }
  }
  @media (max-width: 420px) {
    .active-answer {
      max-height: 55rem;
    }
  }

  .active-question {
    background-color: #2e2b2b;
    color: white;
    /* box-shadow: 0 10px 15px 0 rgba(248, 213, 33, 0.15); */
  }

  .download-section {
    background-image: url("/images/banners/bg02.png");
    background-color: #f8f8f8;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    padding: 10rem 0;
  }
  @media (max-width: 700px) {
    .download-section {
      background-image: none;
    }
  }

  .download-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 55rem;
    text-align: left;
  }
  @media (max-width: 700px) {
    .download-text {
      text-align: center;
      margin: 0 auto;
    }
  }
  .download-text h2 {
    font-size: 4.2rem;
    color: #010103;
  }
  .download-text p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Oswald", sans-serif;
    line-height: 1.5;
  }
  .download-text__btns {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;
  }
  @media (max-width: 700px) {
    .download-text__btns {
      justify-content: center;
    }
  }
  @media (max-width: 550px) {
    .download-text__btns {
      flex-direction: column;
      align-items: center;
    }
  }
  .download-text__btns img {
    width: 40%;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    .download-text__btns img {
      width: 22rem;
    }
  }

  footer {
    background-color: #17191a;
    padding: 10rem 0;
  }
  .footer_container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
    background: #17191a;
  }
  .footer-content {
    display: grid;
    color: #fff;
    background: #17191a;
    grid-template-columns: 27fr 21fr 21fr 21fr;
    gap: 8rem;
    justify-content: center;
    text-align: left;
    /* color: #010103; */
  }
  @media (max-width: 1100px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 650px) {
    .footer-content {
      grid-template-columns: 1fr;
    }
  }
  .footer_title {
    font-family: "Oswald", sans-serif;
  }
  .footer-content__1 {
    list-style: none;
  }
  @media (max-width: 650px) {
    .footer-content__1 {
      text-align: center;
    }
  }
  .footer-content__1 li a {
    text-decoration: none;
    color: #fff;
    transition: all 0.2s;
  }
  .footer-content__1 li a:hover {
    color: #f8d521;
  }
  .footer-content__1 li:nth-child(1) {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }
  .footer-content__1 li:nth-child(1) span {
    font-weight: 700;
    color: #f8d521;
  }
  .footer-content__1 li:nth-child(2) {
    font-size: 1.6rem;
    color: #706f7b;
    line-height: 1.7;
    margin-bottom: 3rem;
  }
  .footer-content__1 li:nth-child(3),
  .footer-content__1 li:nth-child(4) {
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .footer-content__2 {
    list-style: none;
  }
  @media (max-width: 650px) {
    .footer-content__2 {
      text-align: center;
    }
  }
  .footer-content__2 a {
    text-decoration: none;
    color: #626c7b;
    transition: all 0.2s;
  }
  .footer-content__2 a:hover {
    color: #f8d521;
  }
  .footer-content__2 li {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #706f7b;
  }
  .footer-content__2 li:nth-child(1) {
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    cursor: auto;
    color: #fff;
  }
  .footer-content__2 input {
    font-family: "Oswald", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    background-color: #272a2c;
    border-width: 1px;
    border-color: transparent;
    padding: 10px 60px;
    outline: none;
    margin-top: 1rem;
  }
  @media (max-width: 1100px) {
    .footer-content__2 input {
      width: 100%;
    }
  }

  .submit-email {
    text-decoration: none;
    color: white;
    font-weight: 700;
    background-color: #f8d521;
    padding: 1.5rem 2.5rem;
    border-radius: 0.3rem;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.25); */
    transition: all 0.3s;
    /* border: 2px solid #bcc8cc; */
    font-size: 1.6rem;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer;
    width: 100%;
  }
  .submit-email:hover {
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.4); */
    background-color: #17191a;
  }

  .hero-pages {
    width: 100%;
    height: 41rem;
    background-image: url("/images/hero/car-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .hero_pages_container {
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
  }
  .hero-pages__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .hero-pages__text {
    display: flex;
    flex-direction: column;
    z-index: 3;
    position: relative;
    width: 100%;
    height: 41rem;
    text-align: center;
    justify-content: center;
    color: #fff;
  }
  .hero-pages__text h3 {
    font-size: 3.6rem;
    margin-bottom: 1.5rem;
    font-family: "Oswald", sans-serif;
    border-bottom: #f8d521 3px solid;
    margin-right: auto;
    margin-left: auto;
  }
  .hero-pages__text p {
    font-size: 1.6rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }
  .hero-pages__text p a {
    color: #fff;
    text-decoration: none;
    transition: all 0.2s;
  }
  .hero-pages__text p a:hover {
    color: #f8d521;
  }

  .about_container {
    background: #000;
    padding: 10rem 0;
  }

  .about-main {
    margin: 0 auto;
    display: flex;
    gap: 5rem;
    max-width: 90rem;
    align-items: center;
    background: #000;
  }
  @media (max-width: 960px) {
    .about-main {
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
      max-width: 49rem;
    }
  }
  @media (max-width: 520px) {
    .about-main {
      max-width: 100%;
    }
  }
  .about-main__img {
    width: 43rem;
    height: 43rem;
  }
  @media (max-width: 960px) {
    .about-main__img {
      margin: 0 auto;
    }
  }
  @media (max-width: 520px) {
    .about-main__img {
      width: 100%;
      height: auto;
    }
  }
  .about-main__text {
    color: #010103;
    display: flex;
    flex-direction: column;
  }
  .about-main__text h3 {
    font-size: 2.2rem;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #706f7b;
  }
  .about-main__text h2 {
    font-family: "Oswald", sans-serif;
    font-size: 4.2rem;
    line-height: 1.2;
    color: #fff;
  }
  .about-main__text p {
    font-size: 1.6rem;
    color: #706f7b;
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  .about-main__text__icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
  }
  @media (max-width: 520px) {
    .about-main__text__icons {
      grid-template-columns: 1fr;
      margin: 0 auto;
      gap: 0;
    }
    .about-main__text__icons p {
      margin-top: 0;
    }
  }
  .about-main__text__icons__box {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 520px) {
    .about-main__text__icons__box {
      align-items: center;
    }
  }
  .about-main__text__icons__box .last-fk {
    width: 5rem;
  }
  .about-main__text__icons__box img {
    width: 7rem;
  }
  .about-main__text__icons__box span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 520px) {
    .about-main__text__icons__box span {
      text-align: center;
      flex-direction: column;
    }
  }
  .about-main__text__icons__box span h4 {
    font-size: 4.6rem;
    color: #fff;
  }

  .book-banner {
    display: flex;
    width: 100%;
    height: 20rem;
    background-image: url("/images/banners/book-banner.png");
    position: relative;
    margin-top: 7rem;
  }
  @media (max-width: 750px) {
    .book-banner {
      height: -moz-fit-content;
      height: fit-content;
      padding: 1rem 0;
    }
  }
  .book-banner__overlay {
    background-color: #2d2d2d;
    opacity: 0.89;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .text-content {
    color: white;
    z-index: 5;
    position: relative;
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  @media (max-width: 750px) {
    .text-content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      text-align: center;
    }
  }
  .text-content h2 {
    font-size: 3.2rem;
  }
  .text-content span {
    display: flex;
    font-size: 2.7rem;
    gap: 1rem;
    align-items: center;
    color: #ff4d30;
    white-space: nowrap;
  }
  .models-section {
    background-color: #050505;
  }

  .models-div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 3rem;
    align-items: center;
    text-align: center;
    padding: 10rem 0;
    width: 110rem;
    margin: 0 auto;
  }
  @media (max-width: 1150px) {
    .models-div {
      grid-template-columns: 1fr 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  @media (max-width: 800px) {
    .models-div {
      grid-template-columns: 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  .models-div__box {
    /* border: 1px solid #d5d5d5; */
    background-color: #0b0b0b;
    border-radius: 0.3rem;
    display: flex;
    width: 35rem;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    .models-div__box {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
  .models-div__box__img {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
  }
  .models-div__box__img img {
    width: 100%;
    height: 27rem;
  }
  .models-div__box__descr {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .models-div__box__descr__name-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .models-div__box__descr__name-price__name {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;
  }
  .models-div__box__descr__name-price__name p {
    font-size: 2.4rem;
    font-weight: 700;
  }
  .models-div__box__descr__name-price__name span {
    display: flex;
    gap: 0.4rem;
  }
  .models-div__box__descr__name-price__name span i {
    font-size: 1.4rem;
    color: #ffc933;
  }
  .models-div__box__descr__name-price__price {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .models-div__box__descr__name-price__price h4 {
    font-size: 2rem;
  }
  .models-div__box__descr__name-price__price p {
    font-size: 1.6rem;
  }
  .models-div__box__descr__name-price__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    -moz-column-gap: 7rem;
    column-gap: 7rem;
    margin-top: 2.5rem;
    margin: 2rem auto;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid #c6c6c6;
  }
  .models-div__box__descr__name-price__details span {
    font-size: 1.8rem;
    font-weight: 500;
    color: #777777;
    text-align: left;
  }
  .models-div__box__descr__name-price__details span i {
    color: #010103;
  }
  .models-div__box__descr__name-price__btn {
    background-color: #f8d521;
    padding: 1.8rem 3rem;
    border-radius: 0.3rem;
    transition: all 0.3s;
    font-size: 1.8rem;
    cursor: pointer;
  }
  .models-div__box__descr__name-price__btn:hover {
    scale: 1.07;
  }
  .models-div__box__descr__name-price__btn a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  .team-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 4rem;
    align-items: center;
    text-align: center;
    padding: 10rem 2rem;
    width: 110rem;
    margin: 0 auto;
  }
  @media (max-width: 1150px) {
    .team-container {
      grid-template-columns: 1fr 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  @media (max-width: 800px) {
    .team-container {
      grid-template-columns: 1fr;
      width: -moz-fit-content;
      width: fit-content;
    }
  }
  .team-container__box {
    width: 33rem;
    background-color: #0b0b0b;
    box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 400px) {
    .team-container__box {
      width: 100%;
    }
  }
  .team-container__box__img-div {
    width: 100%;
    height: auto;
    background-color: #f6f6f6;
  }
  .team-container__box__img-div img {
    width: 100%;
  }
  .team-container__box__descr {
    color: #fff;
    padding: 3rem;
  }
  .team-container__box__descr h3 {
    font-size: 2.2rem;
  }
  .team-container__box__descr p {
    font-size: 1.6rem;
    font-weight: 500;
    color: #777777;
  }
  .contact-page {
    background: #17191a;
  }
  .contact_container {
    background: #17191a;
    max-width: 133rem !important;
    margin: 0 auto !important;
    padding: 0 2.5rem !important;
  }

  .contact-div {
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 3rem; */
    margin: 0 auto;
    color: #fff;
    padding: 10rem 2rem;
    background: #17191a;
    background-image: url("/images/banners/bg-contact.png");
    background-size: auto;
    background-position: center center;
    background-repeat: no-repeat;
  }
  @media (max-width: 950px) {
    .contact-div {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
  .contact-div__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* max-width: 41rem; */
  }
  @media (max-width: 950px) {
    .contact-div__text {
      margin: 0 auto;
      margin-bottom: 2rem;
    }
  }
  .contact-div__text h2 {
    font-size: 4.2rem;
    line-height: 1.3;
    margin-bottom: 2rem;
    font-family: "Oswald", sans-serif;
  }
  .contact-div__text p {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: #706f7b;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  .contact-div__text a {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 500;
    transition: all 0.2s;
    margin-bottom: 0.5rem;
  }
  .contact-div__text a:hover {
    color: #f8d521;
  }
  .contact-div__form {
    display: flex;
    flex-direction: column;
  }
  .contact-div__form form {
    display: flex;
    flex-direction: column;
  }
  .contact-div__form form label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .contact-div__form form label b {
    color: #f8d521;
  }
  .contact-div__form form input {
    background-color: #272a2c;
    padding: 19px 30px 19px 30px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.3rem;
  }
  .link_container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2.3rem;
  }
  .contact-div__form form textarea {
    background-color: #272a2c;
    border-radius: 10px;
    height: 18rem;
    padding: 19px 30px 19px 30px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.5rem;
  }
  .contact-div__form form button {
    background-color: #f8d521;
    padding: 1.8rem 3rem;
    border-radius: 10px;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35); */
    transition: all 0.3s;
    font-family: "Poppins", sans-serif;
    /* border: 2px solid #ff4d30; */
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .contact-div__form form button:hover {
    /* box-shadow: 0 10px 15px 0 rgba(151, 147, 146, 0.6); */
    background-color: #17191a;
    font-size: 1.95rem;
  } /*# sourceMappingURL=styles.css.map */
  .enlist-div__form {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-left: 20rem;
    margin-right: 20rem;
  }
  .enlist-div__form form {
    display: flex;
    flex-direction: column;
  }
  .enlist-div__form form label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }
  .enlist-div__form form label b {
    color: #f8d521;
  }
  .enlist-div__form form input {
    background-color: #272a2c;
    padding: 19px 30px 19px 30px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.3rem;
    color: #6e747c;
  }
  .enlist-div__form form select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #272a2c;
    padding: 19px 30px 19px 30px;
    border-radius: 10px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.3rem;
  }
  .link_container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2.3rem;
  }
  .enlist-div__form form textarea {
    background-color: #272a2c;
    border-radius: 10px;
    height: 18rem;
    padding: 19px 30px 19px 30px;
    font-size: 1.6rem;
    border: none;
    outline: none;
    margin-bottom: 2.5rem;
  }
  .enlist-div__form form button {
    background-color: #f8d521;
    padding: 1.8rem 3rem;
    border-radius: 10px;
    /* box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35); */
    transition: all 0.3s;
    font-family: "Poppins", sans-serif;
    /* border: 2px solid #ff4d30; */
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .enlist-div__form form button:hover {
    /* box-shadow: 0 10px 15px 0 rgba(151, 147, 146, 0.6); */
    background-color: #17191a;
    font-size: 1.95rem;
  } /*# sourceMappingURL=styles.css.map */
  .signup_wrapper {
    height: 120vh;
    /* width: 100vw; */
    background-image: url("/images/signup/authentication_wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50rem 0;
    @media (max-width: 768px) {
      padding: 80rem 0;
    }
  }
  .signup_container {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    width: 40.486%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 47px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .signup_container img {
    width: 185px;
    height: 80px;
  }
  .signup_container h1 {
    font-family: "Oswald", sans-serif;
    font-size: 38px;
  }
  .input_container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    width: 100%;
    span {
      margin-bottom: 10px;
      font-size: 17px;
    }
  }
  .button_container {
    margin-top: 70px;
    width: 100%;
  }
  .auth_link {
    margin-top: 20px;
    text-align: center;
    font-size: 15px;
    color: #000;
    text-decoration: none;
    display: flex;
    p {
      margin-right: 2px;
    }
    a {
      border-bottom: 1px solid #f8d521;
    }
    a:hover {
      scale: 1.03;
    }
  }
  .alt_signin_container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
      div {
        margin-bottom: 1rem;
        margin-left: 5rem;
        margin-right: 5rem;
      }
    }
    div {
      background-color: white;
      border-radius: 10px;
      border: 0.5px solid #d1cece;
      /* height: auto; */
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
    img {
      width: 50px;
      height: 50px;
    }
    button:hover {
      scale: 1.05;
    }
  }
  .centered {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    filter: blur(10px) contrast(20);
  }
  .blob-1,
  .blob-2 {
    width: 70px;
    height: 70px;
    position: absolute;
    background: #fff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .blob-1 {
    left: 20%;
    animation: osc-l 2.5s ease infinite;
  }
  .blob-2 {
    left: 80%;
    animation: osc-r 2.5s ease infinite;
    background: #f8d521;
  }
  @keyframes osc-l {
    0% {
      left: 20%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 20%;
    }
  }
  @keyframes osc-r {
    0% {
      left: 80%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 80%;
    }
  }
  .privacy-policy-container {
    background-color: #17191a;
    padding: 10rem 0;
  }
   .social-bar {
    position: fixed;
    bottom: 0;
    right: 0;
    transform: translateY(-50%);
    margin-left: 0.4rem;
    z-index: 1000;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .share-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bar-links {
    cursor: pointer;
    padding: 0, 0.5rem;
  }
  .bar-links:hover {
    scale: 1.2;
  }
`;

const ThemeContainer = ({ children }: any) => {
  const { theme }: any = useTheme();
  if (theme !== "light") {
    return <ThemeDark>{children}</ThemeDark>;
  } else {
    return <ThemeLight>{children}</ThemeLight>;
  }
};

export default ThemeContainer;
