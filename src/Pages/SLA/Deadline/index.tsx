import React from 'react';

import * as C from './styles';

const Deadline = () => {
  return (
    <C.Container>
        <C.ContentTopRule>
            <span>Regra</span>
            <C.GropField>
                <C.Group>
                    <span>Departamento:</span>
                    <select>
                        <option>SISTEMAS TI</option>
                        <option>SISTEMAS TI</option>
                        <option>SISTEMAS TI</option>
                    </select>
                </C.Group>
                <C.Group>
                    <span>Categotia:</span>
                    <select>
                        <option>SISTEMAS TI</option>
                        <option>SISTEMAS TI</option>
                        <option>SISTEMAS TI</option>
                    </select>
                </C.Group>
                <C.Group>
                    <span>Prioridade:</span>
                    <select>
                        <option>SISTEMAS TI</option>
                        <option>SISTEMAS TI</option>
                        <option>SISTEMAS TI</option>
                    </select>
                </C.Group>
            </C.GropField>
        </C.ContentTopRule>
        <C.ContentTopApplication>
            <span>Aplicar</span>
            <C.GroupDeadline>
                <C.Group>
                    <span>Deadline:</span>
                    <input type="number" name="hours" placeholder="Horas" />
                    <input type="number" name="minutes" placeholder="Minutos" />
                </C.Group>
                <C.Group>
                    <span>Pausar ao responder:</span>
                    <select>
                        <option>Sim</option>
                        <option>Não</option>
                    </select>
                </C.Group>
                <C.Group>
                    <span>Turno de SLA:</span>
                    <select>
                        <option>Turno Padrão de SLA</option>
                        <option>Mão</option>
                    </select>
                </C.Group>
            </C.GroupDeadline>
        </C.ContentTopApplication>
        <C.ContentMiddleCheckBox>
            <C.CheckBoxContent><input type="checkbox"/> Enviar email ao alcançar nível crítico (50% à 70% do deadline)</C.CheckBoxContent>
            <C.CheckBoxContent><input type="checkbox"/> Enviar email ao alcançar nível urgente (70% à 100% do deadline)</C.CheckBoxContent>
            <C.CheckBoxContent><input type="checkbox"/> Enviar email ao deadline expirar</C.CheckBoxContent>
        </C.ContentMiddleCheckBox>
        <C.ContentBottomField>
            <span>Endereço(s) de email de notificações</span>
            <input type="text" name="email" placeholder="Email"/>
        </C.ContentBottomField>
        <C.ContentBottomButtonCreate>
            <button>Criar Regra</button>
        </C.ContentBottomButtonCreate>
    </C.Container>
  );
}

export default Deadline;