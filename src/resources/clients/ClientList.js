import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
  SimpleList,
  DateField,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import { SimpleCustomActions } from "../../components/CustomActions";

const AddresField = ({ record = {} }) => (
  <span>
    {record.endereco},{record.numero} {record.complemento} - {record.cidade}/
    {record.estado}
  </span>
);

const ClientsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

const postRowStyle = (record, index) => ({
  backgroundColor: record.nb_views >= 500 ? "#303030" : "#30303099",
});
const rowStyle = (record, index) => ({
  backgroundColor: index % 2 ? "#30303090" : "#303030",
});

export const ClientList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      title="Clientes"
      actions={<SimpleCustomActions />}
      filters={<ClientsFilter />}
      bulkActionButtons={false}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nome}
          secondaryText={(record) => record.email}
          linkType="edit"
          rowStyle={postRowStyle}
          rowStyle={rowStyle}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="nome" />
          <TextField source="cpf" />
          <TextField source="data_nasc" />
          <TextField source="email" />
          <TextField source="celular" label="Telefone" />
          <AddresField label="Endereço" source="endereco" />
          <TextField source="cep" />
          <EditButton label="" />
        </Datagrid>
      )}
    </List>
  );
};
