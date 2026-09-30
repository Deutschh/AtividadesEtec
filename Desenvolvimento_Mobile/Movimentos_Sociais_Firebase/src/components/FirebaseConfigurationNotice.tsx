import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/archive-theme';

export function FirebaseConfigurationNotice() {
  return (
    <View style={styles.notice}>
      <Text style={styles.title}>Firebase ainda não configurado</Text>
      <Text style={styles.text}>
        Crie o arquivo .env a partir de .env.example e preencha a configuração pública do Firebase para habilitar cadastro e login reais.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notice: { backgroundColor: '#FFF7E7', borderColor: colors.gold, borderRadius: 12, borderWidth: 1, marginBottom: 18, padding: 14 },
  title: { color: colors.ink, fontSize: 14, fontWeight: '800', marginBottom: 4 },
  text: { color: colors.mutedInk, fontSize: 13, lineHeight: 19 },
});
