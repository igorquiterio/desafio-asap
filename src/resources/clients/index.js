import ClientIcon from "@material-ui/icons/People";

import { ListGuesser } from "react-admin";

import { ClientList } from "./ClientList";

export default {
  list: ClientList,
  // edit: OrderEdit,
  icon: ClientIcon,
  options: { label: "Clientes" },
};
