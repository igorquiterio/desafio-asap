import * as React from "react";
import { BackButtonOnlyActions } from "../../components/CustomActions";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  RichTextField,
} from "react-admin";

const PolicyTitle = ({ record }) => {
  return <span>Apólice: {record ? `${record.numero}` : ""}</span>;
};

export const PolicyShow = (props) => (
  <Show {...props} actions={<BackButtonOnlyActions />} title={<PolicyTitle />}>
    <SimpleShowLayout>
      <TextField source="numero" />
      <ReferenceField label="Cliente" source="idClient" reference="clients">
        <TextField source="nome" />
      </ReferenceField>
      <TextField source="bem" />
      <TextField source="garantia" />
      <RichTextField source="diretos" />
      <RichTextField source="deveres" />
    </SimpleShowLayout>
  </Show>
);
