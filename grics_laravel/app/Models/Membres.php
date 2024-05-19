<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany; 

class Membres extends Model
{
    use HasFactory;
    protected $table = 'membres';
    protected $fillable = ['email', 'nom', 'cognom', 'carrec', 'foto', 'info', 'cv', 'data'];

    public function publicacions(): BelongsToMany
    {
        return $this->belongsToMany(Publicacions::class, 'membres_publicacions');
    }

    public function linies(): BelongsToMany
    {
        return $this->belongsToMany(Linies::class, 'linies_membres');
    }

    public function noticies(): BelongsToMany
    {
        return $this->belongsToMany(Linies::class, 'membres_noticies');
    }

    public function projectes(): BelongsToMany
    {
        return $this->belongsToMany(Projectes::class, 'membres_projectes');
    }

}
