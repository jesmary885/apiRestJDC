<?php

use App\Http\Controllers\EmailController;
use App\Http\Controllers\EntityController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('users',UserController::class)->only('index','store','update','destroy','show');
Route::apiResource('entities',EntityController::class)->only('index','store','update','destroy','show');
Route::apiResource('emails',EmailController::class)->only('index','store','show','destroy');


