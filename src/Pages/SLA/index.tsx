import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContratoDeHoras from './ContratoDeHoras';
import Deadline from './Deadline';
import Priorização from './Priorização';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SLA() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
        <div>
            <h1>SLA - Acordo de Nível de Serviço</h1>
        </div>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Contrato de Horas" {...a11yProps(0)} />
          <Tab label="Inicialização" {...a11yProps(1)} />
          <Tab label="Deadline" {...a11yProps(2)} />
          <Tab label="Priorização" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Defina a quantidade de horas em contrato para o SLA.
        <ContratoDeHoras/>
        <br/>
        <hr/>
        Ainda não existe contratos criados
      </TabPanel>
      <TabPanel value={value} index={1}>
        Defina regras para quando a primeira resposta deve ser dada ao cliente.
      </TabPanel>
      <TabPanel value={value} index={2}>
        Defina uma regra para definir quando o chamado deve receber uma resolução.
        <Deadline/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Defina a prioridade padrão para um chamado ao ele ser criado.
        <Priorização/>
      </TabPanel>
    </Box>
    </div>
  );
}