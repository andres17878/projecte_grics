<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Linies extends Model
{
    use HasFactory;

    protected $table = 'linies';
    protected $fillable = ['foto', 'titol', 'descripcio', 'data'];

    public function membres(): BelongsToMany
    {
        return $this->belongsToMany(Publicacions::class, 'linies_membres');
    }
}


