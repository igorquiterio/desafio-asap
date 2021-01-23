import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import authProvider from "./providers/authProvider";
import { UserList } from "./resources/Users";
import { PostList, PostEdit, PostCreate } from "./resources/Posts";
import jsonServerProvider from "ra-data-json-server";
import ptBrMessages from "ra-language-pt-br";
import polyglotI18nProvider from "ra-i18n-polyglot";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";

const messages = {
  "pt-br": ptBrMessages,
};
const i18nProvider = polyglotI18nProvider(
  (locale) => messages[locale],
  "pt-br"
);
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
  >
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
