<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageModel extends Model
{
    protected $table = 'pages';
    protected $primaryKey = 'pageid';
    public $timestamps = false;

    protected $fillable = [
        'category',
        'pagetitle',
        'pagetext',
    ];

}