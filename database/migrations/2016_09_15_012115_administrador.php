<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Administrador extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void*/
   public function up()
    {
        Schema::create('administrador', function (Blueprint $table) {
            $table->increments('idadministrador');
            $table->string('cedula',20);
            $table->string('nombre',40);
            $table->string('telefono',20);
            $table->string('email',60);
            $table->string('tipo',60);
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
        schema::drop('administrador');
    }
}
