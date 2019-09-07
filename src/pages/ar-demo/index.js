import React from "react";
import ContentSection from "../../components/ContentSection";
import Pattern from "../../image/pattern.patt";
import KoalaObj from "../../image/koala.obj";
import KoalaMtl from "../../image/koala.mtl";
import "./styles.scss";

// @TODO: AR isn't working in React currently
// If we get time, these scripts need to run for it to work

// <script
// src="https://code.jquery.com/jquery-3.4.1.min.js"
// integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
// crossOrigin="anonymous"></script>
// <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
// <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.7.8/aframe/build/aframe-ar.js"></script>
// <script src="https://kit.fontawesome.com/55c4df76c1.js"></script>

function ARDemo(props) {
  return (
    <>
      <div id="container">
        <button id="backButton"></button>
        <a-scene embedded arjs>
          <a-marker type="pattern" url={Pattern}>
            <a-entity 
              obj-model={`obj: url(${KoalaObj}); mtl: url(${KoalaMtl})`}>
            </a-entity>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </>
  );
}

export default ARDemo;
