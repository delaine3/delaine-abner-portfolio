import React from "react";
import Head from "next/head";
import Link from "next/link";

//This is a function that displays my web apps
export default function Index() {
  const resumeStyle = {
    color: "blue",
    lineHeight: 10,
    padding: "1.5em",
  };
  return (
    <div>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h2>Hi, my name is Delaine. Welcome to my portfolio.</h2>
        <div className="grid">
          <div id="webapps-index">
            <h3>Web Apps</h3>
            <p>
              These are projects that I have worked on. They are built using a
              combination of the following technologies:{" "}
            </p>
            <ul>
              <li id="project">MongoDB</li>
              <li id="project">Express</li>
              <li id="project">ReactJS</li>
              <li id="project">NextJS</li>
              <li id="project">NodeJS</li>
            </ul>{" "}
            <Link href="/webProjects">
              <a>
                <button>Go to Web Apps</button>
              </a>
            </Link>
          </div>
          <div id="certificates-index">
            <h3>Certificates</h3>
            <p>
              These are the certificates I have attained thus far. They concern
              the following technologies:
            </p>
            <ul>
              <li id="project">C#</li>
              <li id="project">Javascript</li>
              <li id="project">AWS</li>
              <li id="project">MongoDB</li>
            </ul>
            <Link href="/certificates">
              <a>
                {" "}
                <button>Go to Certificates</button>
              </a>
            </Link>
          </div>
          <iframe
            title="Delaine Abner - Resume (3)"
            src="https://www.scribd.com/embeds/581278965/content?start_page=1&view_mode=scroll&access_key=key-DVAWH5v61sAVMZD3L2eT"
            tabindex="0"
            data-auto-height="true"
            data-aspect-ratio="0.7729220222793488"
            scrolling="no"
            width="100%"
            height="600"
            frameborder="0"
          ></iframe>
        
        </div>
      </div>
    </div>
  );
}
