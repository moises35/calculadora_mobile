import { Pressable, Text } from 'react-native';
import { globalStyles, colors } from '@/configs/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  large?: boolean;
  onPress?: () => void;
  blackText?: boolean;
}

export const CalculatorButton = ({
  label,
  large = false,
  color = colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.btn,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color,
        width: large ? 180 : 80,
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.btnText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
