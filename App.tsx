import React from "react";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import routes from "./routes";


const Stack = createStackNavigator();
export const App = () => {
  const { Navigator, Screen } = Stack;
  return (
    <NavigationContainer>
      <Navigator>
        {routes.map((value,key)=>( 
          <Screen key={key} name={value.name} component={value.component} options={value.options} />
         ))}
      </Navigator>
    </NavigationContainer>


  )
}

export default App;