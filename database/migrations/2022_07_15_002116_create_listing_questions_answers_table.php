<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListingQuestionsAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing_questions_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('listing_id')->constrained('listings_infos')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('question_id')->constrained('questions')->onUpdate('cascade')->onDelete('cascade');
            $table->string('answer');
            $table->string('type');
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
        Schema::dropIfExists('listing_questions_answers');
    }
}
