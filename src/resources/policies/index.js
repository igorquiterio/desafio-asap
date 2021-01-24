import PolicyIcon from "@material-ui/icons/LibraryBooks";

import { PolicyCreate } from "./PolicyCreate";
import { PolicyList } from "./PolicyList";
import { PolicyShow } from "./PolicyShow";

export default {
  list: PolicyList,
  create: PolicyCreate,
  show: PolicyShow,
  icon: PolicyIcon,
  options: { label: "Apólices" },
};
