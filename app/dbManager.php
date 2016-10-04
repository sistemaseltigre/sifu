<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\MySqlConnection;
use Illuminate\Database\Connection;
use App;
use Eloquent;
use Session;
class dbManager extends Eloquent {

    public $connection = 'default-connection';

    public static function configurar_bd($dbName=null)
	{        
		$config = App::make('config');

    // Will contain the array of connections that appear in our database config file.
    $connections = $config->get('database.connections');

    // This line pulls out the default connection by key (by default it's `mysql`)
    $defaultConnection = $connections[$config->get('database.default')];

    // Now we simply copy the default connection information to our new connection.
    $newConnection = $defaultConnection;
    // Override the database name.
    $newConnection['database'] = $dbName;

    // This will add our new connection to the run-time configuration for the duration of the request.
    App::make('config')->set('database.connections.'.$dbName, $newConnection);
	}

}
