<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Mensaje extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('mensaje', function (Blueprint $table) {
            $table->increments('idmensaje');
            $table->integer('autor_id');
            $table->integer('autor_rol');
            $table->string('asunto',20);
            $table->dateTime('fecha');
            $table->integer('periodo_id');
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
         schema::drop('mensaje');
    }
}
