import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";


const ForgetPassword: React.FC = () => {
    const [login, setLogin] = React.useState("")
    const [email, setEmail] = React.useState("")

    const navigate = useNavigate();


    const handleSubmit = async () => {

        try {
            const { data } = await axios.post('http://localhost:3333/api/auth/forget-pass', {
                login, email
            })

            toast.success(data.message);
            navigate('/login')
            return data;

        } catch (error:any) {
            toast.error(error.response.data.message);
        }
    }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper
      variant="outlined"
      sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
    >
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Esqueci minha senha
        </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="login"
              name="login"
              label="Login"
              fullWidth
              variant="standard"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="E-mail"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
         
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" color="inherit" sx={{ mt: 3, ml: 1 }} onClick={() => navigate(-1)}>Voltar</Button>
          <Button variant="contained" color="success" sx={{ mt: 3, ml: 1 }} onClick={handleSubmit}>
            Enviar
          </Button>
        </Box>
       
      </React.Fragment>
    </Paper>
  </Container>
  );
}

export default ForgetPassword;