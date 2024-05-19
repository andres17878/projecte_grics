<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Projectes extends Model
{
    use HasFactory;

    protected $table = "projectes";

    protected $fillable = ['foto', 'titol', 'integrants', 'resum', 'entitats', 'resultats', 'logos_entitats', 'data'];


    public function membres(): BelongsToMany
    {
        return $this->belongsToMany(Membres::class, 'membres_projectes');
    }
}
