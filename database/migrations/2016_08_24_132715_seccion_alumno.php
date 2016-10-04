<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SeccionAlumno extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('seccion_alumno', function (Blueprint $table) {
            $table->increments('idseccion_alumno');
            $table->integer('alumno_id');
            $table->integer('seccion_id');
            $table->integer('grado_id');
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
        schema::drop('seccion_alumno');
    }
}
