# Atividade — Laravel Seeders

## Objetivo

Este projeto demonstra o povoamento automático de um banco de dados usando **Seeders** do Laravel. A atividade cria categorias e produtos relacionados, executa os Seeders, valida os dados inseridos e exporta a estrutura com os dados para um arquivo SQL.

## Tecnologias utilizadas

- PHP 8.2
- Laravel 12
- MariaDB/MySQL (XAMPP)
- Composer
- Artisan
- phpMyAdmin

## Estrutura do banco

### `categories`

| Campo | Descrição |
| --- | --- |
| `id` | Identificador da categoria. |
| `name` | Nome da categoria. |
| `description` | Descrição da categoria. |
| `created_at` / `updated_at` | Timestamps do Laravel. |

### `products`

| Campo | Descrição |
| --- | --- |
| `id` | Identificador do produto. |
| `category_id` | Chave estrangeira para `categories.id`. |
| `name` | Nome do produto. |
| `description` | Descrição do produto. |
| `price` | Preço decimal do produto. |
| `stock` | Quantidade disponível em estoque. |
| `created_at` / `updated_at` | Timestamps do Laravel. |

```text
categories 1 ---- N products
```

Uma categoria possui vários produtos, e cada produto pertence a uma categoria. A coluna `products.category_id` possui uma foreign key para `categories.id` com `cascadeOnDelete()`.

## 1. Criação dos Seeders

Os arquivos foram gerados com Artisan:

```bash
php artisan make:model Category
php artisan make:model Product
php artisan make:migration create_categories_table --create=categories
php artisan make:migration create_products_table --create=products
php artisan make:seeder CategorySeeder
php artisan make:seeder ProductSeeder
```

`CategorySeeder` insere cinco categorias. `ProductSeeder` insere 20 produtos distribuídos entre elas.

## 2. Implementação

Os registros são inseridos diretamente nos métodos `run()` usando Eloquent. A estratégia `updateOrCreate` evita registros duplicados caso `php artisan db:seed` seja executado novamente.

```php
Category::query()->updateOrCreate(
    ['name' => $category['name']],
    ['description' => $category['description']],
);
```

Os produtos localizam a categoria pelo nome, sem IDs fixos:

```php
$category->products()->updateOrCreate(
    ['name' => $product['name']],
    [
        'description' => $product['description'],
        'price' => $product['price'],
        'stock' => $product['stock'],
    ],
);
```

## 3. Registro no `DatabaseSeeder`

As categorias são semeadas antes dos produtos:

```php
$this->call([
    CategorySeeder::class,
    ProductSeeder::class,
]);
```

## 4. Como executar o projeto

```bash
composer install
cp .env.example .env
php artisan key:generate
```

No PowerShell, use `Copy-Item .env.example .env` em vez de `cp`.

Inicie o MySQL no painel do XAMPP, crie o banco vazio `laravel_seeders` no phpMyAdmin e configure as credenciais locais no `.env`. Nunca versione esse arquivo.

```bash
php artisan migrate --seed
```

Para recriar apenas o banco de desenvolvimento e executar os Seeders:

```bash
php artisan migrate:fresh --seed
```

> `migrate:fresh --seed` remove todas as tabelas do banco configurado. Use-o apenas no banco de desenvolvimento desta atividade.

Se necessário, inicie o servidor local com `php artisan serve`.

## 5. Verificação dos dados

No phpMyAdmin, abra as tabelas `categories` e `products` do banco `laravel_seeders`. Também é possível usar Tinker:

```bash
php artisan tinker
```

```php
App\Models\Category::count();
App\Models\Product::count();
App\Models\Product::whereDoesntHave('category')->count();
App\Models\Category::withCount('products')->get(['name']);
```

Resultado esperado: 5 categorias, 20 produtos, zero produtos sem categoria e quatro produtos em cada categoria.

## 6. Resultado e prints

As categorias são Eletrônicos, Informática, Acessórios, Casa e Games, cada uma com quatro produtos. Adicione futuros prints do phpMyAdmin em:

- `docs/images/categories.png`
- `docs/images/products.png`

## 7. Exportação SQL

Após validar migrations e Seeders, exporte o banco para `database_seeders.sql` na raiz do projeto. O arquivo contém estrutura, chaves estrangeiras e dados, incluindo `categories` e `products`.

No XAMPP com usuário `root` sem senha:

```powershell
& C:\xampp\mysql\bin\mysqldump.exe -u root --single-transaction --routines --triggers --add-drop-table laravel_seeders --result-file="database_seeders.sql"
```

Se houver senha, use `-p` sem escrevê-la no comando:

```powershell
& C:\xampp\mysql\bin\mysqldump.exe -u SEU_USUARIO -p --single-transaction --routines --triggers --add-drop-table laravel_seeders --result-file="database_seeders.sql"
```

Alternativa pelo phpMyAdmin: selecione o banco, abra **Exportar**, escolha **SQL**, use exportação rápida ou personalizada e salve o download como `database_seeders.sql` na raiz.

Não coloque senhas no README, no comando versionado ou no repositório.
