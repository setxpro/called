import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/Auth";

const AlterPassword: React.FC = () => {
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
  
    const { user } = React.useContext(AuthContext)
  
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
  
      try {
          const { data } = await axios.patch(`http://localhost:3333/api/user/update-password/${user?._id}`, {
              password,
              confirmPassword: passwordConfirm,
          })
          toast.success(data.message)
          setPassword("")
          setPasswordConfirm("")
          return data;
      } catch (error: any) {
          toast.error(error.response.data.message)
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
            Atualizar usuário
          </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                type="password"
                name="password"
                label="Senha"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                label="Confirmar nova senha"
                fullWidth
                variant="standard"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>
           
          </Grid>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="success" sx={{ mt: 3, ml: 1 }} onClick={handleSubmit}>
              Atualizar
            </Button>
          </Box>
        </React.Fragment>
      </Paper>
    </Container>
  );
}

export default AlterPassword;