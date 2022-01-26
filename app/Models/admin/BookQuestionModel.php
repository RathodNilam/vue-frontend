<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookQuestionModel extends Model
{
    use HasFactory;

    public $table="book_questions";

 
    protected $fillable=[
        'sr_no',
        'question_name',
        'question_des',
        
    ];

}
