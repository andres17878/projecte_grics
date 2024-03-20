<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Publicacions extends Model
{
    use HasFactory;
    protected $table = 'publicacions';
    protected $fillable = ['cognom', 'nom', 'anyo', 'titol', 'revista', 'numero', 'volum', 'resum', 'link', 'membre_id', 'data'];

    public function membres() : BelongsToMany
    {
        return $this->belongsToMany(Membres::class, 'membres_publicacions');
    }
}
