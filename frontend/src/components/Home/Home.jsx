import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import milkywayImage from "../../Images/milky_way.jpg";
import milkywayImage from "../../Images/stars.jpg";
import sunImage from "../../Images/sun.jpg";
import mercuryTexture from "../../Images/mercury.jpg";
import venusTexture from "../../Images/venus.jpg";
import earthTexture from "../../Images/earth.jpg";
import marsTexture from "../../Images/mars.jpg";
import jupiterTexture from "../../Images/jupiter.jpg";
import saturnTexture from "../../Images/saturn.jpg";
import saturnRingTexture from "../../Images/saturn ring.png";
import uranusTexture from "../../Images/uranus.jpg";
import uranusRingTexture from "../../Images/uranus ring.png";
import neptuneTexture from "../../Images/neptune.jpg";
import plutoTexture from "../../Images/pluto.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import { FaJava } from "react-icons/fa";
import {
  SiSpring,
  SiMysql,
  SiAngular,
  SiHibernate,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";

function Home() {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const sunTexture = textureLoader.load(sunImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });
    camera.position.set(0, 0, 148);

    const spaceTexture = textureLoader.load(milkywayImage);
    scene.background = spaceTexture;

    //const orbit = new OrbitControls(camera, renderer.domElement);
    //orbit.update();

    const sunGeomatry = new THREE.SphereGeometry(16, 64, 64);
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeomatry, sunMaterial);
    scene.add(sun);

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    function createPlanet(size, texture, position, ring) {
      const geo = new THREE.SphereGeometry(size, 64, 64);
      const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture),
      });
      const mesh = new THREE.Mesh(geo, mat);
      const obj = new THREE.Object3D();
      obj.add(mesh);
      if (ring) {
        const ringGeo = new THREE.RingGeometry(
          ring.innerRadius,
          ring.outerRadius,
          32
        );
        const ringMat = new THREE.MeshBasicMaterial({
          map: textureLoader.load(ring.texture),
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
      }
      scene.add(obj);
      mesh.position.x = position;
      return { mesh, obj };
    }

    const mercury = createPlanet(3.2, mercuryTexture, 28);
    const venus = createPlanet(5.8, venusTexture, 44);
    const earth = createPlanet(6, earthTexture, 62);
    const mars = createPlanet(4, marsTexture, 78);
    const jupiter = createPlanet(12, jupiterTexture, 100);
    const saturn = createPlanet(10, saturnTexture, 138, {
      innerRadius: 10,
      outerRadius: 20,
      texture: saturnRingTexture,
    });
    const uranus = createPlanet(7, uranusTexture, 176, {
      innerRadius: 7,
      outerRadius: 12,
      texture: uranusRingTexture,
    });
    const neptune = createPlanet(7, neptuneTexture, 200);
    const pluto = createPlanet(2.8, plutoTexture, 216);

    const pointLight = new THREE.PointLight(0xffffff, 50, 0, 1);
    scene.add(pointLight);

    function animate() {
      // Self-rotation
      sun.rotateY(0.004);
      mercury.mesh.rotateY(0.004);
      venus.mesh.rotateY(0.002);
      earth.mesh.rotateY(0.02);
      mars.mesh.rotateY(0.018);
      jupiter.mesh.rotateY(0.04);
      saturn.mesh.rotateY(0.038);
      uranus.mesh.rotateY(0.03);
      neptune.mesh.rotateY(0.032);
      pluto.mesh.rotateY(0.008);

      // Around-sun-rotation
      mercury.obj.rotateY(0.04);
      venus.obj.rotateY(0.015);
      earth.obj.rotateY(0.01);
      mars.obj.rotateY(0.008);
      jupiter.obj.rotateY(0.002);
      saturn.obj.rotateY(0.0009);
      uranus.obj.rotateY(0.0004);
      neptune.obj.rotateY(0.0001);
      pluto.obj.rotateY(0.00007);

      requestAnimationFrame(animate);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }
    animate();

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        sun.rotation.x -= constSpeed;
        sun.rotation.y += constSpeed;

        mercury.obj.rotation.x -= constSpeed;
        mercury.obj.rotation.y += constSpeed;

        venus.obj.rotation.x -= constSpeed;
        venus.obj.rotation.y += constSpeed;

        earth.obj.rotation.x -= constSpeed;
        earth.obj.rotation.y += constSpeed;

        mars.obj.rotation.x -= constSpeed;
        mars.obj.rotation.y += constSpeed;

        jupiter.obj.rotation.x -= constSpeed;
        jupiter.obj.rotation.y += constSpeed;

        saturn.obj.rotation.x -= constSpeed;
        saturn.obj.rotation.y += constSpeed;

        uranus.obj.rotation.x -= constSpeed;
        uranus.obj.rotation.y += constSpeed;

        neptune.obj.rotation.x -= constSpeed;
        neptune.obj.rotation.y += constSpeed;

        pluto.obj.rotation.x -= constSpeed;
        pluto.obj.rotation.y += constSpeed;

        // self

        mercury.mesh.rotation.x -= constSpeed;
        mercury.mesh.rotation.y += constSpeed;

        venus.mesh.rotation.x -= constSpeed;
        venus.mesh.rotation.y += constSpeed;

        earth.mesh.rotation.x -= constSpeed;
        earth.mesh.rotation.y += constSpeed;

        mars.mesh.rotation.x -= constSpeed;
        mars.mesh.rotation.y += constSpeed;

        jupiter.mesh.rotation.x -= constSpeed;
        jupiter.mesh.rotation.y += constSpeed;

        saturn.mesh.rotation.x -= constSpeed;
        saturn.mesh.rotation.y += constSpeed;

        uranus.mesh.rotation.x -= constSpeed;
        uranus.mesh.rotation.y += constSpeed;

        neptune.mesh.rotation.x -= constSpeed;
        neptune.mesh.rotation.y += constSpeed;

        pluto.mesh.rotation.x -= constSpeed;
        pluto.mesh.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        sun.rotation.x -= constSpeed;
        sun.rotation.y -= constSpeed;

        mercury.obj.rotation.x -= constSpeed;
        mercury.obj.rotation.y -= constSpeed;

        venus.obj.rotation.x -= constSpeed;
        venus.obj.rotation.y -= constSpeed;

        earth.obj.rotation.x -= constSpeed;
        earth.obj.rotation.y -= constSpeed;

        mars.obj.rotation.x -= constSpeed;
        mars.obj.rotation.y -= constSpeed;

        jupiter.obj.rotation.x -= constSpeed;
        jupiter.obj.rotation.y -= constSpeed;

        saturn.obj.rotation.x -= constSpeed;
        saturn.obj.rotation.y -= constSpeed;

        uranus.obj.rotation.x -= constSpeed;
        uranus.obj.rotation.y -= constSpeed;

        neptune.obj.rotation.x -= constSpeed;
        neptune.obj.rotation.y -= constSpeed;

        pluto.obj.rotation.x -= constSpeed;
        pluto.obj.rotation.y -= constSpeed;

        // self

        mercury.mesh.rotation.x -= constSpeed;
        mercury.mesh.rotation.y -= constSpeed;

        venus.mesh.rotation.x -= constSpeed;
        venus.mesh.rotation.y -= constSpeed;

        earth.mesh.rotation.x -= constSpeed;
        earth.mesh.rotation.y -= constSpeed;

        mars.mesh.rotation.x -= constSpeed;
        mars.mesh.rotation.y -= constSpeed;

        jupiter.mesh.rotation.x -= constSpeed;
        jupiter.mesh.rotation.y -= constSpeed;

        saturn.mesh.rotation.x -= constSpeed;
        saturn.mesh.rotation.y -= constSpeed;

        uranus.mesh.rotation.x -= constSpeed;
        uranus.mesh.rotation.y -= constSpeed;

        neptune.mesh.rotation.x -= constSpeed;
        neptune.mesh.rotation.y -= constSpeed;

        pluto.mesh.rotation.x -= constSpeed;
        pluto.mesh.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        sun.rotation.x -= constSpeed;
        sun.rotation.y += constSpeed;

        mercury.obj.rotation.x -= constSpeed;
        mercury.obj.rotation.y += constSpeed;

        venus.obj.rotation.x -= constSpeed;
        venus.obj.rotation.y += constSpeed;

        earth.obj.rotation.x -= constSpeed;
        earth.obj.rotation.y += constSpeed;

        mars.obj.rotation.x -= constSpeed;
        mars.obj.rotation.y += constSpeed;

        jupiter.obj.rotation.x -= constSpeed;
        jupiter.obj.rotation.y += constSpeed;

        saturn.obj.rotation.x -= constSpeed;
        saturn.obj.rotation.y += constSpeed;

        uranus.obj.rotation.x -= constSpeed;
        uranus.obj.rotation.y += constSpeed;

        neptune.obj.rotation.x -= constSpeed;
        neptune.obj.rotation.y += constSpeed;

        pluto.obj.rotation.x -= constSpeed;
        pluto.obj.rotation.y += constSpeed;

        // self

        mercury.mesh.rotation.x -= constSpeed;
        mercury.mesh.rotation.y += constSpeed;

        venus.mesh.rotation.x -= constSpeed;
        venus.mesh.rotation.y += constSpeed;

        earth.mesh.rotation.x -= constSpeed;
        earth.mesh.rotation.y += constSpeed;

        mars.mesh.rotation.x -= constSpeed;
        mars.mesh.rotation.y += constSpeed;

        jupiter.mesh.rotation.x -= constSpeed;
        jupiter.mesh.rotation.y += constSpeed;

        saturn.mesh.rotation.x -= constSpeed;
        saturn.mesh.rotation.y += constSpeed;

        uranus.mesh.rotation.x -= constSpeed;
        uranus.mesh.rotation.y += constSpeed;

        neptune.mesh.rotation.x -= constSpeed;
        neptune.mesh.rotation.y += constSpeed;

        pluto.mesh.rotation.x -= constSpeed;
        pluto.mesh.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        sun.rotation.x -= constSpeed;
        sun.rotation.y -= constSpeed;

        mercury.obj.rotation.x -= constSpeed;
        mercury.obj.rotation.y -= constSpeed;

        venus.obj.rotation.x -= constSpeed;
        venus.obj.rotation.y -= constSpeed;

        earth.obj.rotation.x -= constSpeed;
        earth.obj.rotation.y -= constSpeed;

        mars.obj.rotation.x -= constSpeed;
        mars.obj.rotation.y -= constSpeed;

        jupiter.obj.rotation.x -= constSpeed;
        jupiter.obj.rotation.y -= constSpeed;

        saturn.obj.rotation.x -= constSpeed;
        saturn.obj.rotation.y -= constSpeed;

        uranus.obj.rotation.x -= constSpeed;
        uranus.obj.rotation.y -= constSpeed;

        neptune.obj.rotation.x -= constSpeed;
        neptune.obj.rotation.y -= constSpeed;

        pluto.obj.rotation.x -= constSpeed;
        pluto.obj.rotation.y -= constSpeed;

        // self

        mercury.mesh.rotation.x -= constSpeed;
        mercury.mesh.rotation.y -= constSpeed;

        venus.mesh.rotation.x -= constSpeed;
        venus.mesh.rotation.y -= constSpeed;

        earth.mesh.rotation.x -= constSpeed;
        earth.mesh.rotation.y -= constSpeed;

        mars.mesh.rotation.x -= constSpeed;
        mars.mesh.rotation.y -= constSpeed;

        jupiter.mesh.rotation.x -= constSpeed;
        jupiter.mesh.rotation.y -= constSpeed;

        saturn.mesh.rotation.x -= constSpeed;
        saturn.mesh.rotation.y -= constSpeed;

        uranus.mesh.rotation.x -= constSpeed;
        uranus.mesh.rotation.y -= constSpeed;

        neptune.mesh.rotation.x -= constSpeed;
        neptune.mesh.rotation.y -= constSpeed;

        pluto.mesh.rotation.x -= constSpeed;
        pluto.mesh.rotation.y -= constSpeed;
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://wallpaperaccess.com/full/3520511.png"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://c0.wallpaperflare.com/preview/95/156/837/abstract-art-atom-background.jpg"
              alt="Face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://img.freepik.com/premium-vector/cyber-security-concept-with-hud-element-blue-tone-background_99087-130.jpg"
              alt="Face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://media.istockphoto.com/id/1358013032/photo/web-development-concept.webp?b=1&s=170667a&w=0&k=20&c=aAR7goX4e7jDiUfx1SNA7lD04WldUv6okpifv80xGcw="
              alt="Face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://contentstatic.techgig.com/thumb/msid-90442958,width-460,resizemode-4/Learn-web-development-from-MIT-Michigan-University-and-more.jpg?18600"
              alt="Face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://cdn.pixabay.com/photo/2019/01/07/03/23/cloud-3918395_960_720.png"
              alt="Face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <FaJava />
          <SiSpring />
          <SiMysql />
          <SiAngular />
          <SiHibernate />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">YOUTUBE VIDEOS</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
