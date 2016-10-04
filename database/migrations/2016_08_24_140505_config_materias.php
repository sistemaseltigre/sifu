<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConfigMaterias extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config_materias', function (Blueprint $table) {
            $table->increments('idconfig_materias');
            $table->integer('materia_id');
            $table->integer('profesor_id');
            $table->string('tipo',20);
            $table->integer('cortes');
             $table->integer('maximanota');
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
        schema::drop('config_materias');
    }
}
