import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import { AuthContext } from "../../../Contexts/Auth";

import * as C from "./styles";

const EditAvatar: React.FC = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <C.View>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Atualizar Avatar
            </Typography>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", alignItems: "center", gap: "2rem" }}
              >
                <img src={user?.avatar} alt={user?.name} />
                <div className="area-upload">
                  <MoveToInboxIcon className="btn-upload" />
                  <input type="file" />
                </div>
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" color="success" sx={{ mt: 3, ml: 1 }}>
                Atualizar
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </C.View>
  );
};

export default EditAvatar;
