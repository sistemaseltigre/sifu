<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Representante extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('representante', function (Blueprint $table) {
            $table->increments('idrepresentante');
            $table->string('cedula',20);
            $table->string('nombre',30);
            $table->string('profesion',30);
            $table->string('telefono_principal',30);
            $table->string('telefono_opcional',30);
            $table->string('email',60);
            $table->string('direccion');
            $table->string('estatus',30);
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
        schema::drop('representante');
    }
}
