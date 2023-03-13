import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import AppContextProvider from './context/AppContext';



export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
       <AppNavigation />
      </NavigationContainer>
    </AppContextProvider>
      
  );
}

