import React,{useState} from 'react'
import { Box,Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { typo_style,edit_input_style,edit_details } from './profileCompStyle'
import { useAppContext } from '../../Context/Context';


export default function ProfileDetailBox(props) {
    const {isSign,handleSignUp} = useAppContext();
    const [isInfo,setIsInfo] = useState(false);
    const [detail,setIsDetail] = useState('');
    const handleInfoEdit = async(e) => {
        e.preventDefault();
        if(isInfo){
            props.onSave(detail,props.assignTo);
            const apiURL = process.env.REACT_APP_BACKEND_URL + `/user/${props.assignTo.toLowerCase()}/${isSign._id}`
            try{
                const response = await fetch(apiURL, {
                    method: 'PATCH', // Assuming your backend supports PATCH method for updates
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        [props.assignTo.toLowerCase()]: detail,
                        
                        // Include any other data you need to send to the server
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to update detail');
                }
                const responseData = await response.json();
                const userData = responseData.user;
                const usertoken = responseData.token;
                localStorage.setItem('userData', JSON.stringify({user:userData,token:usertoken}));
          
                handleSignUp(userData);
            }catch(err){
                console.error(err);
            }
        }
        setIsInfo(!isInfo);
    }
    const handleOnChange = (e) =>{
        setIsDetail(e.target.value);
    }

  return (
    <Box sx={typo_style}>
            <Typography variant='h5' color='#64ffda'>{props.assignTo} :</Typography>
            {isInfo ? 
            <input onChange={handleOnChange} value={detail} style={edit_input_style} type="text"  /> : 
            <Typography variant='h5' color='#fff' sx={{ marginLeft: 2} }>
                {props.info}
            </Typography>}
            {isInfo?
            <CheckIcon onClick={handleInfoEdit}   sx={edit_details}/>:
            <EditIcon onClick={handleInfoEdit}  sx={edit_details}/>}
        </Box>
  )
}