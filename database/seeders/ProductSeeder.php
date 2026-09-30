<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'category' => 'Eletrônicos',
                'name' => 'Smartphone Vision X',
                'description' => 'Smartphone com tela ampla, câmera dupla e armazenamento interno.',
                'price' => '2499.90',
                'stock' => 18,
            ],
            [
                'category' => 'Eletrônicos',
                'name' => 'Smart TV 50 4K',
                'description' => 'Televisor de 50 polegadas com resolução 4K e conexão Wi-Fi.',
                'price' => '2899.90',
                'stock' => 9,
            ],
            [
                'category' => 'Eletrônicos',
                'name' => 'Fone Bluetooth Wave',
                'description' => 'Fone de ouvido sem fio com microfone integrado.',
                'price' => '199.90',
                'stock' => 35,
            ],
            [
                'category' => 'Eletrônicos',
                'name' => 'Caixa de Som Pulse',
                'description' => 'Caixa de som portátil com conexão Bluetooth.',
                'price' => '299.90',
                'stock' => 20,
            ],
            [
                'category' => 'Informática',
                'name' => 'Notebook Pro 15',
                'description' => 'Notebook de 15 polegadas para estudo e produtividade.',
                'price' => '4599.90',
                'stock' => 8,
            ],
            [
                'category' => 'Informática',
                'name' => 'Monitor 24 Full HD',
                'description' => 'Monitor de 24 polegadas com resolução Full HD.',
                'price' => '899.90',
                'stock' => 14,
            ],
            [
                'category' => 'Informática',
                'name' => 'Teclado Mecânico RGB',
                'description' => 'Teclado mecânico com iluminação RGB configurável.',
                'price' => '349.90',
                'stock' => 25,
            ],
            [
                'category' => 'Informática',
                'name' => 'Mouse Óptico',
                'description' => 'Mouse óptico com conexão USB e ajuste de sensibilidade.',
                'price' => '129.90',
                'stock' => 40,
            ],
            [
                'category' => 'Acessórios',
                'name' => 'Cabo USB-C 1m',
                'description' => 'Cabo USB-C de um metro para carregamento e transferência de dados.',
                'price' => '39.90',
                'stock' => 60,
            ],
            [
                'category' => 'Acessórios',
                'name' => 'Carregador USB-C 65W',
                'description' => 'Carregador USB-C de 65 watts para dispositivos compatíveis.',
                'price' => '179.90',
                'stock' => 22,
            ],
            [
                'category' => 'Acessórios',
                'name' => 'Suporte para Notebook',
                'description' => 'Suporte ajustável para melhorar a ergonomia no uso do notebook.',
                'price' => '119.90',
                'stock' => 16,
            ],
            [
                'category' => 'Acessórios',
                'name' => 'Mochila para Notebook',
                'description' => 'Mochila acolchoada para transportar notebooks e acessórios.',
                'price' => '159.90',
                'stock' => 18,
            ],
            [
                'category' => 'Casa',
                'name' => 'Luminária LED de Mesa',
                'description' => 'Luminária de mesa com iluminação LED e ajuste de intensidade.',
                'price' => '89.90',
                'stock' => 30,
            ],
            [
                'category' => 'Casa',
                'name' => 'Jogo de Panelas',
                'description' => 'Conjunto de panelas para preparo de refeições.',
                'price' => '499.90',
                'stock' => 7,
            ],
            [
                'category' => 'Casa',
                'name' => 'Organizadora Multiuso',
                'description' => 'Caixa organizadora para objetos e utensílios domésticos.',
                'price' => '69.90',
                'stock' => 45,
            ],
            [
                'category' => 'Casa',
                'name' => 'Ventilador de Mesa',
                'description' => 'Ventilador compacto para uso em mesas e ambientes pequenos.',
                'price' => '219.90',
                'stock' => 12,
            ],
            [
                'category' => 'Games',
                'name' => 'Console GameBox',
                'description' => 'Console para jogos com armazenamento interno e controle incluso.',
                'price' => '3799.90',
                'stock' => 5,
            ],
            [
                'category' => 'Games',
                'name' => 'Controle Sem Fio',
                'description' => 'Controle sem fio compatível com consoles e computadores.',
                'price' => '249.90',
                'stock' => 17,
            ],
            [
                'category' => 'Games',
                'name' => 'Headset Gamer',
                'description' => 'Headset gamer com microfone e som estéreo.',
                'price' => '329.90',
                'stock' => 21,
            ],
            [
                'category' => 'Games',
                'name' => 'Mousepad Gamer',
                'description' => 'Mousepad de superfície ampla para jogos e uso diário.',
                'price' => '79.90',
                'stock' => 50,
            ],
        ];

        $categories = Category::query()
            ->whereIn('name', collect($products)->pluck('category')->unique())
            ->get()
            ->keyBy('name');

        foreach ($products as $product) {
            $category = $categories->get($product['category']);

            if ($category === null) {
                throw new \RuntimeException("Categoria [{$product['category']}] não encontrada.");
            }

            $category->products()->updateOrCreate(
                ['name' => $product['name']],
                [
                    'description' => $product['description'],
                    'price' => $product['price'],
                    'stock' => $product['stock'],
                ],
            );
        }
    }
}
