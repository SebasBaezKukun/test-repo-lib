---
id: borders-shadows
title: Borders & Shadows
sidebar_title: Borders & Shadows
---

Kukun has classes for build custom borders and shadows for our elements.

## Shadows
The elements can have a depht, that determines how far raised or close to the page the element is.  
We can apply this shadow effect by adding a class `.k-blur-` to an HTML tag.

### Source code

<!--DOCUSAURUS_CODE_TABS-->

<!-- General -->
```
$k-blur-1: 0 2px 2px 0 rgba(0,0,0,0.12);
$k-blur-2: 0 4px 5px 0 rgba(0,0,0,0.12);
$k-blur-3: 0 8px 17px 2px rgba(0,0,0,0.12);
$k-blur-4: 0 16px 24px 2px rgba(0,0,0,0.12);
$k-blur-5: 0 24px 38px 3px rgba(0,0,0,0.12);
```

<!-- Blur -->
```
.k-blur-1 { box-shadow: $k-blur-1; }
.k-blur-2 { box-shadow: $k-blur-2 }
.k-blur-3 { box-shadow: $k-blur-3; }
.k-blur-4 { box-shadow: $k-blur-4; }
.k-blur-5 { box-shadow: 0 24px 38px 3px rgba(0,0,0,0.12); }
```

<!-- Blur inset -->
```
.k-blur-inset-1 { box-shadow: inset $k-blur-1; }
.k-blur-inset-2 { box-shadow: inset $k-blur-2 }
.k-blur-inset-3 { box-shadow: inset $k-blur-3; }
.k-blur-inset-4 { box-shadow: inset $k-blur-4; }
.k-blur-inset-5 { box-shadow: inset 0 24px 38px 3px rgba(0,0,0,0.12); }
```

<!-- Blur hover  -->
```
.k-blur-hover-1,
.k-blur-hover-2, 
.k-blur-hover-3,
.k-blur-hover-4,
.k-blur-hover-5 {
    transition: box-shadow 0.3s
}

.k-blur-hover-1 {
    box-shadow: $k-blur-1;
    &:hover {
        box-shadow: $k-blur-2;
    }
}

.k-blur-hover-2 {
    box-shadow: $k-blur-2;
    &:hover {
        box-shadow: $k-blur-3;
    }
}

.k-blur-hover-3 {
    box-shadow: $k-blur-3;
    &:hover {
        box-shadow: $k-blur-4;
    }
}

.k-blur-hover-4 {
    box-shadow: $k-blur-4;
    &:hover {
        box-shadow: $k-blur-5;
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

### How to use
You can use `.k-blur-{1-5}`, `.k-blur-inset-{1-5}` and `.k-blur-hover-{1-4}`

<style>
.blur-wrapper {
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
}
.blur-wrapper div {
    padding: 20px;
    margin-right: 30px;
    cursor: pointer
}
</style>

**Blur**
<div class="kukun-docs-example blur-wrapper">
    <div class="k-blur-1">Blur 1</div>
    <div class="k-blur-2">Blur 2</div>
    <div class="k-blur-3">Blur 3</div>
    <div class="k-blur-4">Blur 4</div>
    <div class="k-blur-5">Blur 5</div>
</div>

**Inset**
<div class="kukun-docs-example blur-wrapper">
    <div class="k-blur-inset-1">Inset 1</div>
    <div class="k-blur-inset-2">Inset 2</div>
    <div class="k-blur-inset-3">Inset 3</div>
    <div class="k-blur-inset-4">Inset 4</div>
    <div class="k-blur-inset-5">Inset 5</div>
</div>

**With hover**
<div class="kukun-docs-example blur-wrapper">
    <div class="k-blur-hover-1">Hover 1</div>
    <div class="k-blur-hover-2">Hover 2</div>
    <div class="k-blur-hover-3">Hover 3</div>
    <div class="k-blur-hover-4">Hover 4</div>
</div>

---

## Borders
The elements can have a custom border, we can apply this border adding `.k-border-` classes to an HTML tag.

### Source code
```
.k-border {
    border: 0.5px solid rgb(205, 205, 205);
}

.k-border-radius {
    border-radius: 4px;
}

@for $i from 1 through 100 {
    .k-border-radius-#{$i} {
        border-radius: $i + px;
    }
}

