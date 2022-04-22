# Custom actions

In addition to the [Flatpack standard actions](../reference/README.md), you can also create your own custom actions or extend existing ones.

## Generate an action class

To generate a custom action, you may use the `flatpack:action` Artisan command:

```sh
php artisan flatpack:action custom-action
```

This command generates a file under the `App\Actions\Flatpack` namespace:

@[code](../examples/actions/CustomAction.php)

The action class extends `Flatpack\Actions\FlatpackAction` and must implement the `Flatpack\Actions\Action` interface.

## Registering the action

In order to use the action, you must register it in the `flatpack.php` configuration file:

```php
<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Actions
    |--------------------------------------------------------------------------
    |
    | Flatpack form or list actions. You can add your own actions here.
    |
    */
    'actions' => [
        'custom-action' => App\Actions\CustomAction::class,

        // ...
    ],
```

Now the action is ready to be used in the form or list composition.

```yaml
custom-action:
  type: button
  label: Click me
  action: custom-action # The action name
```

## Handling the action

When an action is triggered, the action class will be initialised and the `handle` method will be called.

Inside the `handle` method, you may use the following properties:

| Property name | Description                              | Notes                    |
| :------------ | :--------------------------------------- | :----------------------- |
| **entity**    | The entity name (plural)                 | _e.g._ "users"           |
| **model**     | The eloquent model class name            | _e.g._ "App\Models\User" |
| **entry**     | The current eloquent active record       | Available on forms only  |
| **fields**    | The form field current values            | Available on forms only  |
| **files**     | The temporary files attached to the form | Available on forms only  |
| **selected**  | Array of ids of the selected records     | Available on lists only  |
| **user**      | The currently logged in user             |                          |

### Utility methods

The action class instance exposes the following methods you can use:

| Method         | Description                                                                                   |
| :------------- | :-------------------------------------------------------------------------------------------- |
| **entityName** | Returns the entity name. The `$plural` attribute can be set to `true` to get the plural form. |
| **isBulk**     | Returns `true` if bulk action is performed (Lists only)                                       |

### Example

In the example below, we will override the `foo` attribute of the active record `$this->entry` and save the changes to the database using Eloquent model's `save` method.

The method `getMessage`, if defined, will be called to retrieve the action's success message.

```php
<?php

namespace App\Actions\Flatpack;

use Flatpack\Actions\FlatpackAction;
use Flatpack\Contracts\FlatpackAction as FlatpackActionContract;

class CustomAction extends FlatpackAction implements FlatpackActionContract
{
    /**
     * Model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $entry;

    /**
     * Get success message.
     *
     * @return string
     */
    public function getMessage()
    {
        return __(':entity has been updated.', [
            'entity' => $this->entityName(),
        ]);
    }

    /**
     * Handle action.
     *
     * @return void
     */
    public function handle()
    {
        $this->entry->foo = 'bar';
        $this->entry->save();
    }
}
```

## Extending actions

You can extend existing actions by generating a new action that extends the original action.

In this example, we will extend the "save" action.

Generate a new custom action, using the `flatpack:action` Artisan command:

```sh
php artisan flatpack:action custom-save
```

The generated file will be placed under the `App\Actions\Flatpack` namespace.

The action class will extend the `Flatpack\Actions\Save` class, overriding the `authorize` method logic to check if the current user has the required permissions to perform the action.
@[code](../examples/actions/CustomSave.php)

We now have to register the action in the `config/flatpack.php` configuration file. Since the `Save` action is already registered, we can simply replace it with the new action:

```php{6}
<?php

return [

    'actions' => [
        'save' => App\Actions\CustomSave::class,

        // ...
    ],
```

Finally, the extended action is ready to be used:

```yaml
save:
  type: button
  label: Click me
  action: save # The action name
```
