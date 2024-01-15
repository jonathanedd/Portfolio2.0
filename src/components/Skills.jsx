import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillChart = ({
  label,
  data,
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
}) => {
  const skillsData = {
    labels: label,
    datasets: [
      {
        data,
        backgroundColor,
        hoverBackgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: 80,
    radius: 100,
    legend: {
      display: false,
    },
  };

  return (
    <Graphical>
      <Doughnut data={skillsData} options={options} />
    </Graphical>
  );
};

const SkillsCircular = () => {
  const skills = [
    {
      label: ["JavaScript 80%"],
      data: [80, 20],
      backgroundColor: ["#F99417", "#ecf0f1"],
      hoverBackgroundColor: ["#750E21", "#bdc3c7"],
      borderColor: ["#000000"],
    },

    {
      label: ["React 80%"],
      data: [80, 20],
      backgroundColor: ["#711DB0", "#ecf0f1"],
      hoverBackgroundColor: ["#750E21", "#bdc3c7"],
      borderColor: ["#000000"],
    },
    {
      label: ["Node 50%"],
      data: [50, 50],
      backgroundColor: ["#005B41", "#ecf0f1"],
      hoverBackgroundColor: ["#750E21", "#bdc3c7"],
      borderColor: ["#000000"],
    },
    {
      label: ["CSS 80%"],
      data: [80, 20],
      backgroundColor: ["#3498db", "#ecf0f1"],
      hoverBackgroundColor: ["#750E21", "#bdc3c7"],
      borderColor: ["#000000"],
    },
  ];

  return (
    <>
      <TopNumber id="skills">03</TopNumber>
      <TitleSkills>Skills</TitleSkills>
      <SkillContainer>
        {skills.map((skill, index) => (
          <SkillChart key={index} {...skill} />
        ))}
      </SkillContainer>
    </>
  );
};

export default SkillsCircular;

const TopNumber = styled.h1`
  width: 100%;
  text-align: end;
  font-size: 2.5rem;
  opacity: 50%;
  color: ${(props) =>
    props.isDarkMode ? props.theme.number : props.theme.number};
`;

const TitleSkills = styled.h1`
  display: flex;
  color: ${(props) =>
    props.isDarkMode ? props.theme.title : props.theme.title};
  border-bottom: #750e21 1px solid;
  width: max-content;
  margin: auto;
`;

const SkillContainer = styled.div`
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  @media all and (max-width: 480px) {
    flex-direction: column;
    height: max-content;
  }
`;

const Graphical = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.card : props.theme.card};
`;
