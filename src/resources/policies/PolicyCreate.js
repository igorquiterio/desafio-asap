import * as React from "react";
import {
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  Create,
  NumberInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
export const PolicyCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Cliente" source="idClient" reference="clients">
        <SelectInput optionText="nome" />
      </ReferenceInput>
      <TextInput source="bem" />
      <TextInput source="garantia" />
      <NumberInput source="numero" />
      <RichTextInput source="diretos" />
      <RichTextInput source="deveres" />
    </SimpleForm>
  </Create>
);
