import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/archive-theme';
import { ArchiveItem } from '@/data/archive';

type ArchiveCardProps = {
  item: ArchiveItem;
  onPress: () => void;
};

export function ArchiveCard({ item, onPress }: ArchiveCardProps) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <Image accessibilityLabel={item.title} source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.period}>{item.period}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 14,
    overflow: 'hidden',
  },
  image: { backgroundColor: colors.gold, height: 168, width: '100%' },
  body: { padding: 15 },
  period: { color: colors.wine, fontSize: 12, fontWeight: '800', letterSpacing: 0.8, marginBottom: 5, textTransform: 'uppercase' },
  title: { color: colors.ink, fontFamily: 'serif', fontSize: 20, fontWeight: '700', marginBottom: 7 },
  description: { color: colors.mutedInk, fontSize: 14, lineHeight: 20 },
  pressed: { opacity: 0.82 },
});
