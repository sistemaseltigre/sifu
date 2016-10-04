<?php

namespace App\Http\Controllers\plantilla;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
class adminController extends Controller
{
    public function index()
    {
      return view('plantilla/adminLayaout');
    }
}
