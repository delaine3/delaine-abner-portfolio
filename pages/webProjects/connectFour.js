import React from "react";
import Head from "next/head";

//This is a function that displays my web apps
export default function ConnectFour() {
  return (
    <div className="center">
      <Head>
        <title>Connect 4 game </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="project-page">
        <h1>Connect 4 game </h1>
        <p>
          This a timed connect 4 game. Players are given a minute to connect 4
          dots in a vertical, horizontal or diagonal line. The first player to
          connect 4 dots wins. If no player connects 4 dots within the alloted
          time, the game ends in a draw. The result of the game is saved upon
          completion. This app is created with the help of an official Next.js
          example titled:{" "}
          <a href="https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose">
            {" "}
            MongoDB and Mongoose With Next.js
          </a>
          . Some of the code and or ideas from my game are adapted from the the
          following
          <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
            FreeCodeCamp Tutorial Video.
          </a>{" "}
          You can find the original source code of this tutorial in the
          following
          <a href="https://github.com/kubowania/connect-four">
            Github repo
          </a>{" "}
          The original source contains an MIT license which allows anyone to use
          it. The game in the{" "}
          <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
            FreeCodeCamp Tutorial Video
          </a>{" "}
          is made using Vanilla Javascript and minimal css. Mine is created
          using the technologies below.
          <div className="center-box">
            <h3 className="technologies">Technologies used:</h3>
            <ul>
              <li id="project">MongoDB</li>
              <li id="project">Express</li>
              <li id="project">React</li>
              <li id="project">NodeJS</li>
              <li id="project">Next.js</li>
            </ul>{" "}
          </div>
        </p>
        <div className="container">
          <a
            target="_blank"
            href="https://connect-four-game.vercel.app/"
            rel="noreferrer"
          >
            <button>
              Go to Delaine&rsquo;s <br /> Version of the Game
            </button>
          </a>
          <a
            target="_blank"
            href="https://github.com/delaine3/Connect_Four_Game"
            rel="noreferrer"
          >
            <button>
              {" "}
              Go to Delaine&rsquo;s <br />
              Source Code{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
