# FCCN Share theme

A PicoCMS to render documentation for the [FCCN](https://fccn.pt).

## Usage

To use this theme, clone this repository into your PicoCMS themes folder.

```bash
git clone https://github.com/fccn/share-fccn-theme.git fccn-share-theme
```

Then, locate config folder and configure it in your `config.yml` file so the site renders with the FCCN share theme and not with the default.

```yaml
##
# Theme
#
theme: fccn-share-theme             # This should be set to 
```

### Templates

There are currently 2 available templates

* __index__ (Default template to create regular text pages)
* __page-toc__ (Renders a table of contents navigation on the right side of the page)

All templates support code highlighting with Highlight.js.

To use these templates, define the specific name in the frontmatter of the content __md__ file.

```markdown
---
Title: Page title
Template: index
---
```

### The _meta.md file

This file saves site wide information regarding entity information and Dark Mode availability

```markdown
---
site_logo: %assets%/img/pico-white.svg
footer: # Entity footer information
  name: Unidade de Computação Cientifica Nacional
  site: https://www.fccn.pt
  email: geral@fccn.pt
darkmode: true # can be set to true or false, depending on the necessity
area: knowledge
---
```

### _header.md Header metadata file

You can override the site logo by changing entity information in this file.

The follow example shows how the `_header.md` works.

```markdown
---
entity:
  url: https://www.fccn.pt/media/2021/02/header_logo.svg
  width: 208
  height: 37
  description: Unidade para a Computação Cientifica Nacional
---
```

Instead of using an absolute URL for the images you can use the `assets` directory. To use it, define a path to a file like this:

```markdown
entity:
  url: %assets_url%/images/logo.svg
```

#### Site areas by color

Areas can be defined and rendered accordingly. Colors are similar to the ones used in the main FCCN site.

Site areas by code (available values):
* connectivity
* computation
* collaboration
* knowledge
* security
* innovation

If the `area` is not defined in the `_meta.md` file, the system defaults to the main header (FCCN green color)
