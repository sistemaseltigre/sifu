<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetallesPagos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalles_pagos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tipo',20);
            $table->string('monto',50);
            $table->string('banco',30);
            $table->string('referencia',20);
            $table->integer('pagos_id');
            $table->string('estatus',20);
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
        schema::drop('detalles_pagos');
    }
}
