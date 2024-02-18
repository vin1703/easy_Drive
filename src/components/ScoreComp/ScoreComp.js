import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import Status from './Status';
import ScoreBox from './ScoreBox';
import { useAppContext } from '../../Context/Context';
import { main_box, main_score_box, license_box,visitprofile_box,profileStyle } from './scoreCompStyle';
import { jsPDF } from "jspdf";

export default function ScoreComp() {
  const { score,isSign} = useAppContext();
  const cutoff = {
    greeting: "Feel For You",
    status: "Failed",
    des: "Unfortunately, you did not pass the Learner's Driving Test this time.",
    hope: "Prepare well for the next time"
  };

  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a6' // Set the page size to A7
    });

    // Set up styles
    doc.setFontSize(15); // Increase font size
    doc.setTextColor('#333');

    // Add header
    doc.text("Learning License", 70, 20, { align: "center" });

    // Add details
    const userDetails = {
      name: isSign.name,
      address: isSign.address,
      photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", // Placeholder URL
      issueDate: new Date().toLocaleDateString(),
      validity: "6 Months" // Placeholder validity
    };

    const details = [
      { label: "Name:", value: userDetails.name },
      { label: "Address:", value: userDetails.address },
      { label: "Issue Date:", value: userDetails.issueDate },
      { label: "Validity:", value: userDetails.validity }
    ];

    details.forEach(({ label, value }, index) => {
      const yPos = 50 + (index * 10); // Increase the Y position
      doc.text(label + " " + value, 75, yPos);
    });

    // Add photo
    doc.addImage(userDetails.photoURL, 'JPEG', 30, 40, 40, 40); // Increase image size

    // Add signature field
    doc.text("Signature:", 35, 95);

    // Add footer
    doc.text("This is a temporary Driving license.", 70, 30, { align: "center" });

    // Save the document
    doc.save("learning_license.pdf");
  };

  return (
    <Box sx={main_box}>
      <Box sx={visitprofile_box}>
        <Link to={`/profile/${isSign._id}`} style={profileStyle}>My Profile</Link>
      </Box>
      <Box sx={main_score_box}>
        <ScoreBox />
        <Status greet={cutoff.greeting} st={cutoff.status} />
      </Box>
      <Box sx={license_box}>
        <Typography color='#64ffda' variant='h5'>{score < 8 ? cutoff.des : "You have passed the Learner's Driving Test !"}</Typography>
        <Typography color='#fff' variant='h5'>{score < 8 ? cutoff.hope : "Download your temporary Driving License from here"}</Typography>
        {score>=8 && <Button onClick={handleDownload}>Temporary License</Button>}
      </Box>
      
    </Box>
  )
}
