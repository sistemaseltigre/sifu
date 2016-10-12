<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Saldo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
    Schema::create('saldo', function (Blueprint $table) {
            $table->increments('id');
             $table->integer('representante_id');
             $table->integer('delegado_id');
             $table->integer('alumno_id');
             $table->string('saldo',30);
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
        schema::drop('saldo');
    }
}
