<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListingsInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listings_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('category_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('area_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->string('ar_name');
            $table->string('en_name');
            $table->string('tu_name')->nullable();
            $table->text('ar_info');
            $table->text('en_info');
            $table->text('tu_info')->nullable();
            $table->string('ar_address');
            $table->string('en_address');
            $table->string('tu_address')->nullable();
            $table->string('rent_or_sale');
            $table->float('price');
            $table->float('meters_number');
            $table->string('youtube_link');
            $table->tinyInteger('whatapp_status')->default(0);
            $table->tinyInteger('contact_email_status')->default(0);
            $table->tinyInteger('payment_status')->default(0);
            $table->string('type');
            $table->softDeletes();
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
        Schema::dropIfExists('listings_infos');
    }
}
