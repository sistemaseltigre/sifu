<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Colegio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('colegio', function (Blueprint $table) {
            $table->increments('id');
             $table->string('colegio',60);
             $table->string('nombre_contacto',60);
             $table->string('codigo',60);
             $table->string('email',80);
             $table->string('telefono',60);
             $table->string('telefono2',60);
             $table->string('direccion',255);
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
        schema::drop('colegio');
    }
}
