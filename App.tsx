// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Signup, Loading } from './screens'; // Import your Loading component

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or fetching resources
    const loadData = async () => {
      // You can fetch data here or perform any async operations
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulates a 3-second loading time
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        {loading ? (
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }} // Hide the header on the loading screen
          />
        ) : (
          <>
            <Stack.Screen
              name="home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="signup"
              component={Signup}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
