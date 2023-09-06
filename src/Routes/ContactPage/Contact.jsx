import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactsPage = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Контакты
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Мобильные телефоны
            </Typography>
            <Typography variant="body1">
              <PhoneIcon sx={{ mr: 1 }} />
              +38 (067) 212-20-19
            </Typography>
            <Typography variant="body1">
              <PhoneIcon sx={{ mr: 1 }} />
              +38 (097) 136-78-43
            </Typography>
            <Typography variant="body1">
              <PhoneIcon sx={{ mr: 1 }} />
              +38 (067) 944-72-50
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Адреса
            </Typography>
            <Typography variant="body1">
              <LocationOnIcon sx={{ mr: 1 }} />
              м. Київ Проспект Соборності 15, офіс 206
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactsPage;
