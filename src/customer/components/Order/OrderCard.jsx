import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl '>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[6rem] h-[6rem] object-cover object-top' src="/home_images/homesectionCard/arduino-nano-v3.jpg" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className='mb-2 whiteSpace-nowrap' >Arduino Nano V3 SMT </p>
                            <p className='opacity-50 text-xs font-semibold'>Type: SMT</p>
                            <p className='opacity-50 text-xs font-semibold'>Board: Nano</p>
                        </div>

                    </div>

                </Grid>
                <Grid item xs={2}>
                    <p>₹400</p>

                </Grid>
                <Grid item xs={4}>
                    {true && 
                    <div>
                     <p> <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm' /> 
                     <span>Delivered On April 30</span>
                     </p>
                     <p className='text-xs'>Your Item Has Been Delivered</p>
                     </div>}

                    {false &&  
                     <p>
                     <span>Expected Delivery On April 30</span>
                     </p>}                </Grid>

            </Grid>
        </div>
    );
}

export default OrderCard;
