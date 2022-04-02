---
home: true
heroImage: /flatpack-logo.png
tagline: Administration panel for Laravel, ready to assemble.
actions:
  - text: Quick Start
    link: /#quick-start
    type: primary
  - text: Learn More
    link: /guide/
    type: secondary
features:
  - title: Ready
    details: Flatpack ships with a rich set of pre-built components ready to be assembled.
  - title: Quick
    details: Start generating a yaml configuration file and setup a complete admin UI in seconds.
  - title: Easy
    details: Form validation, relations, custom actions, table search, sorting, and much more.
footer: MIT Licensed | Copyright © 2022-present Fausto Quaggia
---

# Quick start

Install the package via composer:

```text
composer require flatpack/flatpack
```

Publish the configuration file and the compiled assets:

```text
php artisan vendor:publish --tag="flatpack"
```

Generate table and form for `App\Models\Post` model (example)

```text
php artisan make:flatpack Post
```

:tada: Ready! Now visit: `/backend/posts`

Learn how to customize list and form templates.
[Read more](/guide/)

![Latest Version on Packagist](https://img.shields.io/packagist/v/flatpack/flatpack.svg?style=flat-square)
