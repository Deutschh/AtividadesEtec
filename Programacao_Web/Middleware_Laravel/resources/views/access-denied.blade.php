<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acesso negado</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            padding: 24px;
            background: #f4f5f7;
            color: #252a34;
            font-family: Arial, sans-serif;
        }

        main {
            width: min(100%, 560px);
            padding: 40px;
            border-top: 5px solid #a8202a;
            border-radius: 12px;
            background: #ffffff;
            box-shadow: 0 16px 40px rgba(37, 42, 52, 0.12);
            text-align: center;
        }

        .status {
            display: inline-block;
            margin-bottom: 14px;
            color: #a8202a;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        h1 {
            margin: 0 0 22px;
            font-size: clamp(2rem, 7vw, 3rem);
        }

        p {
            margin: 8px 0;
            font-size: 1.1rem;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <main>
        <span class="status">HTTP 403</span>
        <h1>Acesso negado</h1>
        <p>Você não tem permissão para acessar este site.</p>
        <p>Favor entrar em contato com o administrador.</p>
    </main>
</body>
</html>
