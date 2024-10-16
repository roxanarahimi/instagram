<?php

namespace App\Http\Resources;

use App\Http\Controllers\DateController;
use Illuminate\Http\Resources\Json\JsonResource;

class InfoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "followers" => $this->followers,
            "followers_growth" => $this->followers_growth,
            "views" => $this->views,
            "accounts_reached" => $this->accounts_reached,
            "watch_time" => $this->watch_time,
            "profile_activity" => $this->profile_activity,
            "interaction" => $this->interaction,
            "accounts_engaged" => $this->accounts_engaged,
            "likes" => $this->likes,
            "comments" => $this->comments,
            "saves" => $this->saves,
            "shares" => $this->shares,

            "created_at" => explode(' ', (new DateController)->toPersian($this->created_at))[0],
            "updated_at" => explode(' ', (new DateController)->toPersian($this->updated_at))[0],
        ];
    }
}
