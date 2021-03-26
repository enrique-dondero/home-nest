<?php

namespace App\Http\Resources;

use App\Nova\BusinessReviewImage;

class BusinessReviewResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $business = $this->business;
        unset($this->business_id);
        return array_merge(parent::toArray($request), [
            //'business' => new BusinessResource($business),
            'images' => ReviewImageResource::collection($this->images)
        ]);
    }
}
