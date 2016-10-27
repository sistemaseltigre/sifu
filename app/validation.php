<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Validator as LaravelValidator;
class validation extends LaravelValidator
{
      static function validateCurrentPassword($value)
    {
        return Hash::check($value, Auth::user()->password);
    }
}
