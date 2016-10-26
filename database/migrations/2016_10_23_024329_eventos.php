<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Eventos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('eventos', function (Blueprint $table) {
            $table->increments('id');
             $table->string('titulo',60);
             $table->string('inicio',40);
             $table->string('fin',40);
             $table->string('allDay',10);
             $table->integer('rol_id');
             $table->integer('create_id');
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
      schema::drop('eventos');
    }
}
