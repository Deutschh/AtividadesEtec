# Memória Social

Aplicativo mobile de museu digital para consultar um pequeno acervo visual sobre **movimentos sociais**. O tema individual da atividade é apresentado por cartazes, panfletos e fotografias documentais, sempre com fonte, contexto e informação de direitos no detalhe de cada registro.

> O catálogo é local: não há Firestore, Realtime Database ou CMS. O Firebase é usado somente para a autenticação real por e-mail e senha.

## Objetivo

Demonstrar uma aplicação React Native com Expo e TypeScript que permite:

- cadastrar e autenticar usuários com Firebase Authentication;
- manter a sessão entre aberturas do aplicativo com `AsyncStorage`;
- proteger as telas internas quando não há usuário autenticado;
- consultar um acervo histórico organizado por categorias;
- visualizar o contexto, a fonte e a atribuição de cada documento;
- encerrar a sessão pelo perfil.

## Tecnologias utilizadas

- Node.js e npm;
- React Native `0.86`;
- Expo SDK `57` e Expo Router;
- TypeScript;
- Firebase JavaScript SDK `12` (Authentication);
- `@react-native-async-storage/async-storage` para a persistência da sessão;
- Library of Congress como fonte de catálogo e imagens históricas.

O Firebase JavaScript SDK foi escolhido porque é compatível com Expo Go para Authentication; não é usado React Native Firebase, que exige código nativo e um development build.

## Identidade visual

O visual remete a um acervo histórico, com papel bege, preto suave, vinho e dourado:

| Papel | Cor |
| --- | --- |
| Bege histórico | `#F5F1E8` |
| Preto suave | `#222222` |
| Vinho | `#802B2F` |
| Dourado discreto | `#C6A46D` |
| Branco | `#FFFFFF` |

O ícone do aplicativo é um selo original de documentos sobrepostos, criado para este projeto. As imagens do acervo não são ilustrações: cada cartão abre a fonte primária catalogada.

## Funcionalidades

1. Apresentação do Memória Social.
2. Cadastro com e-mail, senha e confirmação de senha.
3. Login real com Firebase Authentication.
4. Recuperação do estado da sessão ao reiniciar o aplicativo.
5. Bloqueio das rotas internas para visitantes não autenticados.
6. Página inicial com categorias e destaque.
7. Acervo de seis itens, filtrável por categoria.
8. Detalhes com imagem, período, descrição, contexto, fonte e direitos.
9. Perfil com e-mail autenticado e logout.

## Estrutura de pastas

```text
Movimentos_Sociais_Firebase/
├── app/                         # Rotas Expo Router e telas
│   ├── (protected)/             # Rotas que exigem autenticação
│   ├── login.tsx
│   ├── signup.tsx
│   └── welcome.tsx
├── assets/images/               # Ícone próprio do aplicativo
├── docs/images/                 # Espaço para capturas reais
├── src/
│   ├── components/              # Botões, cartões e layout compartilhados
│   ├── context/AuthContext.tsx  # Estado e operações de autenticação
│   ├── data/archive.ts          # Seis registros locais do acervo
│   ├── services/firebase.ts     # Inicialização do Firebase/Auth
│   └── utils/firebase-errors.ts # Mensagens de erro em português
├── .env.example
├── ROTEIRO_VIDEO.md
└── README.md
```

## Instalação

No terminal, entre na pasta desta atividade:

```powershell
cd Desenvolvimento_Mobile/Movimentos_Sociais_Firebase
npm install
```

Copie o modelo de configuração. O arquivo `.env` é ignorado pelo Git e não deve ser enviado ao repositório.

```powershell
Copy-Item .env.example .env
```

## Configuração do Firebase Authentication

