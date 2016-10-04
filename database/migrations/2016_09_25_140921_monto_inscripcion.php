<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MontoInscripcion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monto_inscripcion', function (Blueprint $table) {
            $table->increments('id');
             $table->string('inscripcion',30);
             $table->string('seguro',30);
             $table->string('otro',30);
            $table->integer('periodo_id');
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
        schema::drop('monto_inscripcion');
    }
}
