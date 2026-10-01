<?php

namespace App\Http\Controllers;

use App\Http\Middleware\CheckPermission;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\View\View;

class RestrictedAreaController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            CheckPermission::class,
        ];
    }

    public function index(): View
    {
        return view('restricted-area');
    }
}
