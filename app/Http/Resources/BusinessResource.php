<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;

class BusinessResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $isBookmarked = count($this->bookmark) > 0;
        unset($this->bookmark);
        return array_merge(
            parent::toArray($request),
            [
                'is_bookmarked' => $isBookmarked,
                'user_id' =>  $this->user ? ($this->user->id == auth()->id() ? $this->user->uuid : null) : null,
                'avatar' => $this->avatar ? Storage::disk('s3')->url($this->avatar) : null,
                'cover_photo' => $this->cover_photo ? Storage::disk('s3')->url($this->cover_photo) : null,
                'optional_attributes' => BusinessOptionalAttributeResource::collection($this->attributes),
                'categories' => CategoryResource::collection($this->categories),
                'posts' => BusinessPostResource::collection($this->posts),
                'opening_hours' => BusinessHoursResource::collection($this->openingHours),
                'reviews'    => BusinessReviewResource::collection($this->reviews),
                'contacts'    => BusinessContactResource::collection($this->contacts),
                'attributes'    => BusinessAttributeResource::collection($this->attributes),
            ]
        );
    }
}
