<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetallesMensajes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('detalles_mensajes', function (Blueprint $table) {
            $table->increments('iddetalles_mensajes');
            $table->integer('mensaje_id');
            $table->integer('autor_id');
            $table->integer('autor_rol');
            $table->integer('destino_rol');
            $table->integer('destino_id');
            $table->string('mensaje');
            $table->dateTime('fecha');
            
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
        schema::drop('detalles_mensajes');
    }
}
