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
* __code__ (Loads Highlight.js for code highlighting)

To use these templates, define the specific name in the frontmatter
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
---
```

### The _header.md

The header file saves the entity logo information and the flag to display both logos on the page

```markdown
---
entity:
    url: https://www.fccn.pt/media/2021/02/header_logo.svg
    width: 208
    height: 37
    description: Unidade para a Computação Cientifica Nacional  # The alt text for the logo
show_both_logos: false  # If true shows the FCCN and entity logo on the header. If false, only shows the entity logo
---
```

## TODO

* Solve Mobile menu errors
* Fix header SVG background