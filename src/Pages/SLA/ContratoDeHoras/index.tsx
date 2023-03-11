import React from 'react';

import * as C from './styles';

const ContratoDeHoras: React.FC = () => {
  return (
    <C.Container>
        <C.ContentTop>
            <div>Regra</div>
            <C.ContainerItemsTop>
                <C.Item01>
                    <span>Departamento</span>
                    <select>
                        <option>TI SISTEMAS</option>
                        <option>TI SISTEMAS</option>
                        <option>TI SISTEMAS</option>
                    </select>
                </C.Item01>
                <C.Item02>
                    <span>Categoria</span>
                    <select>
                        <option>TI SISTEMAS</option>
                        <option>TI SISTEMAS</option>
                        <option>TI SISTEMAS</option>
                    </select>
                </C.Item02>
            </C.ContainerItemsTop>
        </C.ContentTop>
        <C.ContentBottom>
        <div>Aplicar</div>
            <C.ContainerItemsBottom>
                <span>Horas Contratadas</span>
                <C.FieldsArea>
                    <input type="number" name="hours" placeholder="Horas" />
                    <input type="number" name="minutes" placeholder="Minutos" />
                    <button>Criar Regra</button>
                </C.FieldsArea>
            </C.ContainerItemsBottom>
        </C.ContentBottom>
    </C.Container>
  );
}

export default ContratoDeHoras;