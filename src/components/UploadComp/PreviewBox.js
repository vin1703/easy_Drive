import React, { useEffect, useRef,useState} from 'react'
import { Box, Typography } from '@mui/material'
import { preBox_style,input_style } from './uploadCompStyle'
export default function PreviewBox(props) {
    const [file,setFile] = useState();
    const [previewUrl,setPreviewUrl] = useState();
    const filePickerRef = useRef();
    const ImageClickHandler = () =>{
        filePickerRef.current.click();
    }

    const ImageChangeHandler = (e) =>{
        if(e.target.files || e.target.files.length === 1){
          const pickedFile = e.target.files[0];
          setFile(pickedFile);
        }

    }
    useEffect(()=>{
      if(!file){
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () =>{
        setPreviewUrl(fileReader.result);
        props.valid(file,props.comp);
      };
      fileReader.readAsDataURL(file);
    },[file,props])
  return (
    <>
    <input ref={filePickerRef} style={input_style} onChange={ImageChangeHandler} type="file" accept='.jpg,.png,.jpeg' />
    <Box sx={preBox_style}>
      {previewUrl ? <img onClick={ImageClickHandler} style={{"height":"100%","width":"100%","objectFit":"contain"}} src={previewUrl} alt="" />:
      <Typography sx={{cursor:"pointer",fontSize:"40px"}} onClick={ImageClickHandler} color='#fff'>+</Typography>}
    </Box>
    </>
    
  )
}