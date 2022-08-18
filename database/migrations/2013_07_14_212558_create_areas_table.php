<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('areas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('city_id')->constrained('cities')->onUpdate('cascade')->onDelete('cascade');
            $table->string('ar_name');
            $table->string('en_name');
            $table->string('tu_name')->nullable();
            $table->text('ar_info');
            $table->text('en_info');
            $table->text('tu_info')->nullable();
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
        Schema::dropIfExists('areas');
    }
}
