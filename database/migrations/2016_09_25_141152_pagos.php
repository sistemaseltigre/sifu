<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Pagos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
    Schema::create('pagos', function (Blueprint $table) {
            $table->increments('id');
             $table->date('fecha');
             $table->integer('alumno_id');
             $table->string('monto',30);
            $table->string('estatus',30);
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
        schema::drop('pagos');
    }
}
