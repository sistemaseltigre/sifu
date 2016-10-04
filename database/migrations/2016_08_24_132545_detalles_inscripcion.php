<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetallesInscripcion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detalles_inscripcion', function (Blueprint $table) {
            $table->increments('iddetalles_inscripcion');
            $table->string('descripcion');
            $table->string('inscripcion_id');
            $table->string('colegio_id');
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
        schema::drop('detalles_inscripcion');
    }
}
