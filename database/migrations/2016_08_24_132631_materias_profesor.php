<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MateriasProfesor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('materias_profesor', function (Blueprint $table) {
            $table->increments('idmaterias_profesor');
            $table->integer('materia_id');
            $table->integer('profesor_id');
            $table->string('estatus',20);
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
        schema::drop('materias_profesor');
    }
}
