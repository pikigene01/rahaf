<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use \Carbon\Carbon;

class EventBookResource extends JsonResource
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
            'event_id' => $this->event_id,
            'date' => Carbon::parse($this->date)->format('M d Y h:i:s'),
            'amount' => $this->amount,
            'status' => $this->status,
            'user' => $this->user,
            'number_of_people' => $this->number_of_people,
            'start_time' => Carbon::parse($this->start_time)->format('M d Y h:i:s'),
            'end_time' => Carbon::parse($this->end_time)->format('M d Y h:i:s'),
            'created_at' => $this->created_at->format('M d Y'),
            'updated_at' => $this->updated_at->format('M d Y'),
            'venue' => new EventResource($this->venue),
            'transaction' => $this->transaction,
        ];
    }
}
