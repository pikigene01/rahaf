<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CountryCases;



class HomeController extends Controller
{
    public function index(){
        $country_cases = CountryCases::all();
        return Inertia::render('Welcome', [
            "covidrecords" => $country_cases,
        ]);
    }

    public function save_record(Request $request){
        $covid_data = $request->validate([
            'name' => 'required | string',
            'slug' => 'required | string',
            'country_code' => 'required',
            'new_confirmed' => 'required',
            'total_confirmed' => 'required | numeric',
            'new_deaths' => 'required | numeric',
            'total_deaths' => 'required | numeric',
            'new_recovered' => 'required | numeric',
            'total_recovered' => 'required | numeric',
        ]);

                $new_record = CountryCases::create($covid_data);
                // $new_record->name = $request->name;
                // $new_record->slug = $request->slug;
                // $new_record->country_code = $request->country_code;
                // $new_record->new_confirmed = $request->new_confirmed;
                // $new_record->total_confirmed = $request->total_confirmed;
                // $new_record->new_deaths = $request->new_deaths;
                // $new_record->total_deaths = $request->total_deaths;
                // $new_record->new_recovered = $request->new_recovered;
                // $new_record->total_recovered = $request->total_recovered;
                $new_record->save();

return back()->with('message', 'Data Saved Successfully.');
    }
}
