---
id: inputs
title: Inputs
sidebar_label: Inputs
---

Examples and usage guidelines for kukun inputs.

> If you need a **Input type date** please check [Datepicker](components/datepicker.md) 

## Classic
**Default style**
```
font-family: BariolRegular;
font-size: 18px;
height: 48px;
background-color: #fff;
border: 1px solid #cdcdcd;
border-radius: 4px;
width: 100%;
padding: 10px 25px 0;
outline: none;
text-align: left;
```
**Example:**

<div class="kukun-docs-example"> 
    <div class="k-input-field">
        <div class="k-field">
            <input type="email" class="k-input" aria-label="jhondoe@gmail.com" autocomplete="off" placeholder="jhondoe@gmail.com">
            <label class="k-input-label">jhondoe@gmail.com</label>
        </div>
    </div>
</div>

```
<div class="k-input-field">
    <div class="k-field">
        <input type="email" class="k-input" aria-label="jhondoe@gmail.com" autocomplete="off" placeholder="jhondoe@gmail.com">
        <label class="k-input-label">jhondoe@gmail.com</label>
    </div>
</div>
```

**With icon**
<div class="kukun-docs-example"> 
    <div class="k-input-field">
        <div class="k-field ">
            <div class="k-field-icon">
                <input type="email" class="k-input" aria-label="jhondoe@gmail.com" autocomplete="off" placeholder="jhondoe@gmail.com">
                <i class="k-icon-user icon-input"></i>
                <label class="k-input-label">jhondoe@gmail.com</label>
            </div>
        </div>
    </div>
</div>

```
<div class="k-input-field">
    <div class="k-field ">
        <div class="k-field-icon">
            <input type="email" class="k-input" aria-label="jhondoe@gmail.com" autocomplete="off" placeholder="jhondoe@gmail.com">
            <i class="k-icon-user icon-input"></i>
            <label class="k-input-label">jhondoe@gmail.com</label>
        </div>
    </div>
</div>
```

## Flat

**Default style**

```
font-size: 18px;
color: #333333;
height: 48px;
background-color: transparent;
border: 0px;
border-bottom: 1px solid rgba(153, 153, 153, 0.5);
border-radius: 0px;
width: 100%;
padding: 15px 10px 0px 10px;
outline: none;
text-align: left;
```

**Example:**

<div class="kukun-docs-example"> 
    <div class="k-input-field-floating">
        <div class="k-field">
            <input type="text" class="k-input input-real-time" name="userFirstName" autocomplete="off" placeholder="First name" />
            <label class="k-input-label">First name</label>
        </div>
    </div>
</div>

```
<div class="k-input-field-floating">
    <div class="k-field">
        <input type="text" class="k-input input-real-time" name="userFirstName" autocomplete="off" placeholder="First name" />
        <label class="k-input-label">First name</label>
    </div>
</div>
```

**With icon**

<div class="kukun-docs-example"> 
    <div class="k-input-field-floating">
        <div class="k-field">
            <div class="k-field-icon">
                <input type="text" class="k-input input-real-time" name="userFirstName" autocomplete="off" placeholder="First name" />
                <i class="k-icon-user icon-input"></i>
                <label class="k-input-label">First name</label>
            </div>
        </div>
    </div>
</div> 

```
<div class="k-input-field-floating">
    <div class="k-field">
        <div class="k-field-icon">
            <input type="text" class="k-input input-real-time" name="userFirstName" autocomplete="off" placeholder="First name" />
            <i class="k-icon-user icon-input"></i>
            <label class="k-input-label">First name</label>
        </div>
    </div>
</div>
```

