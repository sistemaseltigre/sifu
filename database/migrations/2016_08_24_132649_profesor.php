<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Profesor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profesor', function (Blueprint $table) {
            $table->increments('idprofesor');
            $table->string('cedula_profesor',20);
            $table->string('nombre_profesor',30);
            $table->string('telefono_profesor',20);
            $table->string('email_profesor',20);
            $table->string('edad_profesor',5);
            $table->string('direccion_profesor');
            $table->integer('colegio_id');
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
        schema::drop('profesor');
    }
}
