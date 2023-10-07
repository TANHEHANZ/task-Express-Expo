import { View } from "react-native";
import React from "react";
import { globalStyles } from "./globalStyles";
const Layout = ({ children }) => {
  return <View style={globalStyles.container}>{children}</View>;
};

export default Layout;
