<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;
use App\Http\Controllers\admin\BookQuestionController;
use App\Http\Controllers\user\UserController;
use App\Http\Controllers\admin\ContactController;
use App\Http\Controllers\admin\AdminController;

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

Route::post('login', [Api\AuthController::class, 'login']);
Route::post('register', [Api\RegisterController::class, 'register']);
Route::post('forgot', [Api\ForgotController::class, 'forgot']);
Route::post('reset', [Api\ForgotController::class, 'reset']);
Route::get('email/resend/{user}', [Api\VerifyController::class, 'resend'])->name('verification.resend');
Route::get('email/verify/{id}', [Api\VerifyController::class, 'verify'])->name('verification.verify');; // Make sure to keep this as your route name
    
Route::group(['middleware' => ['auth:api']], function () {
    Route::get('user', [Api\AuthController::class, 'user']);
});

/*
|-----------------------------------------------------------
|   @
|   Route for admin 
|-----------------------------------------------------------
*/
/* get BookQuestion data */
Route::get('getDashboard',[AdminController::class,'getDashboardCount']);
/* get BookQuestion data */
Route::get('getBookQuestionList',[BookQuestionController::class,'getBookQuestionList']);
/* post BookQuestion data */
Route::post('/addbookquestion',[BookQuestionController::class,'addbookquestion']);
/* edit BookQuestion data */
Route::get('/editBookQuestionList/{id}',[BookQuestionController::class,'editBookQuestionList']);
/* update BookQuestion data */
Route::post('/updateBookQuestionList',[BookQuestionController::class,'updateBookQuestionList']);
/* delete BookQuestion data */
Route::get('/deleteBookQuestionList/{id}',[BookQuestionController::class,'deleteBookQuestionList']);
/* get contact data */
Route::get('/getContactList',[ContactController::class,'getContactList']);

/*
|-----------------------------------------------------------
|   @
|   Route For user
|-----------------------------------------------------------
*/

/* get BookQuestion data */
Route::get('/getQuestion',[UserController::class,'getQuestion']);
/* post contact-us data */
Route::post('/addContactUs',[UserController::class,'addContactUs']);

