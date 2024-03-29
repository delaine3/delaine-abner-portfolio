import React from "react";
import Head from "next/head";

//This is a function that displays my web apps
export default function SnakeGame() {
  return (
    <div className="center">
      <Head>
        <title>Snake game </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="project-page">
        <h1>Snake game </h1>
        <p>
          This a snake game.The goal is to direct a snake to food using the up,
          down, left, and right arrows, without hitting the boundaries of the
          box. This only works with the specified key board keys. After the game
          is over the player is presented with a form that allows them to save
          their score. There is also a page that contains a score board which
          contains the scores of other players in descending order.This app is
          created with the help of an official Next.js example titled:{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose"
          >
            {" "}
            MongoDB and Mongoose With Next.js
          </a>
          .
        </p>{" "}
        Some of the code and ideas from my game are adapted from the following
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s"
        >
          FreeCodeCamp Tutorial Video.
        </a>{" "}
        You can find the original source code of this tutorial in the following
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/kubowania/Nokia3310-Snake"
        >
          Github repo
        </a>{" "}
        The original source contains an MIT license which allows anyone to use
        it. The game in the{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s"
        >
          FreeCodeCamp Tutorial Video
        </a>{" "}
        is made using vanilla javascript and minimal css. Mine is created using
        the technologies below.
        <div className="center-box">
          <h3 className="technologies">Technologies used:</h3>
          <ul>
            <li id="project">MongoDB</li>
            <li id="project">Express</li>
            <li id="project">React</li>
            <li id="project">NodeJS</li>
            <li id="project">Next.js</li>
          </ul>{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://snake-game-five-dun.vercel.app/"
          >
            <button>
              Go to Delaine&rsquo;s <br />
              Version of the Game{" "}
            </button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/delaine3/snake_game"
          >
            <button>
              Go to Delaine&rsquo;s <br />
              Source Code{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
