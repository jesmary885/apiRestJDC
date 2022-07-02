<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use Illuminate\Http\Request;
use App\Models\EmailEntity;

class EntityController extends Controller
{
  
    public function index()
    {
        $entities = Entity::all();

        return response()->json($entities);
    }

 
    public function store(Request $request)
    {
        $request->validate([
            'name' =>'required',
            'email' =>'email|required|unique:entities',
            'type' =>'required',
            'direction' =>'required',
            'phone' =>'required',

        ]);
        
        $entity = Entity::create($request->all());

        return response()->json([
        'entity' => $entity
        ]);
    }


    public function show(Entity $entity)
    {
        return response()->json($entity);
    }

    public function update(Request $request, Entity $entity)
    {
        $request->validate([
            'name' =>'required',
            'email' =>'required|email|unique:entities,email,' .$entity->id,
            'type' =>'required',
            'direction' =>'required',
            'phone' =>'required',

        ]);

        $entity->update($request->all());

        return response()->json([
            'entity' => $entity
        ]);


    }


    public function destroy(Entity $entity)
    {
        $emails = EmailEntity::where('entity_id',$entity->id)->first();

        if($emails){
            return response()->json([
                'message' => '¡La entidad es destinatario en un email, no puede ser eliminado!'
            ]);
        }else{
            $entity->delete();
            return response()->json([
                'message' => '¡El registro ha sido eliminado!'
            ]);
        }

    }
}
