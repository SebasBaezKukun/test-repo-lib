---
id: carousels
title: Carousel
sidebar_title: Carousel
---

A slideshow component for cycling through elements, images or slides of text like a carousel.

# How to use
You need add the HTML of component and initialize it with javascript `$kl.Carousel.init()`


## Traditional
<div class="kukun-docs-example">
    <div class="k-carousel" id="carousel_main" tabindex="-1">
        <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
            <i class="k-icon-arrow-left-bold k-icon-color-principal"></i>
        </button>
        <div class="k-carousel-boxes-wrapper">
            <!-- // -->
            <div class="k-carousel-box k-width-100" style=" height: 400px;  background-image: url(https://content.mykukun.com/wp-content/uploads/2021/01/22062735/Garage-windows.jpg)">
                <a href="#" target="_blank" class="link-container">
                </a>
            </div>
            <div class="k-carousel-box k-width-100" style="height: 400px; background-image: url(https://content.mykukun.com/wp-content/uploads/2021/01/22074419/home-inventory.jpg)">
                <a href="#" target="_blank" class="link-container">
                </a>
            </div>
            <div class="k-carousel-box k-width-100"
                style="background-image: url(https://content.mykukun.com/wp-content/uploads/2021/01/22091720/Sell-My-Home-Online.jpg); height: 400px;">
                <a href="#" target="_blank"
                    class="link-container">
                </a>
            </div>
            <!-- //  -->
        </div>
        <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
            <i class="k-icon-arrow-right-bold k-icon-color-principal"></i>
        </button>
    </div>
</div>
<script>
const carouselMain = document.querySelector('#carousel_main');
let carousel_main = $kl.Carousel.init(carouselMain);
</script>

**Add HTML**
```
<div class="k-carousel" id="carousel_main" tabindex="-1">
    <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
        <i class="k-icon-arrow-left-bold k-icon-color-principal"></i>
    </button>
    <div class="k-carousel-boxes-wrapper">
        <!-- // -->
        <div class="k-carousel-box k-width-100" style=" height: 400px;  background-image: url(https://content.mykukun.com/wp-content/uploads/2021/01/22062735/Garage-windows.jpg)">
            <a href="#" target="_blank" class="link-container">
            </a>
        </div>
        <div class="k-carousel-box k-width-100" style="height: 400px; background-image: url(https://content.mykukun.com/wp-content/uploads/2021/01/22074419/home-inventory.jpg)">
            <a href="#" target="_blank" class="link-container">
            </a>
        </div>
        <div class="k-carousel-box k-width-100"
            style="background-image: url(https://content.mykukun.com/wp-content/uploads/2021/01/22091720/Sell-My-Home-Online.jpg); height: 400px;">
            <a href="#" target="_blank"
                class="link-container">
            </a>
        </div>
        <!-- //  -->
    </div>
    <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
        <i class="k-icon-arrow-right-bold k-icon-color-principal"></i>
    </button>
</div>
```
**And initialize the component**
```
<script>
    const carouselMain = document.querySelector('#carousel_main');
    let carousel_main = $kl.Carousel.init(carouselMain);
</script>
```


## Infinite & continuous
<div class="kukun-docs-example">
    <div class="k-carousel" id="headband-carousel" tabindex="-1">
        <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
            <i class="k-icon-arrow-left-1"></i>
        </button>
        <div class="k-carousel-boxes-wrapper">
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500); height: 120px">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <p class="k-content">&nbsp; Content</p>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500); height: 120px">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <p class="k-content">&nbsp; Content</p>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500); height: 120px">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <p class="k-content">&nbsp; Content</p>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500); height: 120px">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <p class="k-content">&nbsp; Content</p>
                    </a>
                </div>
            </div>
            <!-- //  -->
        </div>
        <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
            <i class="k-icon-arrow-right-1"></i>
        </button>
    </div>
</div>

<script>
const carouselHeandBand = document.querySelector('#headband-carousel');
let carousel = $kl.Carousel.init(carouselHeandBand, {
    type: 'continuous',
    speed: 20,
    draggable: true
});
</script>

**Add HTML**
```
<div class="k-carousel" id="headband-carousel" tabindex="-1">
    <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
        <i class="k-icon-arrow-left-1"></i>
    </button>
    <div class="k-carousel-boxes-wrapper">
        <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
            style="background-image: url(https://picsum.photos/500/500); height: 120px">
            <div class="bg-box bg-lazy-load">
                <a href="#" class="bottom-info">
                    <p class="k-content">Content</p>
                </a>
            </div>
        </div>
        <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
            style="background-image: url(https://picsum.photos/500/500); height: 120px">
            <div class="bg-box bg-lazy-load">
                <a href="#" class="bottom-info">
                    <p class="k-content">Content</p>
                </a>
            </div>
        </div>
        <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
            style="background-image: url(https://picsum.photos/500/500); height: 120px">
            <div class="bg-box bg-lazy-load">
                <a href="#" class="bottom-info">
                    <p class="k-content">Content</p>
                </a>
            </div>
        </div>
        <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
            style="background-image: url(https://picsum.photos/500/500); height: 120px">
            <div class="bg-box bg-lazy-load">
                <a href="#" class="bottom-info">
                    <p class="k-content">Content</p>
                </a>
            </div>
        </div>
        <!-- //  -->
    </div>
    <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
        <i class="k-icon-arrow-right-1"></i>
    </button>
</div>
```

