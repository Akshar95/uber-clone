import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Provider wraps our app so can have redux inside of it.
import { Provider } from 'react-redux';

// 1) Set up Redux

export default function App() {
  return (
    // view components instead of div tags for react which are HTML elemets for a page
    // for apps on ios and andriod have to take different approach
    // this view components are compiled at build time to a ios and andriod div
    // style instead of className
    <View style={styles.container}> 
      <Text>Lets build uber</Text>
    </View>
  );
}
// Above is the entire app (high level overview) so need to import a provider

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flex defaults to a column on react native becuase working on a phone
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// expo start opens Metro Bundler, where View componets have been complied into ios and andriod