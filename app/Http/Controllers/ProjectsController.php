<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Projects;

class ProjectsController extends Controller
{
    public function index() {
        $projects = Projects::all();

        foreach($projects as $project) 
            $project->img = json_decode($project->img);

        return $projects;
    }
 
    public function find(Projects $project) {
        $project->img = json_decode($project->img);
        return $project;
    }
}
