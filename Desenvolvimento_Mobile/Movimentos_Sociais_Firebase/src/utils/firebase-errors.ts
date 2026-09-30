type FirebaseLikeError = {
  code?: string;
};

export function friendlyFirebaseError(error: unknown): string {
  const code = (error as FirebaseLikeError)?.code;

  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'Este e-mail já está cadastrado.',
    'auth/invalid-email': 'Informe um e-mail válido.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/user-not-found': 'Não encontramos uma conta com este e-mail.',
    'auth/wrong-password': 'E-mail ou senha incorretos.',
    'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
    'auth/network-request-failed': 'Não foi possível conectar. Verifique sua internet.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde um momento e tente novamente.',
  };

  return messages[code ?? ''] ?? 'Não foi possível concluir a operação. Tente novamente.';
}
