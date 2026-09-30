import { Redirect, router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/archive-theme';
import { useAuth } from '@/context/AuthContext';

export default function WelcomeScreen() {
  const { isLoading, user } = useAuth();

  if (!isLoading && user) return <Redirect href="/home" />;

  return (
    <Screen contentStyle={styles.content}>
      <View style={styles.brandBlock}>
        <View style={styles.seal}><Text style={styles.sealText}>MS</Text></View>
        <Text style={styles.kicker}>ACERVO HISTÓRICO</Text>
        <Text style={styles.title}>Memória{`\n`}Social</Text>
        <View style={styles.rule} />
        <Text style={styles.description}>
          Um museu digital de cartazes, panfletos e fotografias que registram movimentos sociais.
        </Text>
      </View>

      <View style={styles.actions}>
        <AppButton label="Criar uma conta" onPress={() => router.push('/signup')} />
        <AppButton label="Entrar" onPress={() => router.push('/login')} variant="secondary" />
      </View>

      <Text style={styles.footer}>Seleção local com fontes e atribuições em cada registro.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { justifyContent: 'space-between' },
  brandBlock: { alignItems: 'center', flex: 1, justifyContent: 'center', paddingVertical: 52 },
  seal: { alignItems: 'center', backgroundColor: colors.wine, borderColor: colors.gold, borderRadius: 56, borderWidth: 3, height: 112, justifyContent: 'center', marginBottom: 26, width: 112 },
  sealText: { color: colors.surface, fontFamily: 'serif', fontSize: 35, fontWeight: '700', letterSpacing: 1 },
  kicker: { color: colors.wine, fontSize: 12, fontWeight: '800', letterSpacing: 2.2, marginBottom: 10 },
  title: { color: colors.ink, fontFamily: 'serif', fontSize: 46, fontWeight: '700', letterSpacing: -1, lineHeight: 48, textAlign: 'center' },
  rule: { backgroundColor: colors.gold, height: 2, marginVertical: 20, width: 56 },
  description: { color: colors.mutedInk, fontSize: 16, lineHeight: 24, maxWidth: 330, textAlign: 'center' },
  actions: { gap: 12 },
  footer: { color: colors.mutedInk, fontSize: 12, lineHeight: 18, marginTop: 24, textAlign: 'center' },
});
