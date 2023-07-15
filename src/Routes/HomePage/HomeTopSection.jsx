import { Stack, Typography} from "@mui/material";
import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
// import { Carousel } from "react-responsive-carousel";
// import { makeStyles } from "@mui/styles/makeStyles";




export default function HomeTopSection (){
    // const useStyles = makeStyles(() => ({
    //     carouselContainer: {
    //       maxWidth: 600,
    //       margin: "0 auto",
    //     },
    //     carouselImage: {
    //       maxHeight: 400,
    //     },
    //   }));
    //   const classes = useStyles();
      
    return (
        <Stack direction={'column'} alignItems={'center'}>
            
                <Typography variant={"h2"}>Центр супраментальної психології</Typography>
                <Typography variant={"subtitle1"}>Людина - це Всесвіт. І в ньому як у Всесвіті є все! Почни розвиток з себе.</Typography>
                
                
        </Stack>
    )
}