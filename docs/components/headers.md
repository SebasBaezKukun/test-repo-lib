---
id: banners
title: Banners
sidebar_title: Banners 
---

Kukun has custom Banners to save time adding them to pages.

## Source code

<!--DOCUSAURUS_CODE_TABS-->

<!-- Main -->
```

.k-header-container{
    display: flex;
    align-items: center;
    min-height: 500px;
    position: relative;
    border-radius: 0px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.k-header-wrapper {
    height: inherit;
    width: 50%;
    min-height: 150px;
    padding-right: 70px;

    min-width: initial;
    max-width: initial;
    position: initial;
    top: initial;
}

.k-banner{     
    background: rgba(255, 255, 255, 0.5);
    box-shadow: initial;
    position: absolute;
    
    height: 100%;
    min-height: 500px;
    width: 50%;
    top: 0;
    left: 0;
    z-index: 0;
    backdrop-filter: blur(3px);
    
    right: initial;
    bottom: initial;
    border-bottom-right-radius: initial;
    transform: initial; 
}

.k-main-title{
    margin: auto 0;
    text-align: left;
    padding-top: initial;
    padding-bottom: 0px;
    position: relative;
    z-index: 1;
    transition: 0.3s;
}
.k-main-description{
    position: relative;
    padding-bottom: 20px;
    z-index: 1;
    transition: 0.3s;
    margin-left: 2px;
}


.k-mobile-banner{
    display: none;
    background: #FFFFFF;
    opacity: 0.57;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
}

@media only screen and (max-width: 1024px) {
    .k-banner{
        display: none;
    }
    .k-mobile-layer{
        display: block;
        background: #fffFff;
        position: absolute;
        opacity: 0.65;
        width: 100%;
        height: 100%;
        opacity: 0.65;
        transition: 0.5s ease-in-out;
    }

    .k-header-container{
        height: 50vh;
        min-height: 300px;
        display: flex;
        align-items: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .k-header-wrapper{
        width: 90%;
        margin: auto;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
        position: relative;
        top: 0;
        padding-bottom: 20px;
        min-width: 0;
        min-height: 0;
    }
    .k-main-title{
        text-align: center;
        padding-top: 0px;
        padding-bottom: 10px;
        font-weight: 600;
    }
}   
```

<!--END_DOCUSAURUS_CODE_TABS-->

## How to use

You need add our custom banner HTML.

### Main
> Banner in full window here: [Main Banner](/banners)

<style>
    .k-header-container {
        background-image: url('https://mykukun.com/img/best-contractors-near-me/images/contractor.jpg');
    }
</style>

<div class="kukun-docs-example">
    <div class="k-header-container k-blur-2">
        <div class="k-container">
            <div class="k-header-wrapper">
                <h1 class="k-h1 k-blue k-main-title">Find a contractor</h1>
                <div class="k-h5 k-blue k-main-description">Right around the corner</div>
                <div class="k-banner"></div>
            </div>
        </div>
        <div class="k-mobile-layer"></div>
    </div>
</div>

```
<style>
    .k-header-container {
        background-image: url('https://mykukun.com/img/best-contractors-near-me/images/contractor.jpg');
    }
</style>

<div class="k-header-container k-blur-2">
    <div class="k-container">
        <div class="k-header-wrapper">
            <h1 class="k-h1 k-blue k-main-title">Find a contractor</h1>
            <div class="k-h5 k-blue k-main-description">Right around the corner</div>
            <div class="k-banner"></div>
        </div>
    </div>
    <div class="k-mobile-layer"></div>
</div>
```