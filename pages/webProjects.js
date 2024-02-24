import React from "react";
import Head from "next/head";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const ProjectListItem = ({
  title,
  blurb,
  technologies,
  webAppLink,
  sourceCodeLink,
}) => (
  <li className="project-list">
    <div className="project-links">
      <div className="project-content p-2">
        <h2 className="project-name">{title}</h2>
        <p>{blurb}</p>
        <h3 className="technologies">Technologies used:</h3>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index} id={`project-${index}`}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <a rel="noreferrer" target="_blank" href={webAppLink}>
          <button>
            Go to <br /> Web App
          </button>
        </a>
        <a rel="noreferrer" target="_blank" href={sourceCodeLink}>
          <button>
            Go to <br /> Source Code
          </button>
        </a>
      </div>
    </div>
  </li>
);

//This is a function that displays my web apps
export default function WebProjects() {
  const projects = [
    {
      title: "Story Book",
      blurb:
        "This app allows you to create and save characters and plots, as well as perform writing exercises through helpful prompts.",
      technologies: ["MongoDB", "Express", "React", "NodeJS", "Next.js"],
      webAppLink: "https://day-dream.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/dayDream",
    },
    {
      title: "Memory Game",
      blurb:
        "Click on the button below to find out more about the application, its functions, and any attribution associated with it.",
      technologies: ["MongoDB", "Express", "React", "NodeJS", "Next.js"],
      webAppLink: "https://a-memory-game-seven.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/A_Memory_Game",
    },
    {
      title: "Pantry",
      blurb:
        "Click on the button below to find out more about the application, its functions, and any attribution associated with it.",
      technologies: ["MongoDB", "Express", "React", "NodeJS", "Next.js"],
      webAppLink: "https://pantry-dusky.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/Pantry",
      moreInfoLink: "/webProjects/pantry",
    },
    {
      title: "My Portfolio",
      blurb: "This is the site that you are currently on.",
      technologies: ["React", "Next.js"],
      sourceCodeLink: "https://github.com/delaine3/delaine-abner-portfolio",
    },
    {
      title: "Text Formatter",
      blurb:
        "This site was created for people who are trying to clean data. It allows the user to remove characters, separate words by character, enclose strings in characters, and remove duplicates.",
      technologies: ["React"],
      webAppLink: "https://text-formatter-zeta.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/Text_Formatter",
    },
    {
      title: "Calculator",
      blurb:
        "This app allows you to add, subtract, multiply, and divide numbers. It has an interactive and colorful UI.",
      technologies: ["Express", "React", "Redux", "Next.js"],
      webAppLink: "https://calculator-mu-ten.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/calculator",
    },
    {
      title: "Drum Machine",
      blurb: "This app allows you to play drum sounds using an interactive UI.",
      technologies: ["React", "Redux"],
      webAppLink: "https://drum-machine-app-ten.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/Drum-Machine-App",
    },
    {
      title: "Markdown Preview",
      blurb:
        "This app allows you to type text and view it as a formatted preview.",
      technologies: ["React"],
      webAppLink: "https://codepen.io/Delaine/pen/oNWOPyd", // Assuming Codepen link is acceptable as "webAppLink"
    },
    {
      title: "Whack a Mole Game",
      blurb:
        "Click on the button below to find out more about the application, its functions, and any attribution associated with it.",
      technologies: ["MongoDB", "Express", "React", "NodeJS", "Next.js"],
      webAppLink: "https://whack-a-mole-green.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/whack_a_mole",
      moreInfoLink: "/webProjects/wackAMole",
    },
    {
      title: "Random Quote Generator",
      blurb:
        "This app allows you to generate random quotes and change the application background.",
      technologies: ["React", "NodeJS"],
      webAppLink: "https://random-quote-generator-nu.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/Random-Quote-Generator",
    },
    {
      title: "Connect 4 Game",
      blurb:
        "Click on the button below to find out more about the application, its functions, and any attribution associated with it.",
      technologies: ["MongoDB", "Express", "React", "NodeJS", "Next.js"],
      webAppLink: "https://connect-four-game.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/Connect_Four_Game",
      moreInfoLink: "/webProjects/connectFour",
    },
    {
      title: "Snake Game",
      blurb:
        "Click on the button below to find out more about the application, its functions, and any attribution associated with it.",
      technologies: ["MongoDB", "Express", "React", "NodeJS", "Next.js"],
      webAppLink: "https://snake-game-five-dun.vercel.app/newPlayer",
      sourceCodeLink: "https://github.com/delaine3/snake_game",
      moreInfoLink: "/webProjects/snakeGame",
    },
    {
      title: "Timer App",
      blurb:
        "This app is similar to a pomodoro timer. Users can set a countdown, as well as schedule breaks.",
      technologies: ["React"],
      webAppLink: "https://timer-project-one.vercel.app/",
      sourceCodeLink: "https://github.com/delaine3/timer-project",
    },
    {
      title: "Simple Website",
      blurb:
        "This is a website. All information in the paragraphs was copied verbatim.",
      technologies: ["HTML", "CSS"],
      webAppLink: "https://codepen.io/Delaine/pen/NWdZmyW", // Assuming Codepen link is acceptable as "webAppLink"
    },
    {
      title: "Survey Form Website",
      blurb: "This is a survey form website.",
      technologies: ["HTML", "CSS"],
      webAppLink: "https://codepen.io/Delaine/pen/oNBroGY", // Assuming Codepen link is acceptable as "webAppLink"
    },
  ];
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
          Hi, my name is Delaine. Welcome to my portfolio. If you click on the
          &#34;Go to Web App&#34; link of each project you will be directed to a
          working version of it. It will most likely be hosted on Vercel. All
          images used are either in the public domain or require attribution. If
          attribution is required it will be visible in the page in which the
          image is used. The Next.js apps are created with the help of an
          official Next.js example titled:{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose"
          >
            {" "}
            MongoDB and Mongoose With Next.js
          </a>
          . All projects are currently a work in progress.
        </p>
        <ul className="grid">
          {projects.map((project, index) => (
            <ProjectListItem key={index} {...project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
