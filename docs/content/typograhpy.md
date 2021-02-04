---
id: typography
title: Typography
sidebar_label: Typography
---

Kukun typography, including global settings, headings, body text, lists, and more.  
Kukun fonts is `Bariol` family.

## How it work
We added `font-family`, `font-size`, `line-height` etc, in our main styles.

**Source code**

**Fonts**
```
@font-face {
    src: url(../fonts/bariol-fonts/bariol_bold_italic-webfont.ttf);
    font-family: BariolBoldItalic;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_bold_italic-webfont.ttf);
    font-family: BariolBoldItalic;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_bold-webfont.ttf);
    font-family: BariolBold;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_light_italic-webfont.ttf);
    font-family: BariolLightItalic;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_light-webfont.ttf);
    font-family: BariolLight;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_regular_italic-webfont.ttf);
    font-family: BariolRegularItalic;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_regular-webfont.ttf);
    font-family: BariolRegular;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_thin_italic-webfont.ttf);
    font-family: BariolThinItalic;
}
@font-face {
    src: url(../fonts/bariol-fonts/bariol_thin-webfont.ttf);
    font-family: BariolThin;
}

$Main-font: BariolRegular, "Bariol Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;

// Typography
.k-h1,
.k-h2,
.k-h3,
.k-h4,
.k-h5,
.k-h6 {
    font-weight: bold;
}

.k-cta,
.k-content,
.k-link,
.k-notifications,
.k-conditions {
    font-weight: normal
}

.k-h1,
.k-h2,
.k-h3,
.k-h4,
.k-h5,
.k-h6,
.k-cta,
.k-content,
.k-link,
.k-notifications,
.k-conditions {
    color: $c-primary-dark;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.2;
}

.k-h1 {
    font-size: 37px;
}
.k-h2 {
    font-size: 30px;
}
.k-h3 {
    font-size: 28px;
}
.k-h4 {
    font-size: 24px;
}
.k-h5 {
    font-size: 22px;
}
.k-h6 {
    font-size: 19px;
}
.k-cta {
    font-size: 16px;
}
.k-content {
    font-size: 18px;
    line-height: 1.8;
}
.k-link {
    font-size: inherit;
    line-height: inherit;
    color: $c-primary-accent;
}
.k-notifications {
    font-size: 16px;
    line-height: 1.5;
}
.k-conditions {
    font-size: 14px;
    line-height: 1.5;
}
.k-text-hover {
    &:hover {
        @include transition(color 0.3s);
        color: $c-primary-accent;
    }
}

.k-link {
    text-decoration: none;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 0;
        height: 1px;
        background-color: $c-primary-accent;
        transition-duration: 0.3s;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
}

a { text-decoration: none; }

i[class*="k-icon"] {
    font-family: 'my-kukun-icons' !important;

    span {
        font-family: 'my-kukun-icons' !important; 
    }
}

@media (min-width: 1200px) {
    .k-h2 {
        font-size: 34px;
    }
    .k-h3 {
        font-size: 32px;
    }
    .k-h4 {
        font-size: 28px;
    }
    .k-h5 {
        font-size: 26px;
    }
    .k-h6 {
        font-size: 21px;
    }
}

@media (min-width: 1600px) {
    .k-h1 {
        font-size: 47px;
    }
    .k-h2 {
        font-size: 37px;
    }
    .k-h3 {
        font-size: 34px;
    }
    .k-h4 {
        font-size: 30px;
    }
    .k-h5 {
        font-size: 27px;
    }
    .k-h6 {
        font-size: 23px;
    }
    .k-content {
        font-size: 19px;
    }
}

// -- Text
.k-text-center {
    text-align: center;
}
.k-text-left {
    text-align: left;
}
.k-text-right {
    text-align: right;
}
.k-bold {
    font-weight: bold;
}
.k-line {
    text-decoration: line-through;
}
.k-italic {
    font-style: italic;
}

// Line heights
.k-height-0 {
    line-height: 0;
}
.k-height-110 {
    line-height: 1.1;
}
.k-height-120 {
    line-height: 1.2;
}
.k-height-180 {
    line-height: 1.8;
}
```

