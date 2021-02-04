---
id: card-box
title: Cards
sidebar_title: Cards
---

Cards are a convenient means of displaying content composed of different types of objects.  
Kukun's cards provide a flexible and extensible content container with multiple variants and options.

## Source code

<!--DOCUSAURUS_CODE_TABS-->

<!-- General  -->
```
.k-card {
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    -o-box-shadow: $k-blur-2;
    box-shadow: $k-blur-2;

    position: relative;

    .k-card-image-bg {
        position: relative;
        background-position: center center;
        background: {
            position: center center;
            repeat: no-repeat;
            size: cover;
        };
        height: 220px;
        border-radius: 10px 10px 0px 0px;
        
        &:before {
            content: "";
            transition: background-color 0.5s;
        }

        a { text-decoration: none; }

        .caption-text {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 15px;
            overflow: hidden;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s, margin-bottom 0.2s;
            color: #FFFFFF;
            cursor: pointer;
            margin-bottom: -20px;
        }

        &:hover {
            &:before {
                content: "";
                position: absolute;
                border-radius: 10px 10px 0px 0px;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0,0,0, 0.7);
            }

            .caption-text {
                opacity: 1;
                pointer-events: all;
                margin-bottom: 0px;
            }
        }
    }

    .k-card-body {
        padding: 13px 10px;
        .info-label {
            margin-bottom: 10px;
        }

        .info-label-bottom {
            margin-top: 10px;
        }

        .k-content { line-height: 120%; }

        a {
            text-decoration: none;
        }

        .buttons-wrapper {
            margin-top: 12px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;

            button {
                margin-bottom: 10px;
            }
        }
    }
}
```

<!-- Horizontal -->
```
.k-card-horizontal {
    display: flex;
    align-items: center;

    .k-card-image-bg { 
        width: 40%;
        border-radius: 10px 0px 0px 10px;

        &:hover {
            &:before {
                content: "";
                border-radius: 10px 0px 0px 10px;
            }
        }
    }

    .k-card-body { 
        width: 60%;
        padding: 13px 15px;    
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

## How to use  
You can add `.k-card` to set default styles.

<style>
.k-card {
    max-width: 300px;
}
.k-card-image-bg {
    background-image: url('https://content.mykukun.com/wp-content/uploads/2021/01/26031409/landscape-financing.jpg')
}
.multiple-cards {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.multiple-cards .k-card {
    margin-right: 30px;
    width: 100%;
    margin-bottom: 15px
}
.k-card-horizontal { max-width: 100%; width: 100% }
@media screen and (min-width: 1100px) {
    .multiple-cards .k-card { 
        width: 47%
    }
}
@media screen and (min-width: 1300px) {
    .multiple-cards .k-card { 
        margin-bottom: 0px
    }
}
</style>

*For these examples, we use a custom `max-width`. By default, `.k-card` has a `max-width: 100%`*
```
<style>
    .k-card {
        max-width: 300px
    }
    .k-card-image-bg {
        background-image: url('https://content.mykukun.com/wp-content/uploads/2021/01/26031409/landscape-financing.jpg')
    }
</style>
```

### Traditional

<div class="kukun-docs-example">
    <div class="k-card">
        <div class="k-card-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero nobis repudiandae, esse nam nisi quaerat quasi totam corporis quas.
        </div>
    </div>
</div>

```
<div class="k-card">
    <div class="k-card-body">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio libero nobis repudiandae, esse nam nisi quaerat quasi totam corporis quas.
    </div>
</div>
```

### Image 
You can add a div with `background-image` using `.k-card-image-bg` class.

<div class="kukun-docs-example multiple-cards">
    <div class="k-card">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <p class="k-notifications k-color-main caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </p>
        </div>
        <div class="k-card-body">
            <p class="k-notifications k-color-main info-label">Info label</p>
            <p class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </p>
            <p class="info-label-bottom k-text-right">
                <a href="#" class="k-notifications k-color-main">More info</a>
            </p>
        </div>
    </div>
    <div class="k-card">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <p class="k-notifications k-color-main caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </p>
        </div>
        <div class="k-card-body">
            <p class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </p>
            <p class="info-label-bottom k-text-right">
            </p>
        </div>
    </div>
</div>

```
<div class="k-card">
    <div class="k-card-image-bg">
        <!-- div-width-bg-image -->
        <p class="k-notifications k-color-main caption-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
        </p>
    </div>
    <div class="k-card-body">
        <p class="k-notifications k-color-main info-label">Info label</p>
        <p class="k-content k-color-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
        </p>
        <p class="info-label-bottom k-text-right">
            <a href="#" class="k-notifications k-color-main">More info</a>
        </p>
    </div>
