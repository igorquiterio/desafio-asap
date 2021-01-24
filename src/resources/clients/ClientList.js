import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
} from "react-admin";
import { SimpleCustomActions } from "../../components/CustomActions";

const AddresField = ({ record = {} }) => (
  <span>
    {record.endereco},{record.numero} -{record.cidade}/{record.estado}
  </span>
);

const ClientsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const ClientList = (props) => (
  <List
    {...props}
    title="Clientes"
    actions={<SimpleCustomActions />}
    filters={<ClientsFilter />}
  >
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <TextField source="cpf" />
      <TextField source="data_nasc" />
      <TextField source="email" />
      <TextField source="celular" />
      <AddresField label="Endereço" source="endereco" />
      <TextField source="cep" />
      <EditButton label="" />
    </Datagrid>
  </List>
);
