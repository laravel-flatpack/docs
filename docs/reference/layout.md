# Layout

In order to customize the general layout, such as the navigation bar of your admin area, you need to create
a new configuration file in `/flatpack/layout.yaml`

## Sidebar

Sidebar navigation menu can be customized by defining the following options for each menu item:

| Option    | Description                                                                 | Required |
| :-------- | :-------------------------------------------------------------------------- | :------- |
| **url**   | absolute url of the link item                                               | Yes      |
| **title** | text of the link item                                                       | Yes      |
| **icon**  | icon name (check out [Heroicons](https://heroicons.com/) for the full list) | Yes      |

The following sample illustrates a blog's backend menu, including tabs for Posts, Categories, Tags and Users.

```yaml
# flatpack/layout.yaml
sidebar:
  posts:
    url: /backend/posts
    title: Posts
    icon: book-open

  categories:
    url: /backend/categories
    title: Categories
    icon: tag

  tags:
    url: /backend/tags
    title: Tags
    icon: hashtag

  users:
    url: /backend/users
    title: Users
    icon: user-group
```