<style>
    .k-h1, .k-h2, .k-h3, .k-h4, .k-h5, .k-h6 { margin: 0px }
    .typo-ex { margin-top: 20px }
</style>

## Settings
| Font | <1200px | >=1200px <1600px | >=1600px |
| ------------- |:--------:|:------:|:-----:|
| .k-h1 | 37px | 37px | 47px |
| .k-h2 | 30px | 32px | 37px |
| .k-h3 | 28px | 32px | 34px |
| .k-h4 | 24px | 28px | 30px |
| .k-h5 | 22px | 26px | 27px |
| .k-h6 | 19px | 21px | 23px |
| .k-cta | 16px | 19px | 19px |
| .k-content | 18px | 21px | 21px |
| .k-link | inherit | inherit | inherit |
| .k-notifications | 16px | 16px | 16px |
| .k-conditions | 14px | 14px | 14px |



## Headings

| Heading | Example |
| ------------- |:---------------------:|
| `<h1 class="k-h1"></h1>` |  <div class="kukun-docs-example typo-ex"><h1 class="k-h1">h1 Kukun heading</h1></div>  |
| `<h2 class="k-h2"></h2>` |  <div class="kukun-docs-example typo-ex"><h2 class="k-h2">h2 Kukun heading</h2></div>  |
| `<h3 class="k-h3"></h3>` |  <div class="kukun-docs-example typo-ex"><h3 class="k-h3">h3 Kukun heading</h3></div>  |
| `<h4 class="k-h4">h</h4>` |  <div class="kukun-docs-example typo-ex"><h4 class="k-h4">h4 Kukun heading</h4></div>  |
| `<h5 class="k-h5"></h5>` |  <div class="kukun-docs-example typo-ex"><h5 class="k-h5">h5 Kukun heading</h5></div>  |
| `<h6 class="k-h6"></h6>` |  <div class="kukun-docs-example typo-ex"><h6 class="k-h6">h6 Kukun heading</h6></div>  |

```
<h1 class="k-h1">h1 Kukun heading</h1>
<h2 class="k-h2">h2 Kukun heading</h2>
<h3 class="k-h3">h3 Kukun heading</h3>
<h4 class="k-h4">h4 Kukun heading</h4>
<h5 class="k-h5">h5 Kukun heading</h5>
<h6 class="k-h6">h6 Kukun heading</h6>
```

## Content
<div class="kukun-docs-example">
    <p class="k-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
</div>

```
<p class="k-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
```

## Cta
<div class="kukun-docs-example">
    <p class="k-cta">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
</div>

```
<p class="k-cta">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
```

## Link
<div class="kukun-docs-example">
    <a href="#" class="k-link">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</a>
</div>

```
<a href="#" class="k-link">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</a>
```

## Notification
<div class="kukun-docs-example">
    <p class="k-notifications">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
</div>

```
<p class="k-notifications">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
```

## Condition
<div class="kukun-docs-example">
    <p class="k-conditions">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
</div>

```
<p class="k-conditions">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae optio eveniet explicabo facere, odit eos!</p>
```

## Text classes

You can use text-classes to modify default styles.  
- `.k-text-center` 
- `.k-text-left`
- `.k-text-right` 

- `.k-bold `
- `.k-line `
- `.k-italic `

- `.k-height-0` 
- `.k-height-110` 
- `.k-height-120`
- `.k-height-180` 
- `.k-color-{name-color}` 
  
> All colors in [Colors](utilities/colors.md)


<style>
.kukun-text-classes p {
    padding-bottom: 20px
}
</style>

**Examples:**
<div class="kukun-docs-example kukun-text-classes">
    <p class="k-text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-text-left">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-bold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-line">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-italic">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-height-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-height-110">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-height-120">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-height-180">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <hr />
    <br />
    <p class="k-content k-color-primary-success">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
</div>


```
    <p class="k-text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-text-left">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>

    <p class="k-bold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-line">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-italic">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    
    <p class="k-height-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-height-110">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-height-120">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-height-180">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
    <p class="k-content k-color-primary-success">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit officiis voluptates ad tempore architecto, beatae laboriosam dolores optio nihil repudiandae quidem fuga omnis. Qui impedit veritatis ea ad a sint!
    </p>
```

