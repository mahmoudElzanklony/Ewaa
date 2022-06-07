<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsThreeInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_three_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade')->onUpdate('cascade');
            $table->string('ar_info');
            $table->string('en_info');
            $table->float('price');
            $table->float('pieces');
            $table->integer('price_in_points');
            $table->integer('points');
            $table->integer('in_stock');
            $table->integer('discount');
            $table->date('start_discount_date_three');
            $table->date('end_discount_date_three');
            $table->float('min_order');


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
        Schema::dropIfExists('products_three_infos');
    }
}
