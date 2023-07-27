
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import img from "./main-img.jpg";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src={img} className="avatar" alt="mainPhoto" />;
}
function Intro() {
  return (
    <div className="data">
      <h1>Alaa.H</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
    </div>
  );
}

function SkillList() {
  const data = skills;
  return (
    <div className="skill-list">
      <ul>
        {data.map((skill) => (
          <Skill skillObj={skill} kay={skill.skill} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skillObj }) {
  const color = { backgroundColor: skillObj.color };
  return (
    <li className="skill " style={color}>
      <p>{skillObj.skill}</p>
      <p>
        {skillObj.level === "advanced"
          ? "♕ "
          : skillObj.level === "intermediate"
          ? "♔"
          : skillObj.level === "beginner"
          ? " ♖"
          : null}
      </p>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
