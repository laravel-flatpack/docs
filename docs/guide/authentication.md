# Authentication

::: warning
By default, the authentication middleware is not set. [You need to manually add an authentication middleware](#authentication-middleware) in `config/flatpack.php` before publishing your site.
:::

Flatpack does not have an authentication system built in. However, it fully supports any [Laravel authentication](https://laravel.com/docs/8.x/authentication) solution.

A suggested method is to install a [Starter Kit](https://laravel.com/docs/8.x/starter-kits), like [Laravel Breeze](https://laravel.com/docs/8.x/starter-kits#laravel-breeze), the installation is summarized below.

Install Laravel Breeze package via composer:

```sh
composer require laravel/breeze --dev
```

Create authentication views, routes, controllers and other resources:

```sh
php artisan breeze:install

npm install
npm run dev
php artisan migrate
```

Done! Laravel Breeze's routes are defined within the `routes/auth.php` file.

---

## Authentication Middleware

Add the authentication middleware in the `middleware.before` array in `config/flatpack.php` configuration file, to protect all Flatpack routes with authentication.

```php{13}
/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
|
| Middleware to be applied to all Flatpack routes.
|
*/
'middleware' => [

    'before' => [
        'web',
        'auth'
    ],

    'after' => []
]
```
