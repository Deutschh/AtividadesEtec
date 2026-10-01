<?php

use App\Http\Controllers\RestrictedAreaController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/area-restrita', [RestrictedAreaController::class, 'index']);
