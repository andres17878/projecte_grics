<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Noticies extends Model
{
    use HasFactory;

    protected $table = 'noticies';
    protected $fillable = ['foto', 'titol', 'descripcio', 'data'];


    public function membres(): BelongsToMany
    {
        return $this->belongsToMany(Membres::class, 'membres_noticies');
    }

}
