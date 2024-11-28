import React from "react";
import { View } from "react-native";
import FunctionComponent from "./pages/Soal_Dua/FunctionalComponent";
import ClassComponent from "./pages/Soal_Dua/ClassComponent";
import Styling from "./pages/Soal_Tiga/Styling";
import Navigation from "./pages/Soal_Lima/ReactNavigation";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <FunctionComponent /> */}
      {/* <ClassComponent /> */}
      {/* <Styling /> */}
      <Navigation />
    </View>
  );
};

export default App;
