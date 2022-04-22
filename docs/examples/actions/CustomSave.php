<?php

namespace App\Actions\Flatpack;

use Flatpack\Actions\Save;
use Flatpack\Contracts\FlatpackAction;

class CustomSave extends Save implements FlatpackAction
{
    /**
     * Action authorization.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->isOwner() || $this->hasPermissions();
    }

    /**
     * Determine if the user is the owner of the entry.
     *
     * @return bool
     */
    private function isOwner()
    {
        return $this->entry->user_id === $this->user->id;
    }

    /**
     * Determine if the user has the permission to create or update the entry.
     *
     * @return bool
     */
    private function hasPermissions()
    {
        return in_array(true, [
            $this->user->can('create', $this->model),
            $this->user->can('update', $this->model)
        ]);
    }
}
