---
id: introduction
title: Introduction
sidebar_label: Introduction
---


Kukun front-end library is a guide for all designers and programers of the company.  
*It is constantly updating and improvement.*

## Quick start
Please get files from GitHub /compiled-prod folder. Or using kukun CDN.

**Using GitHub project**
```
https://github.com/SebasBaezKukun/kukun-lib
``` 
Download `/compiled-prod` folder and change its name to `kukun-lib` for import it in your application.

- `/kukun-lib`  
    - `/fonts`  
    - `/iconography`  
        - `/fonts`
        - `my-kukun-icons.min.css`  
        - `my-kukun-icons.min.css.map`   
    - `kukun-lib.css`  
    - `kukun-lib.css.map`  
    - `kukun-lib.js`  
    - `kukun-lib.js.map`  
    - `reset.min.css`

**CSS**
```
<link rel="stylesheet" href="your-app/kukun-lib/iconography/my-kukun-icons.min.css">
<link rel="stylesheet" href="your-app/kukun-lib/kukun-lib.css">
```
**JS**
```
<script src="your-app/kukun-lib/kukun-lib.js"></script>
```
---

**Using CDN** *(In progress)*

**CSS**
```
<link rel="stylesheet" href="cdn/iconography/my-kukun-icons.min.css">
<link rel="stylesheet" href="cdn/kukun-lib.css">
```
**JS**
```
<script src="cdn/kukun-lib.js"></script>
```

## Reboot
If you need build a new feature or page and there are no CSS files previously uploaded, you can use `reset.min.css` to correct inconsistencies across browsers and devices
```
<link rel="stylesheet" href="your-app/kukun-lib/reset.min.css">
```
```
<link rel="stylesheet" href="cdn/reset.min.css">
```