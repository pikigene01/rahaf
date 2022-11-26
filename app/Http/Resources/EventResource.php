<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            "venue_info" => $this->venue_info,
            'event_type' => new EventTypeResource($this->eventType),
            'event_images' => $this->images->first(),
            'attendence_ranges' => $this->attendenceRanges->first(),
            'ranges' => $this->attendenceRanges,
            'created_at' => $this->created_at->format('M d Y'),
            'updated_at' => $this->updated_at->format('M d Y'),
        ];
    }
}
