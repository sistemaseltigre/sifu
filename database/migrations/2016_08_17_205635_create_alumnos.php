<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlumnos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumno', function (Blueprint $table) {
            $table->increments('idalumno');
            $table->string('cedula',30);
            $table->string('nombre',60);
            $table->string('apellido',60);
            $table->date('fechaNacimiento');
            $table->string('lugarNacimiento',100);
            $table->string('nacionalidad',100);
            $table->string('religion',10);
            $table->string('comunion',10);
            $table->string('genero',10);
            $table->string('procedencia',30);
            $table->string('foto',30);
            $table->integer('representante_id');
            $table->integer('delegado_id');
            $table->string('email',60);
            $table->string('direccion',250);
            $table->integer('grado_id');
            $table->string('estatus',20);
            $table->string('peso',20);
            $table->string('talla',20);
            $table->string('altura',20);
            $table->string('zapato',20);
            $table->string('observacion',200);
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
      Schema::drop('alumno');
    }
}
