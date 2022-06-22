import * as React from 'react';
import { ActivityIndicator, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import HomeScreen from './screens/HomeScreen'
import EpisodeDetailsScreen from './screens/EpisodeDetailsScreen'
import CharacterDetailsScreen from './screens/CharacterDetailsScreen'
import {
  store,
  persistor,
} from './store'

if (TouchableOpacity.defaultProps) {
  TouchableOpacity.defaultProps.activeOpacity = 0.5
} else {
  TouchableOpacity.defaultProps = {};
  TouchableOpacity.defaultProps.activeOpacity = 0.5
}

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="EpisodeDetailsScreen" component={EpisodeDetailsScreen} />
          <Stack.Screen name="CharacterDetailsScreen" component={CharacterDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size="small" />}
        persistor={persistor}>
        <PaperProvider>
          <Main />
          <FlashMessage position="top" floating={true} />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}