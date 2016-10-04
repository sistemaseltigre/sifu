<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlumnosInscritos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumnos_inscritos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('alumno_id');
            $table->date('fecha');
            $table->integer('periodo_id');
            $table->string('seguro',10);
            $table->string('condicion',10);
            $table->integer('cuota_id');
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
        schema::drop('alumnos_iscritos');
    }
}
