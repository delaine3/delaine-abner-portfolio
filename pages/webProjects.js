import React from "react";
import Head from "next/head";
import Link from "next/link";

//This is a function that displays my web apps
export default function WebProjects() {
  return (
    <div className="center">
      <Head>
        <title>Web Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <p className="blurb">
          Hi, my name is Delaine. Welcome To my portfolio. All projects listed
          here are web projects. If you click on the (Go to web app) link of
          each project you will be directed to a working version of it. It will
          most likely be hosted on Vercel. All images used are either in the
          public domain or require attribution. If attribution is required it
          will be visible in the page inwhich the image is used.
        </p>
        <ul className="grid">
          <li className="project-list">
            <h2 className="project-name">Story Book </h2>
            <div id="project-links">
              <p>
                Click on the button below to find out more about the
                application, its functions and any attribution associated with
                it.
              </p>
              <Link href="webProjects/storybook">
                <button>Find out more</button>
              </Link>
              <h3 className="technologies">Technologies used:</h3>
              <ul>
                <li id="project">MongoDB</li>
                <li id="project">Express</li>
                <li id="project">ReactJS</li>
                <li id="project">NodeJS</li>
                <li id="project">NextJS</li>
              </ul>{" "}
              <div className="container">
                <a href="https://day-dream.vercel.app/">
                  {" "}
                  <button> Go to web app </button>
                </a>{" "}
                <a href="https://github.com/delaine3/dayDream">
                  {" "}
                  <button> Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name"> Memory Game </h2>
            <div id="project-links">
              <p>
                Click on the button below to find out more about the
                application, its functions and any attribution associated with
                it.
              </p>
              <Link href="webProjects\memoryGame">
                <button>Find out more</button>
              </Link>
              <h3 className="technologies">Technologies used:</h3>
              <ul>
                <li id="project">MongoDB</li>
                <li id="project">Express</li>
                <li id="project">ReactJS</li>
                <li id="project">NodeJS</li>
                <li id="project">NextJS</li>
              </ul>{" "}
              <div className="container">
                <a href="https://a-memory-game-seven.vercel.app/">
                  {" "}
                  <button> Go to web app </button>
                </a>{" "}
                <a href="https://github.com/delaine3/A_Memory_Game">
                  {" "}
                  <button> Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Pantry</h2>
            <div id="project-links">
              <p>
                Click on the button below to find out more about the
                application, its functions and any attribution associated with
                it.
              </p>
              <Link href="webProjects\pantry">
                <button>Find out more</button>
              </Link>
              <h3 className="technologies">Technologies used:</h3>
              <ul>
                <li id="project">MongoDB</li>
                <li id="project">Express</li>
                <li id="project">ReactJS</li>
                <li id="project">NodeJS</li>
                <li id="project">NextJS</li>
              </ul>{" "}
              <div className="container">
                <a href="https://pantry-dusky.vercel.app/">
                  <button>Go to web app</button>
                </a>
                <a href="https://github.com/delaine3/Pantry">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">My Portfolio</h2>
            <div id="project-links">
              <p>
                This is the site that you are currently on.
                <p>
                  <h3 className="technologies">Technologies used:</h3>
                  <ul>
                    <li id="project">React</li>
                    <li id="project">Next JS</li>
                  </ul>{" "}
                </p>
              </p>{" "}
              <div className="container">
                <a href="https://github.com/delaine3/my-nextjs-portfolio">
                  {" "}
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Text Formatter</h2>
            <div id="project-links">
              <p>
                This site was created for people who are trying to clean data.
                It allows the user to remove characters, separate words by
                character, enclose strings in characters, and remove duplicates.
                <p>
                  <h3 className="technologies">Technologies used:</h3>
                  <ul>
                    <li id="project">ReactJS</li>
                  </ul>
                </p>
              </p>
              <div className="container">
                <a href="https://text-formatter-zeta.vercel.app/">
                  <button> Go to web app</button>
                </a>
                <a href="https://github.com/delaine3/Text_Formatter">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Calculator </h2>
            <div id="project-links">
              <p>
                This app allows you to add, subtract, multiply, and divide
                numbers. It has an interactive and colorful UI.
                <p>
                  <h3 className="technologies">Technologies used:</h3>
                  <ul>
                    <li id="project">Express</li>
                    <li id="project">ReactJS</li>
                    <li id="project">Redux</li>
                    <li id="project">NextJS</li>
                  </ul>{" "}
                </p>
              </p>
              <div className="container">
                <a href="https://calculator-mu-ten.vercel.app/">
                  <button> Go to web app</button>
                </a>

                <a href="https://github.com/delaine3/calculator">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Drum Machine </h2>
            <div id="project-links">
              <p>
                This app allows you to play drum sounds using an interactive UI.
                <p>
                  <h3 className="technologies">Technologies used:</h3>
                  <ul>
                    <li id="project">React</li>
                    <li id="project">Redux</li>
                  </ul>{" "}
                </p>
              </p>
              <div className="container">
                <a href="https://codepen.io/Delaine/pen/eYRNBra?editors=1010">
                  <button> Go to codepen </button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Markdown Preview </h2>
            <div id="project-links">
              <p>
                This app allows you to type text and view it as a formatted
                preview.
                <p>
                  <h3 className="technologies">Technologies used:</h3>
                  <ul>
                    <li id="project">React</li>
                  </ul>{" "}
                </p>
              </p>
              <div className="container">
                <a href="https://codepen.io/Delaine/pen/oNWOPyd">
                  <button>Go to codepen</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Whack a Mole Game </h2>

            <div id="project-links">
              <p>
                Click on the button below to find out more about the
                application, its functions and any attribution associated with
                it.
              </p>
              <Link href="/webProjects\wackAMole">
                <button>Find out more</button>
              </Link>
              <h3 className="technologies">Technologies used:</h3>
              <ul>
                <li id="project">MongoDB</li>
                <li id="project">Express</li>
                <li id="project">ReactJS</li>
                <li id="project">NodeJS</li>
                <li id="project">NextJS</li>
              </ul>{" "}
              <div className="container">
                <a href="https://whack-a-mole-4jvxtc469-delaine3.vercel.app/newPlayer">
                  <button> Go to web app </button>
                </a>
                <a href="https://github.com/delaine3/whack_a_mole">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Random Quote Generator </h2>
            <div id="project-links">
              <div>
                <p>
                  This app allows you to generate random quotes and change the
                  application background.
                  <p>
                    <h3 className="technologies">Technologies used:</h3>
                    <ul>
                      <li id="project">React</li>
                      <li id="project">NodeJS</li>
                    </ul>{" "}
                  </p>
                </p>
              </div>
              <div className="container">
                <a href="https://codepen.io/Delaine/pen/jOmxpQd">
                  <button> Go to web app </button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Connect 4 Game </h2>
            <div id="project-links">
              <p>
                Click on the button below to find out more about the
                application, its functions and any attribution associated with
                it.
              </p>
              <Link href="/webProjects\connectFour">
                <button>Find out more</button>
              </Link>
              <h3 className="technologies">Technologies used:</h3>
              <ul>
                <li id="project">MongoDB</li>
                <li id="project">Express</li>
                <li id="project">ReactJS</li>
                <li id="project">NodeJS</li>
                <li id="project">NextJS</li>
              </ul>{" "}
              <div className="container">
                <a href="https://connect-four-game.vercel.app/">
                  <button> Go to web app </button>
                </a>
                <a href="https://github.com/delaine3/Connect_Four_Game">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Achievement Tracker </h2>
            <div id="project-links">
              <div>
                <p>
                  This app allows you to input and save your daily achievements
                  to keep you motivated.
                  <p>
                    <h3 className="technologies">Technologies used:</h3>
                    <ul>
                      <li id="project">MongoDB</li>
                      <li id="project">Express</li>
                      <li id="project">ReactJS</li>
                      <li id="project">NodeJS</li>
                      <li id="project">NextJS</li>
                    </ul>{" "}
                  </p>
                </p>
              </div>
              <div className="container">
                <a href="https://achievements-peach.vercel.app/">
                  <button> Go to web app </button>
                </a>
                <a href="https://github.com/delaine3/Achievements">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Snake Game </h2>
            <div id="project-links">
              <p>
                Click on the button below to find out more about the
                application, its functions and any attribution associated with
                it.
              </p>
              <Link href="/webProjects\snakeGame">
                <button>Find out more</button>
              </Link>
              <h3 className="technologies">Technologies used:</h3>
              <ul>
                <li id="project">MongoDB</li>
                <li id="project">Express</li>
                <li id="project">ReactJS</li>
                <li id="project">NodeJS</li>
                <li id="project">NextJS</li>
              </ul>{" "}
              <div className="container">
                <a href="https://snake-game-five-dun.vercel.app/">
                  <button> Go to web app</button>
                </a>
                <a href="https://github.com/delaine3/snake_game">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Timer App </h2>
            <div id="project-links">
              <div>
                <p>
                  This app is similar to a pomodoro timer. Users can set a
                  countdown, as well as schedule breaks.
                  <p>
                    <h3 className="technologies">Technologies used:</h3>
                    <ul>
                      <li id="project">React</li>
                    </ul>{" "}
                  </p>
                </p>
              </div>
              <div className="container">
                <a href="https://timer-project-one.vercel.app/">
                  <button> Go to web app</button>
                </a>
                <a href="https://github.com/delaine3/timer-project">
                  <button>Go to source code</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name">Simple Website</h2>
            <div id="project-links">
              <div>
                <p>
                  This is a website created using simple HTML and CSS. All
                  information in the paragraphs was copied verbatim from
                  <br />
                  <a
                    href="                      https://time.com/collection/guclassNamee-to-happiness/4791285/bond-with-people/
"
                  >
                    this website
                  </a>
                  <p>
                    <h3 className="technologies">Technologies used:</h3>
                    <ul>
                      <li id="project">HTML</li>
                      <li id="project">CSS</li>
                    </ul>{" "}
                  </p>
                </p>
              </div>
              <div className="container">
                <a href="https://codepen.io/Delaine/pen/NWdZmyW">
                  <button> Go to website codepen</button>
                </a>
              </div>
            </div>
          </li>
          <li className="project-list">
            <h2 className="project-name"> Survey Form Website</h2>
            <div id="project-links">
              <div>
                <p>
                  This is a survey form website created using simple HTML and
                  CSS.
                  <p>
                    <h3 className="technologies">Technologies used:</h3>
                    <ul>
                      <li id="project">HTML</li>
                      <li id="project">CSS</li>
                    </ul>{" "}
                  </p>
                </p>
              </div>
              <div className="container">
                <a href="https://codepen.io/Delaine/pen/oNBroGY">
                  <button> Go to website codepen</button>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
