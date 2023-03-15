import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { GetThemeContext } from "../../../Contexts/Theme";

const ToggleTheme: React.FC = () => {

  const { toggleTheme, theme} = React.useContext(GetThemeContext)

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4, 
          "& .MuiSvgIcon-root": {
            cursor: 'pointer'
          } 
        }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Alterar Tema
          </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6} onClick={toggleTheme}>
              {theme.title === "light" && (
                <div className="light-btn">
                  Dark
                  <NightsStayIcon className="light"/>
                </div>
              )}
              {theme.title === "dark" && (
                <div className="dark-btn">
                  Light <WbSunnyIcon className="dark"/>
                </div>
              )}            
            </Grid>
            </Grid>
        </React.Fragment>
      </Paper>
    </Container>
    )
}

export default ToggleTheme;