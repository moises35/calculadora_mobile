import { globalStyles } from '@/configs/theme/app-theme';
import { CalculatorScreen } from '@/presentation/screens';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={globalStyles.background}>
      <StatusBar style="dark" backgroundColor="black" />
      <CalculatorScreen />
    </View>
  );
}
