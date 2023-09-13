import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API } from '../../constant';
import { setToken } from '../../helpers';
import { useAuthContext } from '../../features/context/AuthContext';
import { useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const { setUser } = useAuthContext();
    
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(" ");
    
      const onFinish = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        
        const values = {
          username: formData.get("username"),
          email: formData.get("email"),
          password: formData.get("password")
        }
        try {
          const response = await fetch(`${API}/auth/local/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
    
          const data = await response.json();
          if (data?.error) {
            throw data?.error;
          } else {
            console.log(data.jwt, 'JJJTV')
            setToken(data.jwt);
            setUser(data.user);
    
            console.log(`Welcome ${data.user.username}!`);
    
            navigate("/user", { replace: true });
          }
        } catch (error) {
          console.log(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  onSubmit={onFinish} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
        
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зареєструватися
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Вже є аккаунт?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}