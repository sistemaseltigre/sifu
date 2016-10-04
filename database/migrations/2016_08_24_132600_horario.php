<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Horario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('horario', function (Blueprint $table) {
            $table->increments('idhorario');
            $table->integer('materia_id');
            $table->integer('profesor_id');
            $table->integer('seccion_id');
            $table->string('dia',20);
            $table->time('hora_inicio');
            $table->time('hora_final');
            $table->time('horas_curso');
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
        schema::drop('horario');
    }
}
