import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import authProvider from "./providers/authProvider";
import { UserList } from "./resources/Users";
import { PostList, PostEdit, PostCreate } from "./resources/Posts";
import jsonServerProvider from "ra-data-json-server";
import fakeDataProvider from "ra-data-fakerest";
import ptBrMessages from "ra-language-pt-br";
import polyglotI18nProvider from "ra-i18n-polyglot";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

import clients from "./resources/clients";
import { dataProvider } from "./providers/dataProvider";
import { theme } from "./providers/theme";

const messages = {
  "pt-br": ptBrMessages,
};
const i18nProvider = polyglotI18nProvider(
  (locale) => messages[locale],
  "pt-br"
);

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    theme={theme}
  >
    <Resource name="clients" {...clients} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
