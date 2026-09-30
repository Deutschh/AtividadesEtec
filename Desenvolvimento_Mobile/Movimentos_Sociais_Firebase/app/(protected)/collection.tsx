import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ArchiveCard } from '@/components/ArchiveCard';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/archive-theme';
import { ArchiveCategory, archiveCategories, itemsForCategory } from '@/data/archive';

export default function CollectionScreen() {
  const params = useLocalSearchParams<{ category?: string }>();
  const selectedCategory = archiveCategories.includes(params.category as ArchiveCategory)
    ? (params.category as ArchiveCategory)
    : undefined;
  const items = itemsForCategory(selectedCategory);

  return (
    <Screen>
      <AppButton label="← Início" onPress={() => router.replace('/home')} variant="text" />
      <Text accessibilityRole="header" style={styles.title}>Acervo</Text>
      <Text style={styles.subtitle}>Registros visuais selecionados, com descrição, fonte e aviso de direitos em cada item.</Text>

      <View style={styles.filters}>
        <AppButton label="Todos" onPress={() => router.replace('/collection')} variant={selectedCategory ? 'secondary' : 'primary'} style={styles.filter} />
        {archiveCategories.map((category) => (
          <AppButton
            key={category}
            label={category}
            onPress={() => router.replace({ pathname: '/collection', params: { category } })}
            style={styles.filter}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
          />
        ))}
      </View>

      <Text style={styles.count}>{items.length} registro{items.length === 1 ? '' : 's'}</Text>
      {items.map((item) => (
        <ArchiveCard key={item.id} item={item} onPress={() => router.push({ pathname: '/item/[id]', params: { id: item.id } })} />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.ink, fontFamily: 'serif', fontSize: 36, fontWeight: '700', marginTop: 15 },
  subtitle: { color: colors.mutedInk, fontSize: 15, lineHeight: 22, marginBottom: 21, marginTop: 8 },
  filters: { gap: 9, marginBottom: 22 },
  filter: { alignSelf: 'stretch', minHeight: 44 },
  count: { color: colors.mutedInk, fontSize: 13, fontWeight: '700', marginBottom: 12 },
});
