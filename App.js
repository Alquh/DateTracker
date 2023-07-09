import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import EntriesScreen from "./screens/EntriesScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  const [entries, setEntries] = useState([]);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {() => <HomeScreen entries={entries} setEntries={setEntries} />}
        </Drawer.Screen>
        <Drawer.Screen name="Entries">
          {() => <EntriesScreen entries={entries} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
