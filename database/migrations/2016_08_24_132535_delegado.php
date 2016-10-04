<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Delegado extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delegado', function (Blueprint $table) {
            $table->increments('iddelegado');
            $table->string('cedula',20);
            $table->string('nombre',30);
            $table->string('profesion',30);
            $table->string('telefono_principal',15);
            $table->string('telefono_opcional',15);
            $table->string('email',60);
            $table->string('parentesco',15);
            $table->string('direccion');
            $table->integer('colegio_id');
            $table->integer('representante_id');
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
        //
    }
}
