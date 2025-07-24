import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Session } from '@supabase/supabase-js';


interface HomeProps {
    session: Session;
};
    
export default function Home({session} : HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Home Page</Text>
      <Text>Welcome, {session.user.email}!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});