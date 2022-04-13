# Introduction

Flatpack is probably the quickest and simplest solution to create fast multi-purpose administration panel for your Laravel app.

Out of the box, it provides a rich stack of crafted components, ready to assemble.

With Flatpack you can:

- Quickly create CRUD (Create, Read, Update, Delete) interfaces for your [Eloquent models](https://laravel.com/docs/8.x/eloquent).
- Customise UI and components with simple and declarative [YAML](https://yaml.org/) files.
- Build a complete administration panel for your site in seconds.

## Requirements

- PHP 8+
- Laravel 8+

## Installation

Install the package via composer:

```text
composer require flatpack/flatpack
```

Publish the configuration file and the compiled assets.

```text
php artisan vendor:publish --tag="flatpack"
```

Flatpack is now ready.

Start by generating the template files for an Eloquent model. [See how](#generating-flatpack-files)

## Usage

### Generating Flatpack files

In this example, we are going to generate the templates for `App\Models\Post` model.

```sh
php artisan make:flatpack Post
```

This command generates two files into the `/flatpack` directory:

- A [form](#form-composition) template `/flatpack/posts/form.yaml`, that defines the composition of your posts form.
- A [list](#list-composition) template `/flatpack/posts/list.yaml`, that defines the layout composition of your posts table with pagination.

Let's check the result: `/backend/posts`

### Customizing form and list views

Now that Flatpack is up and running, we can start the assembling. The generated `form.yaml` and `list.yaml` can be [customized](/reference/) by defining **fields** or **columns** of your views.

Each one will map your Eloquent model attribute (if present) to a pre-made component with different options and capabilities (text editors, date pickers, handling relations, etc.).

Learn more about all the different types of [Form fields](/reference/form-fields) and [List columns](/reference/table-columns) and their options.

## Examples

The following examples illustrate a `form.yaml` and `list.yaml` for a hypothetical Post model.

### Form composition

This form has different input types (_e.g._ [text](../reference/form-fields.md#text-input), [textarea](../reference/form-fields.md#textarea-input) and [date pickers](../reference/form-fields.md#datetime-picker)) with individual options and validation rules.

@[code](../examples/posts/simple-form.yaml)

Learn more: [Form reference](/reference/form-fields)

### List composition

The paginated table rendered has some [searchable](../reference/table-columns.md#column-options) and [sortable](../reference/table-columns.md#column-options) columns.

@[code](../examples/posts/simple-list.yaml)

Learn more: [List reference](/reference/table-columns)
