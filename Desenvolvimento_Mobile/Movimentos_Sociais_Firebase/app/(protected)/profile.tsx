import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/archive-theme';
import { useAuth } from '@/context/AuthContext';
import { friendlyFirebaseError } from '@/utils/firebase-errors';

export default function ProfileScreen() {
  const { signOut, user } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignOut() {
    setError(null);
    try {
      setSubmitting(true);
      await signOut();
      router.replace('/welcome');
    } catch (nextError) {
      setError(friendlyFirebaseError(nextError));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <AppButton label="← Início" onPress={() => router.replace('/home')} variant="text" />
      <Text accessibilityRole="header" style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>Sessão autenticada pelo Firebase Authentication.</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>E-MAIL AUTENTICADO</Text>
        <Text selectable style={styles.email}>{user?.email ?? 'Não disponível'}</Text>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
      <AppButton label="Sair da conta" loading={submitting} onPress={handleSignOut} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.ink, fontFamily: 'serif', fontSize: 36, fontWeight: '700', marginTop: 15 },
  subtitle: { color: colors.mutedInk, fontSize: 15, lineHeight: 22, marginBottom: 30, marginTop: 8 },
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 16, borderWidth: 1, marginBottom: 24, padding: 18 },
  cardLabel: { color: colors.wine, fontSize: 11, fontWeight: '800', letterSpacing: 1.1, marginBottom: 8 },
  email: { color: colors.ink, fontSize: 18, fontWeight: '700' },
  error: { color: colors.error, fontSize: 14, marginBottom: 12 },
});
