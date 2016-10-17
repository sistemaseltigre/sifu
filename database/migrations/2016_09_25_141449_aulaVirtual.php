<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AulaVirtual extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aulaVirtual', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('idusuario');
            $table->string('asunto',45);
            $table->text('descripcion');
            $table->integer('cantidad');
            $table->date('fecha');
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