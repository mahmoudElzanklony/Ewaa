<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsPiecesInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_pieces_infos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->onUpdate('cascade')->onDelete('cascade');
            $table->text('ar_info');
            $table->text('en_info');
            $table->float('price');
            $table->integer('in_stock');
            $table->integer('price_in_points');
            $table->integer('points');
            $table->integer('discount');
            $table->date('start_discount_date');
            $table->date('end_discount_date');
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
        Schema::dropIfExists('products_pieces_infos');
    }
}
