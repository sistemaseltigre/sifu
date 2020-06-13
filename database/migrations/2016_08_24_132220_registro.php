<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Registro extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registro', function (Blueprint $table) {
            $table->increments('id');
            $table->string('colegio',50);
            $table->string('nombre_contacto',30);
            $table->string('codigo',45);
            $table->date('fecha');
            $table->string('email',100);
            $table->string('telefono',45);
            $table->string('pais_id',45);
            $table->string('licencia',45);
            $table->string('password',100);
            $table->string('usuario',100);
            $table->string('imagen',100);
            $table->string('dbName',100);
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
        Schema::drop('registro');
    }
}
