import React from "react";
import {
  CreateButton,
  RefreshButton,
  TopToolbar,
  ListButton,
} from "react-admin";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

export const SimpleCustomActions = ({ basePath }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} />
    <RefreshButton />
  </TopToolbar>
);

export const BackButtonOnlyActions = ({ basePath, data }) => (
  <TopToolbar style={{ justifyContent: "flex-start" }}>
    <ListButton basePath={basePath} label="Voltar" icon={<ChevronLeft />} />
  </TopToolbar>
);
