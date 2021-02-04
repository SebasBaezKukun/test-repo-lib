---
id: scroll-progress
title: Scrollbar
sidebar_title: Scrollbar
---

Examples for using Kukun's scrollbar.

## Source code

<!--DOCUSAURUS_CODE_TABS-->

<!-- Vertical -->
```
.k-scroll-element-v {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f7f7f7;
  }
  &::-webkit-scrollbar-thumb {
      background: #999999;
      border-radius: 1px;
      border: 2px solid #f7f7f7;

      &:hover {
        background: #c4c4c4;
      }
  }
}
```

<!-- Horizontal -->
```
.k-scroll-element-h {
  overflow-x: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f7f7f7;
  }

  &::-webkit-scrollbar-thumb {
    background: #999999;
    border-radius: 1px;
    border: 2px solid #f7f7f7;

    &:hover {
      background: #c4c4c4;
    }
  }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## How to use
You can add `.k-scroll-element-v` or `.k-scroll-element-h` in your element.

**Example:**

<div class="kukun-docs-example">
    <div style="max-height: 200px; max-width: 400px;" class="k-scroll-element-v k-scroll-element-h">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    </div>
</div> 

```
<div class="k-scroll-element-v k-scroll-element-h">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam. dolor sit amet consectetur adipisicing elit. Commodi, quisquam. <br>
</div>
```