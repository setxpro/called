import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/setxpro">
        Patrick Anjos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const steps = ['Usuário', 'Empresa', 'Dados'];
const steps = ["Usuário"];

// function getStepContent(step: number) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

const theme = createTheme();

export default function Register() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [name, setName] = React.useState("");
  const [middleName, setMiddlename] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [assignments, setAssignments] = React.useState("");

  const navigate = useNavigate()

  const handleNext = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post('http://localhost:3333/api/user/create-user', {
      name,
      middleName,
      email,
      phone,
      assignments,
    })
      setActiveStep(activeStep + 1);
      return data;

    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BAGAGGIO
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Solicitação de Registro
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Sucesso
              </Typography>
              <Typography variant="subtitle1">
                <strong>{name} {middleName}</strong>, solicitação enviada com sucesso
                <br />
                Logo iremos enviar para o email{" "}
                <strong>{email}</strong> o login e senha para acessar o
                sistema.
              </Typography>
              <Button
                variant="contained"
                color="info"
                onClick={() => navigate('/login')}
                sx={{ mt: 3, ml: 1 }}
              >
                Voltar para a página de login
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* {getStepContent(activeStep)} */}
              {
                <AddressForm
                  name={name}
                  setName={setName}
                  middleName={middleName}
                  setMiddlename={setMiddlename}
                  email={email}
                  setEmail={setEmail}
                  phone={phone}
                  setPhone={setPhone}
                  assignments={assignments}
                  setAssignments={setAssignments}
                />
              }
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  color="info"
                  onClick={handleBack}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Fazer Login
                </Button>
                {activeStep !== 0 && (
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Enviar solicitação"
                    : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
