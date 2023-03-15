import * as React from "react";
import Button from "@mui/material/Button";
import * as C from "./styles";
import { User } from "../../Types/UserTypes";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from 'react-toastify';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Users: React.FC = () => {

  const [users, setUsers] = React.useState<User[]>([])
  const [search, setSearch] = React.useState("")
  const navigate = useNavigate()

  React.useEffect(() => {

    (async () => {
      const { data } = await axios.get('http://localhost:3333/api/user/find-all-users');
      setUsers(data.users);
    })()

  }, [])


  const handleRemoveUser = async (id: string) => {

    let confirm = window.confirm();

    if (confirm) {
      const { data } = await axios.delete(`http://localhost:3333/api/user/delete-user/${id}`)
      let remove = users.filter(i => i._id !== id);
      setUsers(remove);
      toast.success("Usuário excluído com sucesso!")
      return data;
    }

    toast("Ação abortada com sucesso!")
  }

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
        isApproved: el.isApproved
      })

      
    })
    
    const filterRows: any = rows.filter((i:any) => i.firstName.startsWith(search))

  return (
    <C.Container>
      <C.ContentTitle>
        <h1>Usuários</h1>
        <C.FieldInput type="search" placeholder="Buscar usuário..." value={search} onChange={e => setSearch(e.target.value)}/>
        <Button
                variant="contained"
                color="success"
                onClick={() => navigate('/usuarios/create')}
              >
                Cadastrar
              </Button>
      </C.ContentTitle>
      <C.ContainerTable>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nome</StyledTableCell>
            <StyledTableCell align="center">Sobrenome</StyledTableCell>
            <StyledTableCell align="center">Atuação</StyledTableCell>
            <StyledTableCell align="center">Cargo</StyledTableCell>
            <StyledTableCell align="center">Login</StyledTableCell>
            <StyledTableCell align="center">E-mail</StyledTableCell>
            <StyledTableCell align="center">Telefone</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {filterRows.map((row:any, index: number) => {
            if(row.role !== "Developer")
            return (
              <StyledTableRow key={index}>
                <StyledTableCell align="center" component="th" scope="row">{row.firstName}</StyledTableCell>
                <StyledTableCell align="center">{row.middlename}</StyledTableCell>
                <StyledTableCell align="center">{row.assignments}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">{row.login}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="center" className={row.isApproved ? 'approved' : 'waiting'}><span>{row.isApproved ? 'Aprovado' : 'Pendente'}</span></StyledTableCell>
                <StyledTableCell align="center" sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Button variant="contained" color="info" onClick={() => navigate(`/usuarios/update/${row.id}`)}><BorderColorIcon/></Button>
                  <Button variant="contained" color="error" onClick={() => handleRemoveUser(row.id)}><RemoveCircleOutlineIcon/></Button>
                </StyledTableCell>
  
              </StyledTableRow>
            )
            return null;
          })}
        </TableBody>
      </Table>
    </TableContainer>
      </C.ContainerTable>
    </C.Container>
  );
};

export default Users;
