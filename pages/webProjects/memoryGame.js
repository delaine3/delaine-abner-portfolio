import React from "react";
import Head from "next/head";

//This is a function that displays my web apps
export default function MemoryGame() {
  return (
    <div className="center">
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="project-page">
        <h1>Memory Game</h1>
        <p>
          In this game the player has to turn over different tiles and try to
          find matching tiles. They get a point every time they uncover a
          matching pair and lose half a point if their pair does not match. If
          they win the game, they can input their name and save their score. The
          scores on the score board are arranged alphabetically.
         
            {" "}
            Some of the ideas from this game are adapted from the the following
            <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
              FreeCodeCamp Tutorial Video.
            </a>{" "}
            You can find the original source code of this tutorial in the
            following
            <a href="https://github.com/kubowania/memory-game">
              Github repo
            </a>{" "}
            The original source contains an MIT license which allows anyone to
            use it. The game in the{" "}
            <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
              FreeCodeCamp Tutorial Video
            </a>{" "}
            is made using Vanilla Javascript and minimal css. Mine is created
            using the technologies below.
          </p>
          <div className="center-box">
          <h3 className="technologies">Technologies used:</h3>
          <ul >
            <li id="project">MongoDB</li>
            <li id="project">Express</li>
            <li id="project">ReactJS</li>
            <li id="project">NodeJS</li>
            <li id="project">NextJS</li>
          </ul>{" "}
       
        <div className="container">
          {" "}
          <a href="https://a-memory-game-seven.vercel.app/">
            {" "}
            <button> Go to Delaine&rsquo;s Version Of The Game</button>
          </a>{" "}
          <a href="https://github.com/delaine3/A_Memory_Game">
            <button>Go to Delaine&rsquo;s Source Code</button>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}
