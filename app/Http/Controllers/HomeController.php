<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return Inertia::render('User/index', [
            'user' => \App\Models\User::find(2)->toArray(),
        ])->withViewData(['meta' => 'index']);
    }
    public function about()
    {
        return Inertia::render('User/about', [
            'user' => \App\Models\User::find(2)->email,
        ])->withViewData(['meta' => 'about']);
    }
}
