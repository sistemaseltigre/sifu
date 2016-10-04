<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Banco extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banco', function (Blueprint $table) {
            $table->increments('idbanco');
            $table->string('banco',50);
            $table->string('cuenta',30);
            $table->string('tipo',15);
            $table->string('titular',60);
            $table->string('email',60);
            $table->string('cedula',25);
            $table->string('colegio_id');
            $table->rememberToken();
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
        Schema::drop('banco');
    }
}
