# Naming Conventions

## Class Naming Convention
(page/localPageName)-(tag)-(sectionPart(main,sub,etc))-(purpose)
example: page-header-sub-product-card
        checkout-btn-main-send

## SCSS Naming Convention
(page)-(section/tag)-(main/sub)-(purpose)
example: _header-main.scss
        _checkout-header-button.scss

# MAIN: styles
styles.scss imports from:
- header/
- _reboot

## HEADER/
- _main - bigger portion of the header; includes: __branding and navigation__
- _sub - smaller portion of the header; includes __social media links and small hours__

## MISC
- _reboot - to reboot default css styling
- variable/ - colors, font