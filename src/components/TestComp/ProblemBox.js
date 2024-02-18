import React ,{useState} from 'react'
import { Box,Typography } from '@mui/material';
import { option_style,radio_button_style } from './testCompStyle';
import { useAppContext } from '../../Context/Context';
function ProblemBox(props) {
    const {handleScore} = useAppContext();
    const [selectedOption, setSelectedOption] = useState(null);
    // const [marks,setMarks]  = useState(0);
    const handleOptionChange = (event) => {
      
      if(event.target.value===props.correct){
        handleScore(1);
      }
      if(selectedOption===props.correct && event.target.value!==props.correct){
        handleScore(-1);
      }
      setSelectedOption(event.target.value);
    };
  
    return (
      <Box>
        <Typography sx={{marginLeft:"40px"}} variant='h4' color="#ccd6f6">{props.question}</Typography>
        <form style={radio_button_style}>
          {props.options.map((option, index) => (
            <div   key={index}>
              <label style={option_style}>
                <input
                  type="checkbox"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                {option}
              </label>
            </div>
          ))}
        </form>
      </Box>
    );
}

export default ProblemBox
