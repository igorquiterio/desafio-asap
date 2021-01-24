import * as React from "react";
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";
import { BackButtonOnlyActions } from "../../components/CustomActions";
import { makeStyles } from "@material-ui/core/styles";
import {
  validateRequired,
  validateCpf,
  validateDate,
  validadeSiglaEstado,
  validateEmail,
} from "../../providers/validatorsProvider";
import { parseCpf, parseDate, parsePhone } from "../../providers/parseProvider";

export const useStyles = makeStyles({
  smallInput: { display: "inline-block", width: 200, marginRight: 5 },
  miniInput: { display: "inline-block", width: 100, marginRight: 5 },
});

const ClientTitle = ({ record }) => {
  return <span>Novo Cliente</span>;
};

export const ClienteCreate = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Create
      {...props}
      actions={<BackButtonOnlyActions />}
      title={<ClientTitle />}
    >
      <SimpleForm>
        <TextInput source="nome" validate={validateRequired} />
        <TextInput
          source="cpf"
          formClassName={classes.smallInput}
          format={parseCpf}
          validate={validateCpf}
        />
        <TextInput
          source="data_nasc"
          formClassName={classes.smallInput}
          parse={parseDate}
          validate={validateDate}
        />
        <TextInput
          source="celular"
          label="Telefone"
          formClassName={classes.smallInput}
          format={parsePhone}
        />
        <TextInput source="email" validate={validateEmail} />
        <TextInput source="endereco" />
        <NumberInput source="numero" formClassName={classes.miniInput} />
        <TextInput source="cidade" formClassName={classes.smallInput} />
        <TextInput
          source="estado"
          label="Estado(Sigla)"
          formClassName={classes.miniInput}
          validate={validadeSiglaEstado}
        />
        <TextInput source="cep" formClassName={classes.smallInput} />
        <TextInput source="complemento" />
      </SimpleForm>
    </Create>
  );
};