Esta etapa depende da sua conta Google e deve ser feita no [Firebase Console](https://console.firebase.google.com/).

1. Clique em **Adicionar projeto** e crie o projeto `Memória Social`.
2. Em **Configurações do projeto > Seus apps**, registre um app do tipo **Web**. O SDK JavaScript do Firebase é a integração usada pelo Expo.
3. Não habilite Hosting para esta atividade.
4. Em **Authentication > Sign-in method**, habilite **E-mail/senha**.
5. Copie apenas os valores públicos do objeto de configuração Web para o arquivo local `.env`, usando os nomes presentes em `.env.example`:

```dotenv
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_APP_ID=
```

6. Pare e inicie o Expo novamente para que as variáveis sejam carregadas.

As variáveis `EXPO_PUBLIC_*` fazem parte da configuração pública do cliente e não são credenciais administrativas. **Nunca** adicione arquivo de service account, chave privada, senha de banco ou senha de usuário ao repositório.

### Como a autenticação funciona

`src/services/firebase.ts` cria o app Firebase com os valores do `.env` e inicializa o Authentication com `AsyncStorage`. `AuthContext` observa `onAuthStateChanged`, portanto a sessão é recuperada ao abrir o aplicativo. Os formulários chamam diretamente:

- `createUserWithEmailAndPassword` no cadastro;
- `signInWithEmailAndPassword` no login;
- `signOut` no perfil.

Senhas não são gravadas em `AsyncStorage`, em arquivos locais, Firestore ou Realtime Database. O armazenamento é usado somente pela camada de persistência do Firebase Authentication.

## Executar no Expo Go (Android)

Depois de preencher o `.env`, execute:

```powershell
npx expo start
```

No celular Android, instale o **Expo Go**, mantenha celular e computador na mesma rede e leia o QR code apresentado pelo terminal. Se necessário, pressione `a` no terminal para tentar abrir um emulador Android configurado.

## Como testar

1. Abra o aplicativo e escolha **Criar uma conta**.
2. Informe um e-mail válido, senha com pelo menos seis caracteres e a confirmação igual.
3. Verifique o redirecionamento para a página inicial.
4. No Firebase Console, abra **Authentication > Users** e confirme que o e-mail foi criado.
5. Feche e abra o app para conferir a persistência da sessão.
6. No perfil, escolha **Sair da conta**.
7. Tente acessar uma rota interna sem sessão: a aplicação deve voltar para o login.
8. Teste login com credenciais válidas, senha errada e e-mail já cadastrado para conferir as mensagens.
9. Entre no acervo, filtre as categorias e abra os detalhes dos seis registros.

## Acervo, fontes e direitos

Os seis registros são dados locais em `src/data/archive.ts`. Eles usam imagens remotas da **Library of Congress** e cada tela de detalhe mostra a fonte e o status de direitos. A coleção não atribui autenticidade a uma imagem fora da sua catalogação original.

| Categoria | Registro | Fonte | Direitos indicados pela fonte |
| --- | --- | --- | --- |
| Cartazes históricos | Chicago women’s labor history (1965) | [Library of Congress](https://www.loc.gov/item/2016651746/) | Sem restrições conhecidas de publicação |
| Cartazes históricos | Proletarians have nothing to lose but their chains (1965) | [Library of Congress](https://www.loc.gov/item/2016651706/) | Sem restrições conhecidas de publicação |
| Panfletos | Official program — Woman suffrage procession (1913) | [Library of Congress](https://www.loc.gov/item/94507639/) | Sem restrições conhecidas de publicação |
| Panfletos | Final plans for the March on Washington for Jobs and Freedom (1963) | [Library of Congress](https://www.loc.gov/item/2014645600/) | Sem restrições conhecidas de publicação |
| Fotografias documentais | Woman suffrage parade, Wash., D.C. (1913) | [Library of Congress](https://www.loc.gov/pictures/item/2013648100/) | Sem restrições conhecidas de publicação |
| Fotografias documentais | Civil rights march on Washington, D.C. (1963) | [Library of Congress](https://www.loc.gov/item/2013648832/) | Sem restrições conhecidas de publicação |

Mesmo com o aviso “sem restrições conhecidas”, a Library of Congress orienta consultar o registro e fazer avaliação independente para outros usos. O contexto desta atividade é educacional.

## Capturas de tela

As capturas precisam ser reais, feitas com o aplicativo configurado e executando. Salve-as em `docs/images/` e adicione, por exemplo:

```text
docs/images/
├── apresentacao.png
├── cadastro.png
├── login.png
├── acervo.png
├── detalhes.png
└── perfil.png
```

Depois de criadas, elas podem ser referenciadas assim:

```markdown
![Tela do acervo](docs/images/acervo.png)
```

## Validações realizadas

- `npx tsc --noEmit`: concluído sem erros.
- `npx expo export --platform android --output-dir .expo-validation`: bundle Android gerado como validação de compilação.
- No Expo Web, com o Firebase configurado localmente: foram conferidas as validações de campos vazios e de confirmação de senha diferente.
- Um usuário sintético, exclusivo para teste, foi criado com sucesso por e-mail/senha. A criação foi confirmada em **Firebase Authentication > Users**.
- Login com senha incorreta mostrou a mensagem esperada; login com as credenciais corretas redirecionou para a página inicial.
- A sessão continuou autenticada após recarregar o aplicativo web. O logout retornou para a tela pública, e o acesso direto a uma rota protegida foi redirecionado para o login.
- O acervo exibiu seis registros e a tela de detalhes apresentou descrição, contexto, fonte e atribuição. Durante esses fluxos, o console do navegador do aplicativo não apresentou avisos ou erros.

A persistência após encerrar completamente o aplicativo em um celular Android com Expo Go ainda deve ser conferida no dispositivo físico, seguindo a seção anterior. A conta de teste e a senha não são registradas neste repositório.

## Vídeo de apresentação

O guia de gravação está em [ROTEIRO_VIDEO.md](ROTEIRO_VIDEO.md). O link do vídeo será adicionado quando estiver disponível.
