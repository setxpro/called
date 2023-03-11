import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import * as C from "./styles";
import { User } from "../../Types/UserTypes";
import axios from 'axios';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 140 },
  { field: "firstName", headerName: "Nome", width: 130 },
  { field: "middlename", headerName: "Sobrenome", width: 130 },
  { field: "assignments", headerName: "Setor", width: 130 },
  { field: "role", headerName: "Cargo", width: 100 },
  { field: "login", headerName: "Login", width: 150, },
  { field: "email", headerName: "Email", width: 240, },
  { field: "phone", headerName: "Telefone", width: 200, },
];


const Users: React.FC = () => {

  const [users, setUsers] = React.useState<User[]>([])


  React.useEffect(() => {

    (async () => {
      const { data } = await axios.get('http://localhost:3333/api/user/find-all-users');
      setUsers(data.users);
     
    })()

  }, [])

  let rows: any = [];

  users.forEach((el) => {
      rows.push({
        id: el._id,
        firstName: el.name,
        middlename: el.middleName,
        assignments: el.assignments,
        role: el.role,
        login: el.login,
        email: el.email,
        phone: el.phone,
      })
  })

  return (
    <C.Container>
      <C.ContentTitle>
        <h1>Usuários</h1>
      </C.ContentTitle>
      <C.ContainerTable>
        <DataGrid rows={rows} columns={columns} checkboxSelection autoPageSize={true}/>
      </C.ContainerTable>
    </C.Container>
  );
};

export default Users;
