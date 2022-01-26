<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('book_questions', function (Blueprint $table) {
            $table->id();
            $table->string('sr_no')->nullable();
            $table->string('question_name');
            $table->string('question_des')->nullable();
            $table->string('add_by')->nullable();
            $table->string('color')->nullable();
            $table->string('bg_color')->nullable();
            $table->string('font_size')->nullable();
            $table->string('page_order')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('book_questions');
    }
}
