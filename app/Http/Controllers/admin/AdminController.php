<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\BookQuestionModel;
use App\Models\ContactUsModel;

class AdminController extends Controller
{
    public function getDashboardCount()
    {
        $questionCount=BookQuestionModel::count();
        $contactCount=ContactUsModel::count();

        //return response()->json('questionCount');

        return response()->json([
            'status'=> 'Success',
            'message' => 'Dashboard count',
            'data'=>['questionCount'=>$questionCount,'contactCount'=>$contactCount],
            'error'=>[],
        ], 200);
    }
}