**And initialize the component**
```
<script>
    const carouselHeandBand = document.querySelector('#headband-carousel');
    let carousel = $kl.Carousel.init(carouselHeandBand, {
        type: 'continuous',
        speed: 20,
        draggable: true
    });
</script>
```

You can add class `.k-carousel-posts` to load specific styles of the posts.

<div class="kukun-docs-example">
    <div class="k-carousel k-carousel-posts" id="kukun_carousel_posts" tabindex="-1">
        <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
            <i class="k-icon-arrow-left-1"></i>
        </button>
        <div class="k-carousel-boxes-wrapper">
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500)">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <h5 class="k-h5 title">Title</h5>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500)">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <h5 class="k-h5 title">Title</h5>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500)">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <h5 class="k-h5 title">Title</h5>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500)">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <h5 class="k-h5 title">Title</h5>
                    </a>
                </div>
            </div>
            <div class="k-carousel-box k-width-100 k-width-md-48 k-width-lg-33"
                style="background-image: url(https://picsum.photos/500/500)">
                <div class="bg-box bg-lazy-load">
                    <a href="#" class="bottom-info">
                        <h5 class="k-h5 title">Title</h5>
                    </a>
                </div>
            </div>
        </div>
        <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
            <i class="k-icon-arrow-right-1"></i>
        </button>
    </div>
</div>

<script>
const carouselPostsE = document.querySelector('#kukun_carousel_posts');
let carouselPosts = $kl.Carousel.init(carouselPostsE, {
    type: 'continuous',
    speed: 20,
    draggable: true
});
</script>

```
<div class="k-carousel k-carousel-posts" id="kukun_carousel_posts" tabindex="-1">
    <!-- //  -->
</div>
```

## Simple draggable
<style>
    .example-carousel {
        max-width: 700px
    }
    .example-carousel .k-carousel-box {
        border: 1px solid;
        min-width: 120px;
        height: 120px !important;
    }
</style>

<div class="kukun-docs-example">
    <div class="k-carousel k-carousel-simple example-carousel" id="k_simple_carousel">
        <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
            <i class="k-icon-arrow-left-1"></i>
        </button>
        <div class="k-carousel-boxes-wrapper k-carousel-simple-boxes-wrapper">
            <div class="k-carousel-box">
                &nbsp; Box
            </div>
            <div class="k-carousel-box">
                &nbsp; Box
            </div>
            <div class="k-carousel-box">
                &nbsp; Box
            </div>
            <div class="k-carousel-box">
                &nbsp; Box
            </div>
            <div class="k-carousel-box">
                &nbsp; Box
            </div>
            <div class="k-carousel-box">
                &nbsp; Box
            </div>
        </div>
        <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
            <i class="k-icon-arrow-right-1"></i>
        </button>
    </div>
</div>

<script>
    let simpleCrouselE = document.querySelector('#k_simple_carousel');
    let simpleCarousel = $kl.Carousel.init(simpleCrouselE, {
        type: 'simple',
        draggable: false,
        arrowOpacity: 1,
        dragSpeed: 1
    });
</script>

**Add HTML**
```
<div class="k-carousel k-carousel-simple example-carousel" id="k_simple_carousel">
    <button type="button" class="k-carousel-arrow k-carousel-arrow-prev">
        <i class="k-icon-arrow-left-1"></i>
    </button>
    <div class="k-carousel-boxes-wrapper k-carousel-simple-boxes-wrapper">
        <div class="k-carousel-box">
            Box
        </div>
        <div class="k-carousel-box">
            Box
        </div>
        <div class="k-carousel-box">
            Box
        </div>
        <div class="k-carousel-box">
            Box
        </div>
        <div class="k-carousel-box">
            Box
        </div>
        <div class="k-carousel-box">
            Box
        </div>
    </div>
    <button type="button" class="k-carousel-arrow k-carousel-arrow-next">
        <i class="k-icon-arrow-right-1"></i>
    </button>
</div>
```

**And initialize the component**
```
<script>
    let simpleCrouselE = document.querySelector('#k_simple_carousel');
    let simpleCarousel = $kl.Carousel.init(simpleCrouselE, {
        type: 'simple',
        draggable: false,
        arrowOpacity: 1,
        dragSpeed: 1
    });
</script>
```


## Options
### Commons
| Name            | Type   | Default | Description | 
|---------------- |--------|---------|-------------|
| type            | string | traditional | Set carousel type (`traditional` , `continuous` , `simple`) |
| boxSpacing      | number | 30      | Right margin in `px` between boxes |
| arrowOpacity    | number | 0       | Set opacity style for carousel arrows |

### Traditional
| Name            | Type    | Default | Description | 
|---------------- |---------|---------|-------------|
| autoplay        | boolean | true    | Automatically start animation |
| dots            | boolean |  true  | Add/remove dots indicators   |


### Infinite & continuous
| Name            | Type    | Default | Description | 
|---------------- |---------|--------|-------------|
| autoplay        | boolean | true   | Automatically start animation |
| draggable       | boolean |  true  | Add/remove draggable function |
| speed           | number  | 90     | Set speed of continous animation |
| speedBackArrow  | number  | 10     | Set speed animation when hovering arrow back |
| speedNextArrow  | number  | 10     |  Set speed animation when hovering arrow next |

### Simple
| Name            | Type    | Default | Description | 
|---------------- |---------|---------|-------------|
| draggable       | boolean |  true  | Add/remove draggable function |
| dragSpeed       | number  | 1      | Set speed when dragging carousel |


