<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_entity', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger('email_id');
            $table->foreign('email_id')->references('id')->on('emails')->onDelete('cascade');

            $table->unsignedBigInteger('entity_id');
            $table->foreign('entity_id')->references('id')->on('entities')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('email_entity');
    }
};
