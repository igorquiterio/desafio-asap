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
  ReferenceField,
  SelectInput,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import { SimpleCustomActions } from "../../components/CustomActions";

const postRowStyle = (record, index) => ({
  backgroundColor: record.nb_views >= 500 ? "#303030" : "#30303099",
});
const rowStyle = (record, index) => ({
  backgroundColor: index % 2 ? "#30303090" : "#303030",
});

const PolicyFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const PolicyList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List
      {...props}
      title="Apólices"
      bulkActionButtons={false}
      actions={<SimpleCustomActions />}
      filters={<PolicyFilter />}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.bem}
          secondaryText={(record) => record.numero}
          linkType="show"
          rowStyle={postRowStyle}
          rowStyle={rowStyle}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="numero" />
          <ReferenceField label="Cliente" source="idClient" reference="clients">
            <TextField source="nome" />
          </ReferenceField>
          <TextField source="bem" />
          <TextField source="garantia" />
        </Datagrid>
      )}
    </List>
  );
};
