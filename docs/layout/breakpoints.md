---
id: breakpoints
title: Breakpoints
sidebar_label: Breakpoints
---

These are the width measurements in which we make jumps for responsive design and apply specific CSSs.

## How it work
We use breakpoints when is necessary for the design.

| Breakpoint | Dimensions |
| ------------- |:-------------:|
| Small     | <=600px |  
| Medium    | >600px && <1024px |   
| Large     | >=1024px && <1400px |   
| Extra large | >=1400px |

```
@media (min-width: 600px) {
    <!-- Code -->
}

@media (min-width: 1024px) {
    <!-- Code  -->
}

@media (min-width: 1400px) {
    <!-- Code -->
}
```

## How to use
<style>
    .my-div {
        background-color: blue;
        padding: 12px;
        text-align: center
    }
    @media (min-width: 600px) {
        .my-div { background-color: orange; }
    }
    @media (min-width: 1024px) {
        .my-div { background-color: purple; }
    }

    @media (min-width: 1400px) {
        .my-div { background-color: aqua; }
    }
</style>

<div class="kukun-docs-example">
    <div class="my-div">
        My div
    </div>
</div>  


```
<style>
    .my-div {
        background-color: blue;
        padding: 12px;
        text-align: center
    }

    @media (min-width: 600px) {
        .my-div { background-color: orange; }
    }

    @media (min-width: 1024px) {
        .my-div { background-color: purple; }
    }

    @media (min-width: 1400px) {
        .my-div { background-color: aqua; }
    }
</style>

<div class="my-div">
    My div
</div>
```
