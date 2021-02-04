---
id: containers
title: Containers
sidebar_label: Containers
---

The Kukun container is a content limiter used in all designs of pages or widgets.

## How it work
Containers are the most basic elements in our designs, are required when we want to limit the width of content.

Kukun has two container by default:

- `.k-container-full`
    ```
    .k-container-full { 
        width: 100%;
        max-width: 100%; 
        padding: 0px;
    }
    ```
- `.k-container`

    ```
    .k-container {
        width: 95%;
        margin: auto;
        @media (min-width: 1024px) {
            width: 80%;
            max-width: 1440px;
        }
    }
    ```
- `.k-main-container`  

    ```
    .k-main-container {
        margin-top: 70px;
        background-color: #fff
    }
    ```

## How to use
```
<div class="k-container-width">
    <!-- Content -->
</div>
```
**OR**
```
<div class="k-container">
    <!-- Content -->
</div>
```
**OR**
```
<div class="k-main-container">
    <!-- Content -->
</div>
```