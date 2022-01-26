<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\BookQuestionModel;
use Carbon\Carbon;


class BookQuestionController extends Controller
{

/*
|-----------------------------------------------------------
|   @
|   function for add BookQuestion list
|-----------------------------------------------------------
*/
   public function addbookquestion(Request $request){
        $add=BookQuestionModel::create([            
            'question_name'=>$request->question_name,
            'question_des'=>$request->question_des,
        ]);

        if($add){
            //print_r($add); die;
            $update=BookQuestionModel::where('id',$add->id)->first();
            $update->sr_no="que-".$add->id;
            $update->save();

            return response()->json(['message'=>'Book Question Add Successfully']);
        }

        return response()->json(['message'=>'Book Question Add Unsuccessfully']);

        // return redirect()->with('status','Your deatails is successfully save!');
    }  

/*
|-----------------------------------------------------------
|   @
|   function for fetch BookQuestion list
|-----------------------------------------------------------
*/

    public function getBookQuestionList(Request $request)
    {
// dd('hi');
         // $created_at=Carbon::parse($created_at)->format('Y-m-d');
        $list=BookQuestionModel::paginate(20);
        // $arr=[];
        // foreach($list as $li){
        //     $var=[
        //         'id' => $li->id,
        //         'sr_no' => $li->sr_no,
        //         'question_name' => $li->question_name,
        //         'question_des' => $li->question_des,
        //         'created_at' => Carbon::parse($li->created_at)->format('Y-m-d'),
        //     ];
        //     array_push($arr,$var);
        // }
       $object = (object)$list;
       return $object ;
    }

/*
|-----------------------------------------------------------
|   @
|   function for edit Bookquestion list
|-----------------------------------------------------------
*/

    public function editBookQuestionList(Request $request)
    {
   
        $list=BookQuestionModel::where('id','=',$request->id)->first();
        return $list;
    }

/*
|-----------------------------------------------------------
|   @
|   function for Update BookQuestion list
|------------------------------------------------------------
*/

    public function updateBookQuestionList(Request $request)
    {   
        // dd($request->id);
        $update=BookQuestionModel::find($request->id);
        //$update->sr_no = $request->sr_no;
        // dd($request->sr_no);
        $update->question_name = $request->question_name;
        $update->question_des = $request->question_des;

        $update->save();
          // dd($update);


         return response()->json(['message'=>'Book Question Update Successfully']);
    }

/*
|-----------------------------------------------------------
|   @
|   function for delete BookQuestion List
|------------------------------------------------------------
*/
    public function deleteBookQuestionList(Request $request)
    {
    
        $list=BookQuestionModel::where('id','=',$request->id)->delete();
        return response()->json(['message'=>'Book Question Deleted Successfully']);
    }

        // public function delete(Request $request,$id){
        //     $book=BookQuestionModel::find($id);
        //     $book->delete();
        //     // $book=BookQuestionModel::where('id','=',$request->id)->delete();
        //     return response()->json(['success'=>'Book Question Deleted Successfully']);
        // }

          //  $book=BookQuestionModel::where('id','=',$request->id)->delete();
            // return response()->json(['message'=>'Book Question Deleted Successfully']);
           
            // $list=BookQuestionModel::find($id);
            // $list->delete();
            // return response()->json(['message'=>'Book Question Deleted Successfully']);

}
