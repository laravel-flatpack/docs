# Forms

Display a form with fields mapped to model attributes, define custom actions, validations, etc.

::: details View form.yaml example
@[code](../examples/posts/advanced-form.yaml)
:::

## Content slots

By default, if you don't want (or don't need) to use content slots, you can simply put all your fields under the same **fields** definition.

```yaml
# /flatpack/posts/form.yaml

fields:
  # All form fields in one boxed fieldset
```

Alternatively, an advanced version of `form.yaml` composition can be defined using form content slots.

| Slot        | Description    | Allowed field types                 |
| :---------- | :------------- | :---------------------------------- |
| **header**  | Heading fields | `heading` or `editable`             |
| **toolbar** | Action buttons | `button` or `link`                  |
| **main**    | Main field set | Any [form field](#form-fields) type |
| **sidebar** | Sidebar fields | Any [form field](#form-fields) type |

Example:
@[code](../examples/form-slots.yaml)

## Form Fields

### Field options

| Option      | Description                                                                                                                      |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------- |
| type        | Form field type (see [Field Types](#field-types))                                                                                |
| label       | Field label text.                                                                                                                |
| placeholder | Input placeholder text.                                                                                                          |
| group       | Name of the grouping box to include the field within.                                                                            |
| span        | `half` for 50% width, `full` for 100% width.                                                                                     |
| rules       | String of validation rules (uses [Laravel Validation rules](https://laravel.com/docs/8.x/validation#available-validation-rules)) |

### Field types

<div class="columns"><div class="column">

- [Text](#text-input)
- [Email](#email-input)
- [Textarea](#textarea-input)
- [Editor](#editor)
- [Block editor](#block-editor)

</div><div class="column">

- [Date Picker](#date-picker)
- [Datetime Picker](#datetime-picker)
- [Editable](#editable)
- [Heading](#heading)

</div><div class="column">

- [Button](#button)
- [Relation](#relation)
- [Tag Input](#taginput)

</div></div>

### Text input

`text` - renders a single line text input box. This is the **default type** used if none is specified.

### Email input

`email` - renders a single line email input box.

### Textarea input

`textarea` - renders a textarea input box.

### Datetime picker

`datetime-picker` - renders a datetime picker input box.

### Editor

`editor` - renders a WYSIWYG text editor using [CkEditor](https://ckeditor.com/)

### Block editor

`block-editor` - renders a next generation block styled editor using [Editor.js](https://editorjs.io/)

### Heading

`heading` - renders a read-only heading field.

### Editable

`editable` - renders a label (or heading) that becomes a [text input](#text-input) on click.

### Relation

`relation` - renders a list of checkboxes.

### Tag input

`taginput` - renders a field with tags for related records.

### Button

`button` - renders a button.

## Form Validation

Validation rules can be applied to each form field by defining the `rules` option.
This option accepts all the available [Validation rules](https://laravel.com/docs/9.x/validation#available-validation-rules)
provided by Laravel.
