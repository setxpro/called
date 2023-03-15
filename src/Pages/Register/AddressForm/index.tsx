import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  middleName: string;
  setMiddlename: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  assignments: string;
  setAssignments: React.Dispatch<React.SetStateAction<string>>;
}

export default function AddressForm({
  name,
  setName,
  middleName,
  setMiddlename,
  email,
  setEmail,
  assignments,
  setPhone,
  phone,
  setAssignments
}: Props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Usuário
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            fullWidth
            variant="standard"
            value={middleName}
            onChange={(e) => setMiddlename(e.target.value)}
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
        <Grid item xs={12}>
          <TextField
            id="assignment"
            name="assignment"
            label="Atribuição"
            fullWidth
            variant="standard"
            value={assignments}
            onChange={(e) => setAssignments(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Telefone"
            fullWidth
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
