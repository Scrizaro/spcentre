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
      const imgData = [{
        id: 1,
        url: "https://picsum.photos/600/400",
      },{
        id: 2,
        url: "https://picsum.photos/600/400",
      },{
        id: 3,
        url: "https://picsum.photos/600/400",
      }]
    return (
        <Stack direction={'column'} alignItems={'center'}>
            
                <Typography variant={"h2"}>Центр супраментальної психології</Typography>
                <Typography variant={"subtitle1"}>Людина - це Всесвіт. І в ньому як у Всесвіті є все! Почни розвиток з себе.</Typography>
                
                
        </Stack>
    )
}