# Generators

Flatpack offers a set of generators to help you quickly create your composition files or custom actions.

## Generate Flatpack files

To generate the Flatpack files inside `/flatpack` directory for a given model, you may use the `make:flatpack` Artisan command:

```sh
php artisan make:flatpack Post
```

This command generates two files into the `/flatpack` directory:

- A [form](README.md#form-composition) template `/flatpack/posts/form.yaml`, that defines the composition of your posts form.
- A [list](README.md#list-composition) template `/flatpack/posts/list.yaml`, that defines the layout composition of your posts table.
