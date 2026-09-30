<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Eletrônicos',
                'description' => 'Dispositivos eletrônicos para comunicação, entretenimento e uso diário.',
            ],
            [
                'name' => 'Informática',
                'description' => 'Equipamentos e periféricos para estudo, trabalho e produtividade.',
            ],
            [
                'name' => 'Acessórios',
                'description' => 'Itens complementares para proteger, transportar e conectar dispositivos.',
            ],
            [
                'name' => 'Casa',
                'description' => 'Produtos práticos para organização, conforto e utilidades domésticas.',
            ],
            [
                'name' => 'Games',
                'description' => 'Consoles e acessórios destinados a jogos eletrônicos.',
            ],
        ];

        foreach ($categories as $category) {
            Category::query()->updateOrCreate(
                ['name' => $category['name']],
                ['description' => $category['description']],
            );
        }
    }
}
