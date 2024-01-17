import "../Hero/Hero.css";

import { LinearProgress } from "@mui/material";
import { CircularProgress } from "@mui/material";
const box = [
  {
    id: 1,
    name: "English",
    dess: "English CourseProgress",
    level: "4/26",
  },

  {
    id: 2,
    name: "Logical Reasoning",
    dess: "Logical Reasoning Course Progress",
    level: "20/20",
  },

  {
    id: 3,
    name: "Graphic Design",
    dess: "Graphic Design Course Progress",
    level: "6/10",
  },

  {
    id: 4,
    name: "GRE",
    dess: "GRE Course Progress",
    level: "8/10",
  },
];

const Hero = () => {
  return (
    <>
      <div className="progress">
        {box.map((item, index) => (
          <div key={item.id} className="box">
            <p className="name">{item.name}</p>
            <div className="boxinside">
              <p>{item.dess}</p>
              <CircularProgress
                variant="determinate"
                value={
                  index === 0 || index === 2
                    ? 65
                    : index === 1
                    ? 100
                    : index === 3
                    ? 85
                    : 0
                }
                sx={{
                  color: index === 0 || index == 2 ? "orange" : "blue",
                }}
              />
            </div>
            <p className="name">Lessons</p>
            <div className="linebar">
              <LinearProgress
              sx={{
                width :'123px',
                height : '3px',
                borderRadius : '5px'
              }}
                variant="determinate"
                value={
                  index === 0
                    ? 40
                    : index === 1
                    ? 100
                    : index === 2
                    ? 60
                    : index === 3
                    ? 80
                    : 0
                }
              />
              <p>{item.level}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