</div>

<div class="k-card">
    <div class="k-card-image-bg">
        <!-- div-width-bg-image -->
        <p class="k-notifications k-color-main caption-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
        </p>
    </div>
    <div class="k-card-body">
        <p class="k-content k-color-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
        </p>
        <p class="info-label-bottom k-text-right">
        </p>
    </div>
</div>
```

### With buttons
You can add buttons using a div with `.buttons-wrapper` class.

<div class="kukun-docs-example multiple-cards">
    <div class="k-card">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <a href="#" class="k-notifications caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </a>
        </div>
        <div class="k-card-body">
            <a href="#" class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </a>
            <div class="buttons-wrapper">
                <button class="k-btn-primary k-width-100 k-btn-large">Send</button>
            </div>
        </div>
    </div>
    <div class="k-card">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <a href="#" class="k-notifications caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </a>
        </div>
        <div class="k-card-body">
            <a href="#" class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </a>
            <div class="buttons-wrapper">
                <button class="k-btn-primary k-width-48 k-btn-large">Send</button>
                <button class="k-btn-secondary k-width-48 k-btn-large">Cancel</button>
            </div>
        </div>
    </div>
</div>

```
<div class="k-card">
    <div class="k-card-image-bg">
        <!-- div-width-bg-image -->
        <a href="#" class="k-notifications caption-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
        </a>
    </div>
    <div class="k-card-body">
        <a href="#" class="k-content k-color-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
        </a>
        <div class="buttons-wrapper">
            <button class="k-btn-primary k-width-100 k-btn-large">Send</button>
        </div>
    </div>
</div>

<div class="k-card">
    <div class="k-card-image-bg">
        <!-- div-width-bg-image -->
        <a href="#" class="k-notifications caption-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
        </a>
    </div>
    <div class="k-card-body">
        <a href="#" class="k-content k-color-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
        </a>
        <div class="buttons-wrapper">
            <button class="k-btn-primary k-width-48 k-btn-large">Send</button>
            <button class="k-btn-secondary k-width-48 k-btn-large">Cancel</button>
        </div>
    </div>
</div>
```


### Horizontal
You can use the same card but horizontally using `.k-card-horizontal` class.

<div class="kukun-docs-example">
    <div class="k-card k-card-horizontal">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <p class="k-notifications k-color-main caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </p>
        </div>
        <div class="k-card-body">
            <p class="k-notifications k-color-main info-label">Info label</p>
            <p class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </p>
            <p class="info-label-bottom k-text-right">
                <a href="#" class="k-notifications k-color-main">More info</a>
            </p>
        </div>
    </div>
</div>

<div class="kukun-docs-example">
    <div class="k-card k-card-horizontal">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <a href="#" class="k-notifications caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </a>
        </div>
        <div class="k-card-body">
            <a href="#" class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </a>
            <div class="buttons-wrapper">
                <button class="k-btn-primary k-width-48 k-btn-large">Send</button>
                <button class="k-btn-secondary k-width-48 k-btn-large">Cancel</button>
            </div>
        </div>
    </div>
</div>

```
<div class="k-card k-card-horizontal">
    <div class="k-card-image-bg">
        <!-- div-width-bg-image -->
        <p class="k-notifications k-color-main caption-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
        </p>
    </div>
    <div class="k-card-body">
        <p class="k-notifications k-color-main info-label">Info label</p>
        <p class="k-content k-color-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
        </p>
        <p class="info-label-bottom k-text-right">
            <a href="#" class="k-notifications k-color-main">More info</a>
        </p>
    </div>

    <div class="k-card k-card-horizontal">
        <div class="k-card-image-bg">
            <!-- div-width-bg-image -->
            <a href="#" class="k-notifications caption-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet, repellat nostrum, itaque velit minima alias, corrupti nulla modi reprehenderit magni sapiente voluptates et impedit?
            </a>
        </div>
        <div class="k-card-body">
            <a href="#" class="k-content k-color-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio odit tenetur expedita inventore aut!
            </a>
            <div class="buttons-wrapper">
                <button class="k-btn-primary k-width-48 k-btn-large">Send</button>
                <button class="k-btn-secondary k-width-48 k-btn-large">Cancel</button>
            </div>
        </div>
    </div>
</div>

```