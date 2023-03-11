import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import * as C from "./styles";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'departamento', headerName: 'Departamento', width: 130 },
    { field: 'categoria', headerName: 'Categoria', width: 130 },
    { field: 'prioridade', headerName: 'Prioridade', width: 130 },
    { field: 'tipoChamado', headerName: 'Tipo de Chamado', width: 130 },
    
  ];
  
  const rows = [
    { id: 1, departamento: 'TI SISTEMAS', categoria: 'TESTE', prioridade: 'máxima', tipoChamado: 'Manutenção' },
    { id: 2, departamento: 'TI SISTEMAS', categoria: 'TESTE', prioridade: 'máxima', tipoChamado: 'Manutenção' },
    { id: 3, departamento: 'TI SISTEMAS', categoria: 'TESTE', prioridade: 'máxima', tipoChamado: 'Manutenção' },
    { id: 4, departamento: 'TI SISTEMAS', categoria: 'TESTE', prioridade: 'máxima', tipoChamado: 'Manutenção' },
    { id: 5, departamento: 'TI SISTEMAS', categoria: 'TESTE', prioridade: 'máxima', tipoChamado: 'Manutenção' },
  ];


const Priorização: React.FC = () => {
  return (
    <C.Container>
      <C.TopArea>
      <C.ContentRulaAndCategory>
        <C.RuleTitle>
          <span>Regra</span>
        </C.RuleTitle>

        <C.Content>
            <C.DepartamentContent>
            <span>Departamento:</span>
            <select>
                <option>Todos</option>
                <option>Todos</option>
                <option>Todos</option>
            </select>
            </C.DepartamentContent>

            <C.CategoryContent>
            <span>Categoria:</span>
            <select>
                <option>Todos</option>
                <option>Todos</option>
                <option>Todos</option>
            </select>
            </C.CategoryContent>
        </C.Content>

      </C.ContentRulaAndCategory>
      <C.CalledTypes>
        <span>Tipos de Chamados:</span>
        <C.CheckedArea>
          <input type="checkbox" /> <span>Externos</span>
        </C.CheckedArea>
        <C.CheckedArea>
          <input type="checkbox" /> <span>Internos</span>
        </C.CheckedArea>
        <C.CheckedArea>
          <input type="checkbox" /> <span>Escalonados</span>
        </C.CheckedArea>
      </C.CalledTypes>
      <C.ApplicationArea>
        <C.TitleApplication>
          <span>Aplicar</span>
        </C.TitleApplication>
        <C.ApplicationAreaFieldButton>
          <span>Prioridade</span>
          <select>
            <option>Escolher Prioridade</option>
          </select>
          <button>Criar Regra</button>
        </C.ApplicationAreaFieldButton>
      </C.ApplicationArea>
      </C.TopArea>
      <C.TableArea>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection autoPageSize={true}
      />
      </C.TableArea>
    </C.Container>
  );
};

export default Priorização;
