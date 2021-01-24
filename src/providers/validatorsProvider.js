import { email, regex } from "react-admin";
import { isValid } from "date-fns";

const verificaData = (value, message) => {
  const [dd, mm, yyyy] = value.split("/");
  const result = isValid(new Date(`${yyyy}-${mm}-${dd}`));
  return result ? undefined : message;
};

const required = (message = "Campo Obrigatório") => (value) =>
  value ? undefined : message;

const maxLength = (max, message = " Excede limite de caracteres") => (value) =>
  value && value.length > max ? message : undefined;

const date = (message = "Data inválida") => (value) =>
  value.length === 10 ? verificaData(value, message) : undefined;

const minLength = (
  min,
  message = " Quantidade de caracteres menor do que o esperado "
) => (value) => (value && value.length < min ? message : undefined);

const expectThisLen = (len, message = "Quantidade de caracteres inválida") => (
  value
) => (value.length === len ? undefined : message);

export const validateRequired = [required()];

export const validatePhone = [
  required(),
  maxLength(14),
  minLength(13),
  regex(/^[\d\-\(\)]{13,14}$/, "Telefone inválido"),
];

export const validateCpf = [
  required(),
  expectThisLen(14),
  regex(/^[\d\.\/\-]{14}$/, "CPF inválido"),
];

export const validateEmail = [email("Email inválido")];

export const validateDate = [required(), minLength(10), maxLength(10), date()];

export const validadeSiglaEstado = [maxLength(2)];
