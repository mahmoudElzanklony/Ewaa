<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListingStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing_statistics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('listing_id')->constrained('listings_infos')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('no_search');
            $table->integer('no_seen');
            $table->integer('no_contact_tried');
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
        Schema::dropIfExists('listing_statistics');
    }
}
