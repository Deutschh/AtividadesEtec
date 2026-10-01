import { useEffect, useState } from 'react';
import {
  Image,
  type ImageSourcePropType,
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from 'react-native';

import { colors } from '@/constants/archive-theme';

type ArchiveImageProps = {
  accessibilityLabel: string;
  height: number;
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

export function ArchiveImage({ accessibilityLabel, height, source, style }: ArchiveImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [source]);

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
      style={[styles.frame, { height }, style]}
    >
      {failed ? (
        <View style={styles.fallback}>
          <View style={styles.fallbackMark} />
          <Text style={styles.fallbackTitle}>Imagem indisponível</Text>
          <Text style={styles.fallbackText}>O conteúdo textual continua disponível.</Text>
        </View>
      ) : (
        <Image
          accessibilityIgnoresInvertColors
          onError={() => setFailed(true)}
          resizeMode="cover"
          source={source}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: colors.gold,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  fallback: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  fallbackMark: {
    backgroundColor: colors.wine,
    height: 5,
    marginBottom: 13,
    width: 48,
  },
  fallbackTitle: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '800',
  },
  fallbackText: {
    color: colors.mutedInk,
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});
