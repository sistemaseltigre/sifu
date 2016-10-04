<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DetallesCuotas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('detalles_cuotas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('monto',40);
            $table->date('fecha');
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
        schema::drop('detalles_cuotas');
    }
}
