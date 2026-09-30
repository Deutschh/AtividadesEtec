import { ActivityIndicator, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors } from '@/constants/archive-theme';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
};

export function AppButton({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: AppButtonProps) {
  const muted = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: muted, busy: loading }}
      disabled={muted}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'text' && styles.textButton,
        muted && styles.disabled,
        pressed && !muted && styles.pressed,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? colors.surface : colors.wine} />
      ) : (
        <Text
          style={[
            styles.label,
            variant === 'primary' && styles.primaryLabel,
            variant === 'text' && styles.textLabel,
          ]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    minHeight: 50,
    paddingHorizontal: 18,
  },
  primary: { backgroundColor: colors.wine },
  secondary: { borderColor: colors.wine, borderWidth: 1.2 },
  textButton: { alignSelf: 'flex-start', minHeight: 36, paddingHorizontal: 0 },
  label: { color: colors.wine, fontSize: 16, fontWeight: '700' },
  primaryLabel: { color: colors.surface },
  textLabel: { textDecorationLine: 'underline' },
  disabled: { opacity: 0.56 },
  pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
