<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PagoInscripcion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('pago_inscripcion', function (Blueprint $table) {
            $table->increments('idpago_inscripcion');
            $table->string('tipo',25);
            $table->string('monto',30);
            $table->string('banco',10);
            $table->string('referencia',20);
            $table->integer('inscripcion_id');
            $table->string('colegio_id');
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
        schema::drop('pago_inscripcion');
    }
}
