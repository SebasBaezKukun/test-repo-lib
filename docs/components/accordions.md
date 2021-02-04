---
id: accordions
title: Accordion
sidebar_title: Accordion
---

Vertically collapsing accordions to encapsulate content.

## How to use
You need add the HTML of component and initialize it with javascript `$kl.Accordion.init()`

**Example:**

<div class="kukun-docs-example">
    <div class="k-accordion" style="margin-bottom: 50px">
        <div class="k-accordion-wrapper">
            <button class="k-accordion-button">
                <div class="k-accordion-label">Section 1</div> 
                <i class="k-icon-arrow-down-bold k-icon-strokes icon-open-accordion"></i>
            </button>
            <div class="k-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                    cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                    explicabo laboriosam molestias rem reprehenderit tempore!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                    cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                    explicabo laboriosam molestias rem reprehenderit tempore!</p>
            </div>
        </div>
        </br>
        <div class="k-accordion-wrapper">
            <button class="k-accordion-button">
                <div class="k-accordion-label">Section 1</div> 
                <i class="k-icon-arrow-down-bold k-icon-strokes icon-open-accordion"></i>
            </button>
            <div class="k-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                    cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                    explicabo laboriosam molestias rem reprehenderit tempore!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                    cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                    explicabo laboriosam molestias rem reprehenderit tempore!</p>
            </div>
        </div>
    </div>
</div>

<script>
const accordionWrapper = document.querySelector(".k-accordion");
let accordion = $kl.Accordion.init(accordionWrapper, {
    width: "100%",
    expandable: true,
    innerMargin: "0px",
    autoScroll: false
});
</script>

**Add HTML**
```
<div class="k-accordion" style="margin-bottom: 50px">
    <div class="k-accordion-wrapper">
        <button class="k-accordion-button">
            <div class="k-accordion-label">Section 1</div> 
            <i class="k-icon-arrow-down-bold k-icon-strokes icon-open-accordion"></i>
        </button>
        <div class="k-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                explicabo laboriosam molestias rem reprehenderit tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                explicabo laboriosam molestias rem reprehenderit tempore!</p>
        </div>
    </div>
    </br>
    <div class="k-accordion-wrapper">
        <button class="k-accordion-button">
            <div class="k-accordion-label">Section 1</div> 
            <i class="k-icon-arrow-down-bold k-icon-strokes icon-open-accordion"></i>
        </button>
        <div class="k-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                explicabo laboriosam molestias rem reprehenderit tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium atque consequuntur
                cupiditate distinctio fugit inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus eaque
                explicabo laboriosam molestias rem reprehenderit tempore!</p>
        </div>
    </div>
</div>
```

**And initialize component**
```
const accordionWrapper = document.querySelector(".k-accordion");
let accordion = $kl.Accordion.init(accordionWrapper, {
    width: "100%",
    expandable: true,
    innerMargin: "0px",
    autoScroll: false
});
```

## Options
| Name            | Type   | Default | Description | 
|---------------- |--------|---------|-------------|
| width           | string  | 100%  | Set elements width |
| innerMargin     | string  | 18px  | Set Margin (top and bottom) between contents |
| innerScroll     | boolean | true  | If window should be scrolled to content after clicking |
| bgColor         | string  | #FFFFFF | Set background color of buttons |
| textColor       | string  | #CCCCCC | Set text color of buttons |
| startBy         | number  | undefined | Index of accordion content to be opened on creation (starting by 0) |
| openAll         | boolean | false     | Open every content on init. **NOTE: Requires parameters.expandable equal to TRUE** |