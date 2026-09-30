import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ArchiveCard } from '@/components/ArchiveCard';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/archive-theme';
import { archiveCategories, archiveItems } from '@/data/archive';
import { useAuth } from '@/context/AuthContext';

export default function HomeScreen() {
  const { user } = useAuth();
  const firstName = user?.email?.split('@')[0] ?? 'visitante';
  const highlight = archiveItems[0];

  return (
    <Screen>
      <View style={styles.topline}>
        <View>
          <Text style={styles.kicker}>MEMÓRIA SOCIAL</Text>
          <Text accessibilityRole="header" style={styles.greeting}>Olá, {firstName}.</Text>
        </View>
        <AppButton label="Perfil" onPress={() => router.push('/profile')} variant="text" />
      </View>

      <View style={styles.intro}>
        <Text style={styles.introTitle}>Um acervo em movimento</Text>
        <Text style={styles.introText}>Explore documentos visuais que ajudam a registrar reivindicações, organizações e manifestações históricas.</Text>
      </View>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.categoryList}>
        {archiveCategories.map((category, index) => (
          <AppButton
            key={category}
            label={`${String(index + 1).padStart(2, '0')}  ${category}`}
            onPress={() => router.push({ pathname: '/collection', params: { category } })}
            variant="secondary"
          />
        ))}
      </View>

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Destaque do acervo</Text>
        <AppButton label="Ver acervo" onPress={() => router.push('/collection')} variant="text" />
      </View>
      <ArchiveCard item={highlight} onPress={() => router.push({ pathname: '/item/[id]', params: { id: highlight.id } })} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  topline: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  kicker: { color: colors.wine, fontSize: 11, fontWeight: '800', letterSpacing: 1.5, marginBottom: 5 },
  greeting: { color: colors.ink, fontFamily: 'serif', fontSize: 31, fontWeight: '700' },
  intro: { backgroundColor: colors.wine, borderRadius: 16, marginBottom: 28, padding: 20 },
  introTitle: { color: colors.surface, fontFamily: 'serif', fontSize: 24, fontWeight: '700', marginBottom: 7 },
  introText: { color: '#F4EADD', fontSize: 15, lineHeight: 22 },
  sectionTitle: { color: colors.ink, fontFamily: 'serif', fontSize: 23, fontWeight: '700', marginBottom: 13 },
  categoryList: { gap: 10, marginBottom: 32 },
  sectionHeading: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
});
