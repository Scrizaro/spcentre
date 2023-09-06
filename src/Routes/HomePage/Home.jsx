import React from "react";
import HomeTopSection from "./HomeTopSection";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function Home(){
    return (
        <>
        {/* <HomeTopSection /> */}
        <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
             Центр супраментальної психології
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Людина - це Всесвіт. І в ньому як у Всесвіті є все! Почни розвиток з себе.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href='/user'>Увійти в особистий кабінет</Button>
              <Button variant="outlined" href='/courses'>Подивитися курси</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Курс духовної психології
                    </Typography>
                    <Typography>
                    Базовий курс навчання, спрямований формування цілісного світогляду,
духовний розвиток людини, вдосконалення власної долі, долі близьких.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Детальніше</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Курс Супраментальної психології
                    </Typography>
                    <Typography>
                    У такому контексті «Всесвіт – Людина» є внутрішній і зовнішній світ: ці світи взаємопов’язані та взаємопізнавані. Внутрішній світ має прояви на різних рівнях. Принцип багатовимірності простору – один із основних принципів супраментальної психології.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Детальніше</Button>
                
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Курс Жіночність
                    </Typography>
                    <Typography>
                    Жіночність - стан душі, особливий вид енергії, лучиста краса та світло, які притягують людей, події та почуття в життя жінки.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Детальніше</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
        </>
    );
}