<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSellersPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sellers_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')
                  ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('package_id')->constrained('packages')
                  ->onDelete('cascade')->onUpdate('cascade');
            $table->tinyInteger('admin_control')->default(0);
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
        Schema::dropIfExists('sellers_packages');
    }
}
