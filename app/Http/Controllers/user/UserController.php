<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\admin\BookQuestionModel;
use App\Models\ContactUsModel;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller
{

/*
|-----------------------------------------------------------
|   @
|   function for get bookQuestion data
|-----------------------------------------------------------
*/
    public function getQuestion(Request $request)
    {
        // dd('hi');
          // $book = BookQuestionModel::paginate(1);
          // return $book;
      
      $data = BookQuestionModel::paginate(18);
      $object = (object)$data;
      return $object;
     // return response()->json_encode($data);
        // return response()->json($data);
    }
/*
|-----------------------------------------------------------
|   @
|   function for add contact us data
|-----------------------------------------------------------
*/

    public function addContactUs(Request $request){

        $validator = validator::make($request->all(),[
            'name'=>'required',
            'email'=>'required',
            'message'=>'required',
            'mobile_number'=>'required'
        ]);
        if($validator->fails()){
            return response()->json([
                'error'=>$validator->errors()
                ],401);
        }
        // dd($request->name);
        // dd('hi');
        ContactUsModel::create([

            'name'=>$request->name,
            'email'=>$request->email,
            'message'=>$request->message,
            'mobile_number'=>$request->mobile_number
        ]);
          return response()->json(['message'=>'your message successfully send']);
    }

    /*
|-----------------------------------------------------------
|   @
|   function for add contact us data
|-----------------------------------------------------------
*/
}
 // $validator = validator::make($request->all(),[
 //            'bank_name'=>'required|regex:/^[\pL\s\-]+$/u',
 //            'account_holder_name'=>'required|regex:/^[\pL\s\-]+$/u',
 //            'account_number'=>'required|regex:/\d{9,18}/',
 //            'ifsc_code'=>'required|regex:/[A-Z]{4}0[A-Z0-9]{6}/|max:11',
 //            'branch_name'=>'required|regex:/^[\pL\s\-]+$/u'
 //        ]);

 //        if($validator->fails()){
 //            return response()->json([
 //                    'error'=>$validator->errors()
 //            ],401);
 //        }
