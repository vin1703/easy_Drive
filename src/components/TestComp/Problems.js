import { Box } from '@mui/material'
import React from 'react'
import { problem_style } from './testCompStyle'
import ProblemBox from './ProblemBox'
function Problems() {
  return (
    <Box sx={problem_style}>
      <ProblemBox question='1. What does a yellow traffic light indicate?' options={["Stop", "Proceed with caution", "Speed up", "Yield to oncoming traffic"]} correct='Proceed with caution'/>
      <ProblemBox question='2. What is the legal blood alcohol concentration (BAC) limit for driving in India?' options={['0.03%', '0.08%', '0.1%']} correct='0.03%'/>
      <ProblemBox question='3. What is the maximum speed limit for cars on urban roads in India?' options={['50 km/h', '40 km/h', '60 km/h']} correct='50 km/h'/>
      <ProblemBox question="4. What does this road sign indicate: ⛔️" options={['No overtaking', ' No entry', 'No parking']} correct=' No entry'/>
      <ProblemBox question="5. What should you do when approaching a railway crossing with flashing lights?" options={['Slow down and proceed', 'Stop and wait until the gate opens and the lights stop flashing', 'Speed up and pass quickly']} correct='Stop and wait until the gate opens and the lights stop flashing'/>
      <ProblemBox question="6. What is the purpose of an Anti-lock Braking System (ABS) in a car?" options={['To skid', 'To prevent skidding and maintain steering control during hard braking', 'To accelerate faster']} correct='To prevent skidding and maintain steering control during hard braking'/>
      <ProblemBox question= "7. What does this road sign indicate: 🚧" options={['Roadwork ahead', 'Slippery when wet', 'Hazardous road conditions ahead']} correct='Roadwork ahead'/>
      <ProblemBox question="8. What is the maximum speed limit for cars on expressways in India?" options={['40 km/h', '50 km/h', '60 km/h']} correct='50 km/h'/>
      <ProblemBox question="9. What should you do if your brakes fail while driving?" options={[' Apply the brakes firmly and shift to neutral', 'Turn off the engine and coast to a stop', ' Use the handbrake and steer off the road']} correct=' Use the handbrake and steer off the road'/>
      <ProblemBox question='10. What does this road sign indicate: 🚫' options={['honking', 'no for something', 'parking', 'making U-turns']} correct='no for something'/>
    </Box>
  )
}

export default Problems
