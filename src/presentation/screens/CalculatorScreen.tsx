import { colors, globalStyles } from '@/configs/theme/app-theme';
import { Text, View } from 'react-native';
import { CalculatorButton } from '@/presentation/components/CalculatorButton';
import { useCalculator } from '@/presentation/hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    formula,
    buildNumber,
    clear,
    deleteLastChar,
    toogleSign,
    addOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}
        >
          {formula === '' ? '0' : formula}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.subResult}
        >
          {formula === previousNumber || formula === '' ? '' : previousNumber}
        </Text>
      </View>
      <View style={globalStyles.btnContainer}>
        <CalculatorButton
          onPress={clear}
          label="C"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={toogleSign}
          label="+/-"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={deleteLastChar}
          label="del"
          blackText
          color={colors.lightGray}
        />
        <CalculatorButton
          onPress={divideOperation}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.btnContainer}>
        <CalculatorButton
          onPress={() => {
            buildNumber('7');
          }}
          label="7"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('8');
          }}
          label="8"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('9');
          }}
          label="9"
        />
        <CalculatorButton
          onPress={multiplyOperation}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.btnContainer}>
        <CalculatorButton
          onPress={() => {
            buildNumber('4');
          }}
          label="4"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('5');
          }}
          label="5"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('6');
          }}
          label="6"
        />
        <CalculatorButton
          onPress={substractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.btnContainer}>
        <CalculatorButton
          onPress={() => {
            buildNumber('1');
          }}
          label="1"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('2');
          }}
          label="2"
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('3');
          }}
          label="3"
        />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.btnContainer}>
        <CalculatorButton
          onPress={() => {
            buildNumber('0');
          }}
          label="0"
          large
        />
        <CalculatorButton
          onPress={() => {
            buildNumber('.');
          }}
          label="."
        />
        <CalculatorButton
          onPress={calculateResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
