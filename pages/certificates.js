import React from "react";

//This is a function that displays my web apps
export default function Certificates() {
  return (
    <div>
      <div className="certificates">
        <p>
          Welcome to my certificates page. Clicking on a certificate will take you to its verification  page.
        </p>
        <ul>
          <li id="certificate-list">
            <a href="https://freecodecamp.org/certification/skyflower/javascript-algorithms-and-data-structures">
              <img
                src="https://i.ibb.co/SrFyWv8/Js-algorithms-and-data-structures.jpg"
                alt="Js-algorithms-and-data-structures"
                border="0"
              />
            </a>
          </li>
          <li className="certificate-list">
            <a href="https://www.educative.io/verify-certificate/3l5A3ZfxW0YVDK0YGtEmNBWXGXyrUZ">
              <img
                src="https://i.ibb.co/Zcn0fDy/3l5-A3-Zfx-W0-YVDK0-YGt-Em-NBWXGXyr-UZ.png"
                alt="3l5-A3-Zfx-W0-YVDK0-YGt-Em-NBWXGXyr-UZ"
                border="0"
              />
            </a>
          </li>
          <li className="certificate-list">
            <a href="https://www.educative.io/verify-certificate/O8NM6428nOwI0xAXQR7725cjox2m3Q3DKTB">
              <img
                src="https://i.ibb.co/K7dbL9c/Mongo.png"
                alt="Mongo"
                border="0"
              />
            </a>
          </li>
          <li className="certificate-list">
            <a href="https://www.educative.io/verify-certificate/g5g3ywCNnVBqRGzoJTKqWlVzgz1BSk">
              <img
                src="https://i.ibb.co/kKgknZk/AWS-SECURITY-FUNDAMENTALS.png"
                alt="AWS-SECURITY-FUNDAMENTALS"
                border="0"
              />
            </a>
          </li>
          <li className="certificate-list">
            <a href="https://www.educative.io/verify-certificate/3l5A3Zfxkx2YOBln7hEmNBWXGXyrUZ">
              <img
                src="https://i.ibb.co/TwfYkj5/The-Detailed-Workings-of-AWS-S3.png"
                alt="The-Detailed-Workings-of-AWS-S3"
                border="0"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
