<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admins extends Model
{
    use HasFactory;

    // This model is for the admins table, depends on the Users table using foreign key user_id
    protected $table = 'admins';
    protected $fillable = ['user_id', 'email', 'password'];

}
