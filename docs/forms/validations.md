---
id: validations
title: Validations
sidebar_label: Validations
---

We show error or alert messages, adding a class to the control.

## Classic
You need add `.k-field-error` class in your component.

<div class="kukun-docs-example"> 
    <div class="k-input-field k-field-error">
        <div class="k-field">
            <input type="email" class="k-input" aria-label="jhondoe@gmail.com" autocomplete="off" placeholder="jhondoe@gmail.com">
            <label class="k-input-label">jhondoe@gmail.com</label>
        </div>
        <p role="alert" class="k-error k-notifications">
            <i class="k-icon-block-1"><span class="path1"></span><span class="path2"></span></i>
            Please Enter a valid email
        </p>
    </div>
</div>

```
<div class="k-input-field k-field-error">
    <div class="k-field">
        <input type="email" class="k-input" aria-label="jhondoe@gmail.com" autocomplete="off" placeholder="jhondoe@gmail.com">
        <label class="k-input-label">jhondoe@gmail.com</label>
    </div>
    <p role="alert" class="k-error k-notifications">
        <i class="k-icon-block-1"><span class="path1"></span><span class="path2"></span></i>
        Please Enter a valid email
    </p>
</div>
```

## Flat

You need add `.k-field-error-floating` class in your component.

<div class="kukun-docs-example"> 
    <div class="k-input-field-floating k-field-error-floating">
        <div class="k-field">
            <input type="text" class="k-input input-real-time" name="userFirstName" autocomplete="off" placeholder="First name" />
            <label class="k-input-label">First name</label>
        </div>
        <p role="alert" class="k-error k-notifications">
            <i class="k-icon-block-1"><span class="path1"></span><span class="path2"></span></i>
            Please Enter a valid name
        </p>
    </div>
</div>

```
<div class="k-input-field-floating k-field-error-floating">
    <div class="k-field">
        <input type="text" class="k-input input-real-time" name="userFirstName" autocomplete="off" placeholder="First name" />
        <label class="k-input-label">First name</label>
    </div>
    <p role="alert" class="k-error k-notifications">
        <i class="k-icon-block-1"><span class="path1"></span><span class="path2"></span></i>
        Please Enter a valid name
    </p>
</div>
```