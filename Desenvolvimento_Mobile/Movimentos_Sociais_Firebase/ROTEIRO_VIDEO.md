# Roteiro de vídeo — Memória Social

Tempo sugerido: **3 a 5 minutos**. Grave somente o aplicativo real em funcionamento. Use uma conta de teste e não mostre senhas, conteúdo do `.env` nem informações privadas.

## Preparação

- Configure o Firebase Authentication com E-mail/senha.
- Abra o app no Expo Go e deixe o Firebase Console aberto na área **Authentication > Users**.
- Crie previamente uma conta de teste somente se quiser poupar tempo; para demonstrar cadastro, use um e-mail novo.
- Feche qualquer terminal ou editor que mostre o conteúdo do `.env`.

## 1. Abertura — 20 a 30 segundos

**Mostrar:** tela de apresentação do aplicativo.

**Fala sugerida:**

> Este é o Memória Social, um museu digital sobre movimentos sociais. A atividade utiliza React Native, Expo, TypeScript e Firebase Authentication. O tema individual é um acervo visual de cartazes, panfletos e fotografias históricas.

## 2. Organização e tecnologias — 25 a 35 segundos

**Mostrar:** repositório e, no editor, a estrutura `app/`, `src/data/archive.ts`, `src/services/firebase.ts` e `src/context/AuthContext.tsx`.

**Fala sugerida:**

> As telas estão em `app`, os dados locais do acervo ficam em `src/data`, e a autenticação fica isolada em serviço e contexto. Não uso Firestore para duplicar usuários: o Firebase Authentication é responsável pelo cadastro e login.

## 3. Firebase Authentication — 30 a 45 segundos

**Mostrar:** Firebase Console, projeto correto, **Authentication > Sign-in method**, com E-mail/senha ativado. Depois, mostre somente os nomes das variáveis de `.env.example`, sem valores reais.

**Fala sugerida:**

> No Firebase Console, habilitei o provedor de e-mail e senha. A configuração Web pública é usada localmente pelo aplicativo por meio de variáveis `EXPO_PUBLIC`. O arquivo `.env` não é enviado ao Git e nenhuma senha é armazenada pelo aplicativo.

## 4. Cadastro e confirmação — 35 a 45 segundos

**Mostrar:** tela de cadastro. Crie uma conta com e-mail de teste e senha que não seja exibida na gravação. Após entrar na home, volte ao Firebase Console em **Users** e mostre o novo e-mail.

**Fala sugerida:**

> Agora vou criar uma conta. O formulário valida campos, tamanho mínimo e confirmação da senha. Ao concluir, o usuário é criado no Firebase Authentication e a aplicação abre a área protegida. Aqui no Console é possível confirmar que o e-mail foi registrado.

## 5. Login e persistência — 25 a 35 segundos

**Mostrar:** perfil com e-mail; saia da conta; tela de login; entre novamente. Se possível, feche e reabra o Expo Go e mostre a sessão recuperada.

**Fala sugerida:**

> O login usa as credenciais do Firebase. A sessão é persistida pelo mecanismo de autenticação com AsyncStorage; por isso, depois de reabrir o app, o usuário continua autenticado até escolher sair.

## 6. Navegação e acervo — 50 a 70 segundos

**Mostrar:** home, categorias, filtro do acervo, um item de cartaz, um panfleto e uma fotografia. Abra um detalhe e toque em **Abrir registro da fonte**.

**Fala sugerida:**

> O acervo possui categorias de cartazes históricos, panfletos e fotografias documentais. Cada item inclui período, descrição neutra, contexto histórico, link da fonte e informação de direitos. Os dados são locais para manter o foco da atividade em navegação e autenticação.

## 7. Logout e finalização — 20 a 30 segundos

**Mostrar:** perfil, botão de logout e retorno à apresentação/login; repositório no GitHub com as duas matérias organizadas.

**Fala sugerida:**

> Por fim, o logout remove a sessão e impede o acesso às telas internas sem autenticação. O repositório está organizado por matéria e cada atividade tem seu próprio README. Obrigado.

## Checklist antes de enviar o vídeo

- [ ] O cadastro criou um e-mail visível em Firebase Authentication > Users.
- [ ] Não há senha, `.env` ou chave administrativa visível.
- [ ] Login, logout e proteção de rota foram demonstrados.
- [ ] Foram mostrados detalhes e fontes de pelo menos três categorias.
- [ ] O repositório e os READMEs foram apresentados.
- [ ] O vídeo tem entre 3 e 5 minutos.
