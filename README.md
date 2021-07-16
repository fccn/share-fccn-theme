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
DarkMode: true
---
```
## TODO

[ ] Define a _footer.md to save entity information
[ ] Solve Mobile menu errors
[ ] Fix header SVG background