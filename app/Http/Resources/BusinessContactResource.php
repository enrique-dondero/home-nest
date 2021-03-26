<?php

namespace App\Http\Resources;

class BusinessContactResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type' => $this->type,
            'value' => $this->value,
        ];
    }
}
