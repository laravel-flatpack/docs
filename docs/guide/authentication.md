# Authentication

By default, all users can access Flatpack in local environment. However, in other environments,
it is important to take an extra step to ensure that only the correct users have access to it.

## Authorizing access to users

For non-local environments (e.g. Production), the `FlatpackUser` contract must be implemented in your `App/Model/User` model to grant access to Flatpack. The `isFlatpackAdmin()` method should return true or false depending on whether the user is allowed to access Flatpack.

```php
<?php

namespace App\Models;

use Flatpack\Contracts\FlatpackUser;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements FlatpackUser
{
    // ...

    public function isFlatpackAdmin(): bool
    {
        return in_array($this->email, [
            'admin@yourdomain.com'
        ]);
    }
}
```

In this example, the `isFlatpackAdmin()` method is configured to return true if the user's email address is in an array of whitelisted addresses.
