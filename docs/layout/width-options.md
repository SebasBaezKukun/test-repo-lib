---
id: width-options
title: Width options
sidebar_label: Width options
---

The width options are a group of classes to calculate automatically the width of an element using percentajes.  
These classes contains the kukun breakpoints `md`, `lg`, `xl`

## How it work

The class `.k-width-` is used + a number representing the width in `%` to calculate assign width.  
Example: `k-width-100`

**Source code**

```
@for $i from 1 through 100 {
    .k-width-#{$i} {
        width: $i * 1%;
    }
}

@media (min-width: 600px) {
    @for $i from 1 through 100 {
        .k-width-md-#{$i} {
            width: $i * 1%;
        }
    }
}

@media (min-width: 1024px) {
    @for $i from 1 through 100 {
        .k-width-lg-#{$i} {
            width: $i * 1%;
        }
    }
}

@media (min-width: 1400px) {
    @for $i from 1 through 100 {
        .k-width-xl-#{$i} {
            width: $i * 1%;
        }
    }
}
```

## How to use
You can use:  
`k-width-` , `k-width-md-` , `k-width-lg` , `k-width-xl`

<style>
    .kukun-docs-example div { padding: 10px;  }
    .kukun-docs-example div:nth-child(1) {
        border: 1px solid red
    }
    .kukun-docs-example div:nth-child(2) {
        border: 1px solid blue
    }
    .kukun-docs-example div:nth-child(3) {
        border: 1px solid green
    }
    .kukun-docs-example div:nth-child(4) {
        border: 1px solid yellow
    }
</style>

**Example:**
<div class="kukun-docs-example">
    <div class="k-width-100">
        100%
    </div>
    <div class="k-width-md-70">
        Md 70%
    </div>
    <div class="k-width-lg-50">
        Lg 50%
    </div>
    <div class="k-width-xl-20">
        Xl 20%
    </div>
</div>
    
    
```
<style>
    .kukun-docs-example div { padding: 10px;  }
    .kukun-docs-example div:nth-child(1) {
        border: 1px solid red
    }
    .kukun-docs-example div:nth-child(2) {
        border: 1px solid blue
    }
    .kukun-docs-example div:nth-child(3) {
        border: 1px solid green
    }
    .kukun-docs-example div:nth-child(4) {
        border: 1px solid yellow
    }
</style>

<div class="k-width-100">
    100%
</div>
<div class="k-width-md-70">
    Md 70%
</div>
<div class="k-width-lg-50">
    Lg 50%
</div>
<div class="k-width-xl-20">
    Xl 20%
</div>
```
