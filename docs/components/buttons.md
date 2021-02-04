---
id: buttons
title: Buttons
sidebar_title: Buttons
---

Use Kukun's buttons styles for actions in forms, dialogs, or content.

## Default styles

<!--DOCUSAURUS_CODE_TABS-->
<!--General-->
```
position: relative;
width: 100%;
max-width: 200px;
height: 48px;
text-align: center;
mix-blend-mode: normal;
border: 0px;
border-radius: 4px; 
text-decoration: none;
text-shadow: none;
padding: 0px 5px 0px 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2.5px 0 0 rgba(0,0,0,.1);
transition: background-color 0.3s, box-shadow 0.3s;
font-size: 19px;
font-weight: normal;
text-transform: none;

&:focus {
    outline: none;
}
&:hover {
    box-shadow: 0 5px 11px -4px rgba(0,0,0,.5);
}
&:active { outline: none }

@media (min-width: 400px) {
    max-width: 266px;
}
```
<!--Primary-->
```
background-color: $c-main;  
color: $c-white;
&:hover { background-color: $c-cta-hover; }
&:active { background-color: $c-cta-hover; }
&:focus {
    background-color: $c-cta-hover;
}
```

<!--Secondary-->
```
color: $c-text;
background-color: $c-white;
border: 0.5px solid $c-strokes;
a { color: $c-text; }
&:hover, &:focus, &:active { 
    background-color: $c-white;
    color: $c-text; 
    a { color: $c-text; }
}
```

<!--Disabled-->
```
color: $c-white;
background-color: $c-disabled;    
box-shadow: none;
pointer-events: none;
cursor: initial;
```

<!--END_DOCUSAURUS_CODE_TABS-->

## How to use
You need add a stantard button using `.k-btn-` class.

**Example:**

<style> 
.first-example {
    display: flex;
}
.first-example button { margin-right: 20px }
</style>

<div class="kukun-docs-example first-example">
    <button class="k-btn-primary">Primary</button>
    <button class="k-btn-secondary">Secondary</button>
    <button class="k-btn-disable">Disabled</button>
</div>


```
<button class="k-btn-primary">Primary</button>
<button class="k-btn-secondary">Secondary</button>
<button class="k-btn-disable">Disabled</button>
```

### With icon
<div class="kukun-docs-example first-example">
    <button class="k-btn-primary">
        <i class="k-icon-user k-icon-color-white"></i> &nbsp; User
    </button>
    <button class="k-btn-primary">
        Usser &nbsp; <i class="k-icon-user k-icon-color-white"></i>
    </button>
</div>

```
<button class="k-btn-primary">
    <i class="k-icon-user k-icon-color-white"></i> &nbsp; User
</button>
<button class="k-btn-primary">
    Usser &nbsp; <i class="k-icon-user k-icon-color-white"></i>
</button>
```

### Full width

The class `.k-btn-large` sets `max-width: 100%`

<div class="kukun-docs-example">
    <button class="k-btn-primary k-btn-large">
        Large
    </button>
</div>

```
<button class="k-btn-primary k-btn-large">
    Large
</button>
```

###  Margin auto
The class `.k-m-auto` sets `margin: auto`

<div class="kukun-docs-example">
    <button class="k-btn-primary k-m-auto">
        Margin Auto
    </button>
</div>

```
<button class="k-btn-primary k-m-auto">
    Margin Auto
</button>
```

### Auto width
The class `.k-btn-auto-width` sets `max-width: max-content`

**Before**
<div class="kukun-docs-example">
    <button class="k-btn-primary">
        Lorem ipsum, dolor sit amet consectetur adipisicing
    </button>
</div>

**After**
<div class="kukun-docs-example">
    <button class="k-btn-primary k-btn-auto-width">
        Lorem ipsum, dolor sit amet consectetur adipisicing
    </button>
</div>

```
<button class="k-btn-primary k-btn-auto-width">
    Lorem ipsum, dolor sit amet consectetur adipisicing
</button>
```