@for $i from 1 through 40 {
    .k-border-width-#{$i} {
        border-width: $i + px;
    }
}
```
### How to use
You can use:  
`.k-border`  
`.k-border-top`  
`.k-border-bottom`  
`.k-border-left`  
`.k-border-right`  
`.k-border-radius`  
`.k-border-radius-{1-30} (in px)`  
`.k-border-radius-50` -> sets `border-radius: 50%`  
`.k-border-width-{1-50} (in px)`

<style>
.border-example div {
    padding: 20px
}
.border-example-multiple {
    display: flex;
    flex-wrap: wrap;
    align-items: center
}
.border-example-multiple div { margin-right: 30px }
</style>


**Border**

<div class="kukun-docs-example border-example">
    <div class="k-border">
        k-border
    </div>  
    <br />
    <div class="k-border-top">
        k-border-top
    </div>
    <br />  
    <div class="k-border-bottom">
        k-border-bottom
    </div>
    <br />  
    <div class="k-border-left">
        k-border-left
    </div>
    <br />  
    <div class="k-border-right">
        k-border-right
    </div>  
</div>

```
<div class="k-border">
    k-border
</div>  
<div class="k-border-top">
    k-border-top
</div>  
<div class="k-border-bottom">
    k-border-bottom
</div>  
<div class="k-border-left">
    k-border-left
</div>  
<div class="k-border-right">
    k-border-right
</div>  
```

**Border radius**
<div class="kukun-docs-example border-example border-example-multiple">
    <div class="k-border k-border-radius-8">
        k-border + k-border-radius-8
    </div>  
    <div class="k-border k-border-radius-18">
        k-border + k-border-radius-18
    </div>  
    <div class="k-border k-border-radius-30">
        k-border + k-border-radius-30
    </div>  
    <div class="k-border k-border-radius-50" style="margin-top: 10px">
        k-border-radius-50
    </div>  
</div>

```
<div class="k-border k-border-radius-8">
    k-border + k-border-radius-8
</div>  
<div class="k-border k-border-radius-18">
    k-border + k-border-radius-18
</div>  
<div class="k-border k-border-radius-30">
    k-border + k-border-radius-30
</div>  
<div class="k-border k-border-radius-50">
    k-border-radius-50
</div>  
```

**Border width**
<div class="kukun-docs-example border-example border-example-multiple">
    <div class="k-border k-border-width-4">
        k-border + k-border-width-4
    </div>  
    <div class="k-border k-border-width-7">
        k-border + k-border-width-7
    </div>  
    <div class="k-border k-border-width-9">
        k-border + k-border-width-9
    </div>  
</div>

```
<div class="k-border k-border-width-4">
    k-border + k-border-width-4
</div>  
<div class="k-border k-border-width-7">
    k-border + k-border-width-7
</div>  
<div class="k-border k-border-width-9">
    k-border + k-border-width-9
</div>  
```

**Border color**  
You can use `.k-bcolor-{name-color}` to set `border-color` to the element.  
`.k-btcolo-{name-color}`  
`.k-bbcolor-{name-color}`  
`.k-blcolor-{name-color}`  
`.k-brcolor-{name-color}`  

<div class="kukun-docs-example border-example border-example-multiple">
    <div class="k-border k-bcolor-primary-accent k-border-width-4">
        primary-accent
    </div>  
    <div class="k-border-left k-blcolor-primary-accent k-border-width-4">
        primary-accent
    </div>  
    <div class="k-border k-bcolor-secondary-accent k-border-width-7">
        secondary-accent
    </div> 
    <div class="k-border-bottom k-bbcolor-secondary-accent k-border-width-7">
        secondary-accent
    </div>  
    <div class="k-border k-bcolor-primary-success k-border-width-9">
        primary-success
    </div> 
    <div class="k-border-right k-brcolor-primary-success k-border-width-9">
        primary-success
    </div>  
</div>

```
<div class="k-border k-bcolor-primary-accent k-border-width-4">
    primary-accent
</div>  
<div class="k-border-left k-blcolor-primary-accent k-border-width-4">
    primary-accent
</div>  
<div class="k-border k-bcolor-secondary-accent k-border-width-7">
    secondary-accent
</div> 
<div class="k-border-bottom k-bbcolor-secondary-accent k-border-width-7">
    secondary-accent
</div>  
<div class="k-border k-bcolor-primary-success k-border-width-9">
    primary-success
</div> 
<div class="k-border-right k-brcolor-primary-success k-border-width-9">
    primary-success
</div>  
```

> All colors in [Colors](utilities/colors.md)