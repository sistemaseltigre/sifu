<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CargaNota extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('carga_nota', function (Blueprint $table) {
            $table->increments('idcarga_nota');
            $table->integer('materia_id');
            $table->integer('seccion_id');
            $table->integer('profesor_id');
            $table->integer('alumno_id');
            $table->string('corte1',10);
            $table->string('corte2',10);
            $table->string('corte3',10);
            $table->string('corte4',10);
            $table->string('corte5',10);
            $table->string('corte6',10);
            $table->string('corte7',10);
            $table->string('corte8',10);
            $table->string('corte9',10);
            $table->string('corte10',10);
            $table->string('definitiva',10);
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
        Schema::drop('carga_nota');
    }
}
