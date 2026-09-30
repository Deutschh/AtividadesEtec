import { Redirect, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { FirebaseConfigurationNotice } from '@/components/FirebaseConfigurationNotice';
import { Screen } from '@/components/Screen';
import { colors } from '@/constants/archive-theme';
import { useAuth } from '@/context/AuthContext';
import { friendlyFirebaseError } from '@/utils/firebase-errors';

export default function SignupScreen() {
  const { isFirebaseConfigured, isLoading, signUp, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (!isLoading && user) return <Redirect href="/home" />;

  async function handleSignup() {
    setError(null);
    if (!email.trim() || !password || !confirmation) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmation) {
      setError('A confirmação não corresponde à senha.');
      return;
    }

    try {
      setSubmitting(true);
      await signUp(email, password);
      router.replace('/home');
    } catch (nextError) {
      setError(friendlyFirebaseError(nextError));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <Text accessibilityRole="header" style={styles.title}>Criar conta</Text>
      <Text style={styles.subtitle}>O cadastro é criado diretamente no Firebase Authentication.</Text>
      {!isFirebaseConfigured && <FirebaseConfigurationNotice />}

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput autoCapitalize="none" autoComplete="email" keyboardType="email-address" onChangeText={setEmail} placeholder="voce@email.com" placeholderTextColor={colors.mutedInk} style={styles.input} value={email} />
        <Text style={styles.label}>Senha</Text>
        <TextInput autoComplete="new-password" onChangeText={setPassword} placeholder="Mínimo de 6 caracteres" placeholderTextColor={colors.mutedInk} secureTextEntry style={styles.input} value={password} />
        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput autoComplete="new-password" onChangeText={setConfirmation} placeholder="Repita sua senha" placeholderTextColor={colors.mutedInk} secureTextEntry style={styles.input} value={confirmation} />
        {error && <Text accessibilityLiveRegion="polite" style={styles.error}>{error}</Text>}
        <AppButton disabled={!isFirebaseConfigured} label="Cadastrar" loading={submitting} onPress={handleSignup} />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.helper}>Já possui uma conta?</Text>
        <AppButton label="Entrar" onPress={() => router.replace('/login')} variant="text" />
        <AppButton label="Voltar à apresentação" onPress={() => router.replace('/welcome')} variant="text" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.ink, fontFamily: 'serif', fontSize: 34, fontWeight: '700', marginTop: 28 },
  subtitle: { color: colors.mutedInk, fontSize: 15, lineHeight: 22, marginBottom: 30, marginTop: 8 },
  form: { gap: 9 },
  label: { color: colors.ink, fontSize: 14, fontWeight: '700', marginTop: 6 },
  input: { backgroundColor: colors.surface, borderColor: colors.border, borderRadius: 10, borderWidth: 1, color: colors.ink, fontSize: 16, minHeight: 50, paddingHorizontal: 14 },
  error: { color: colors.error, fontSize: 14, lineHeight: 20, marginTop: 4 },
  bottom: { alignItems: 'flex-start', marginTop: 34 },
  helper: { color: colors.mutedInk, fontSize: 14 },
});
