import ClientIcon from "@material-ui/icons/People";

import { ListGuesser, EditGuesser } from "react-admin";
import { ClientEdit } from "./ClientEdit";
import { ClientList } from "./ClientList";
import { ClienteCreate } from "./ClienteCreate";

export default {
  list: ClientList,
  edit: ClientEdit,
  create: ClienteCreate,
  icon: ClientIcon,
  options: { label: "Clientes" },
};
