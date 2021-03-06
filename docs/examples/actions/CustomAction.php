<?php

namespace App\Actions\Flatpack;

use Flatpack\Actions\FlatpackAction;
use Flatpack\Contracts\FlatpackAction as FlatpackActionContract;

class CustomAction extends FlatpackAction implements FlatpackActionContract
{
    /**
     * Action authorization.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Handle action.
     *
     * @return void
     */
    public function handle()
    {
        // Do something...
    }
}
