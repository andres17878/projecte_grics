<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany; 

class Membres extends Model
{
    use HasFactory;
    protected $table = 'membres';
    protected $fillable = ['email', 'nom', 'cognom', 'carrec', 'foto', 'info'];

    public function publicacions(): BelongsToMany
    {
        return $this->belongsToMany(Publicacions::class, 'membres_publicacions');
    }
}
