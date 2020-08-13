<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use SEO;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index() {
        // SEO::setTitle('Página SEO');
        // SEO::setDescription('Ejemplo de descripción de la página');
        // SEO::opengraph()->setUrl('http://nigmacode.com');
        // SEO::setCanonical('https://nigmacode.com');
        // SEO::opengraph()->addProperty('type', 'articles');
        // SEO::twitter()->setSite('@Nigmacode');
        
        return view( 'app' );
    }
}
