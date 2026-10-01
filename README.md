# Atividades ETEC

Este repositório reúne atividades organizadas por matéria. Cada atividade possui sua própria documentação e instruções de execução.

## Atividades

| Matéria | Atividade | Descrição |
| --- | --- | --- |
| Programação Web | [Seeders Laravel](Programacao_Web/Seeders_Laravel/README.md) | Migrations, relacionamento entre categorias e produtos, Seeders e dump SQL. |
| Programação Web | [Middleware Laravel](Programacao_Web/Middleware_Laravel/README.md) | Controller protegido por Middleware, View de acesso negado e resposta HTTP 403. |
| Desenvolvimento Mobile | [Memória Social](Desenvolvimento_Mobile/Movimentos_Sociais_Firebase/README.md) | Aplicativo React Native/Expo com Firebase Authentication e acervo visual de movimentos sociais. |

## Estrutura

```text
.
├── Programacao_Web/
│   ├── Seeders_Laravel/
│   └── Middleware_Laravel/
└── Desenvolvimento_Mobile/
    └── Movimentos_Sociais_Firebase/
```

## Executar a atividade Laravel

Os comandos do Laravel devem ser executados dentro da pasta da atividade:

```powershell
cd Programacao_Web/Seeders_Laravel
composer install
Copy-Item .env.example .env
php artisan key:generate
php artisan migrate --seed
```

Configure o banco de dados local no arquivo `.env`, que não é versionado. Consulte o [README da atividade Laravel](Programacao_Web/Seeders_Laravel/README.md) para as instruções completas, incluindo Seeders, validação e exportação SQL.

## Executar a atividade Laravel Middleware

```powershell
cd Programacao_Web/Middleware_Laravel
composer install
Copy-Item .env.example .env
php artisan key:generate
php artisan serve
```

Acesse `http://127.0.0.1:8000/area-restrita`. Consulte o [README da atividade Middleware](Programacao_Web/Middleware_Laravel/README.md) para ver o Controller, a Middleware, a execução HTTP 403 e o teste automatizado.

## Executar a atividade mobile

Os comandos do aplicativo Memória Social devem ser executados dentro da pasta da atividade:

```powershell
cd Desenvolvimento_Mobile/Movimentos_Sociais_Firebase
npm install
Copy-Item .env.example .env
npx expo start
```

Antes de iniciar, configure Firebase Authentication por e-mail/senha no arquivo local `.env`. Consulte o [README do Memória Social](Desenvolvimento_Mobile/Movimentos_Sociais_Firebase/README.md) para o passo a passo e o [roteiro de vídeo](Desenvolvimento_Mobile/Movimentos_Sociais_Firebase/ROTEIRO_VIDEO.md) para a apresentação.
