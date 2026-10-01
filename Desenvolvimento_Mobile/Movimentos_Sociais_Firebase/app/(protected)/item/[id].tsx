import { router, useLocalSearchParams } from 'expo-router';
import { Linking, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ArchiveImage } from '@/components/ArchiveImage';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/archive-theme';
import { findArchiveItem } from '@/data/archive';

export default function ItemDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = findArchiveItem(id);

  if (!item) {
    return (
      <Screen contentStyle={styles.empty}>
        <Text style={styles.emptyTitle}>Registro não encontrado</Text>
        <AppButton label="Voltar ao acervo" onPress={() => router.replace('/collection')} />
      </Screen>
    );
  }

  return (
    <Screen>
      <AppButton label="← Voltar ao acervo" onPress={() => router.back()} variant="text" />
      <ArchiveImage accessibilityLabel={item.imageAlt} height={235} source={item.imageSource} style={styles.image} />
      <Text style={styles.category}>{item.category}</Text>
      <Text accessibilityRole="header" style={styles.title}>{item.title}</Text>
      <Text style={styles.period}>{item.period}</Text>

      <View style={styles.block}>
        <Text style={styles.heading}>Descrição</Text>
        <Text style={styles.body}>{item.description}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.heading}>Contexto histórico</Text>
        <Text style={styles.body}>{item.historicalContext}</Text>
      </View>
      <View style={styles.sourceBox}>
        <Text style={styles.sourceTitle}>Fonte e atribuição</Text>
        <Text style={styles.body}>{item.sourceName}</Text>
        <Text style={styles.rights}>{item.rights}</Text>
        <Text style={styles.imageNotice}>{item.imageNotice}</Text>
        <AppButton label="Abrir registro da fonte" onPress={() => Linking.openURL(item.sourceUrl)} variant="text" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: { borderColor: colors.border, borderRadius: 16, borderWidth: 1, marginBottom: 19, marginTop: 8 },
  category: { color: colors.wine, fontSize: 12, fontWeight: '800', letterSpacing: 0.9, marginBottom: 6, textTransform: 'uppercase' },
  title: { color: colors.ink, fontFamily: 'serif', fontSize: 32, fontWeight: '700', lineHeight: 37 },
  period: { color: colors.mutedInk, fontSize: 15, marginTop: 8 },
  block: { marginTop: 25 },
  heading: { color: colors.ink, fontSize: 17, fontWeight: '800', marginBottom: 7 },
  body: { color: colors.mutedInk, fontSize: 15, lineHeight: 23 },
  sourceBox: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 14, borderWidth: 1, marginTop: 28, padding: 16 },
  sourceTitle: { color: colors.ink, fontSize: 17, fontWeight: '800', marginBottom: 8 },
  rights: { color: colors.wine, fontSize: 13, lineHeight: 19, marginTop: 10 },
  imageNotice: { color: colors.mutedInk, fontSize: 12, fontStyle: 'italic', lineHeight: 18, marginTop: 10 },
  empty: { justifyContent: 'center' },
  emptyTitle: { color: colors.ink, fontFamily: 'serif', fontSize: 27, fontWeight: '700', marginBottom: 20 },
});
