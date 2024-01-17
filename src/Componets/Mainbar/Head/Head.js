import "../Head/Head.css";
import { LinearProgress } from "@mui/material";

import imge from "../Assets/Bar.png";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const data = [
  {
    id: 1,
    Name: "English",
    percentag: 78,
  },
  {
    id: 2,
    Name: "Logical Reasoning",
    percentag: 50,
  },

  {
    id: 3,
    Name: "CSEP",
    percentag: 60,
  },

  {
    id: 4,
    Name: "Portfolio",
    percentag: 0,
  },

  {
    id: 5,
    Name: "Resume",
    percentag: 0,
  },

  {
    id: 6,
    Name: "Interviews",
    percentag: 0,
  },

  {
    id: 7,
    Name: "Linked In Profile",
    percentag: 0,
  },
];

const fixedPercntage = 40;

const Head = () => {
  return (
    <>
      <div className="headcontainer">
        <div className="bar">
          {data.map((item, index) => (
            <div key={item.id} className="card">
              <LinearProgress
                style={{
                  width: "123px",
                  height: "25px",
                  backgroundColor: "grey",
                  borderRadius: "5px",
                }}
                variant="determinate"
                value={
                  index === 0 ? 78 : index === 1 ? 50 : index === 2 ? 60 : 0
                }

              />

              <p>{item.Name} </p>
              <p>{item.percentag}%</p>
            </div>

          ))}
          
        </div>

        <div className="barimge">
          <h2>Unemployable</h2>
          {/* <img src={imge} alt="" /> */}
          <Box sx={{ width: 750 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      
    </Box>
  {/* ); */}
          <h2>Employable</h2>
        </div>
      </div>
    </>
  );
};

export default Head;
