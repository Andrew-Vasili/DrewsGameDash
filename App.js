import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

import Board from './components/leaderboard/Board';
import './assets/style.css';
import CountdownTimer from './components/timer/CountdownTimer';
import AlertBar from './components/alerts/AlertBar';

export default function App() {
  
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const status = "success"
  const title = "Hello World"
  const bodyText = "Team1"

  return (
    <NativeBaseProvider>
     <View style={styles.container}>
     {status &&<AlertBar status = {status} achiement= {title} team={bodyText}/> }
       <StatusBar style="auto" />
       <CountdownTimer targetDate={dateTimeAfterThreeDays} />
       <Board></Board>
     </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0208',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
