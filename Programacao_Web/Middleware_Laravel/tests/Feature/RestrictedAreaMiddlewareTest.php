<?php

namespace Tests\Feature;

use Tests\TestCase;

class RestrictedAreaMiddlewareTest extends TestCase
{
    public function test_middleware_blocks_access_and_displays_required_message(): void
    {
        $response = $this->get('/area-restrita');

        $response->assertForbidden();
        $response->assertSeeText('Acesso negado');
        $response->assertSeeText('Você não tem permissão para acessar este site.');
        $response->assertSeeText('Favor entrar em contato com o administrador.');
        $response->assertDontSeeText('Você conseguiu acessar esta página.');
    }
}
