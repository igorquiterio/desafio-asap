import * as React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./providers/authProvider";
import ptBrMessages from "ra-language-pt-br";
import polyglotI18nProvider from "ra-i18n-polyglot";

import clients from "./resources/clients";
import policies from "./resources/policies";
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
    <Resource name="policies" {...policies} />
  </Admin>
);

export default App;
