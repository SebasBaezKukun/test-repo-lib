---
id: checks-radios
title: Check & Radio
sidebar_label: Check & Radio
---

We created consistent cross-browser and cross-device checkboxes and radios, rewriting the elements from scratch.

## Checkbox

**Source code**
```
.k-input-checkbox {
    display: block;
    width: 22px;
    height: 22px;
    position: relative;
    bottom: -3px;
    margin-bottom: 4px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
    margin-bottom: 0px;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked~.k-input-checkmark {
            border: 1px solid #122448;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, .118829);
            background-color: #122448;

            &:after {
                display: block;
                left: 6px;
                top: 1px;
                width: 6px;
                height: 12px;
                border: solid #fff;
                box-sizing: content-box;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
    
            }
        }
        &:hover~.k-input-checkmark {
            border: 1px solid #122448;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, .118829)
        }
    }
    .k-input-checkmark {
        position: absolute;
        height: 22px;
        width: 22px;
        background-color: #FFFFFF;
        border: 1px solid #cdcdcd;
        border-radius: 5px;
        transition-duration: .3s;


        &:after {
            content: "";
            position: absolute;
            display: none
        }
    }

    label {
        .check-label {
            margin-bottom: 0px;
            margin-left: 24px;
        }
    }
}
```

**Example:**

<style>
.checks-example { display: flex }
.checks-example .k-input-checkbox {
    margin-right: 15px
}
</style>

<div class="kukun-docs-example checks-example"> 
    <label class="k-input-checkbox">
        <input type="checkbox">
        <span class="k-input-checkmark"></span>
    </label>
    </br>
    <label class="k-input-checkbox">
        <input type="checkbox">
        <span class="k-input-checkmark"></span>
    </label>
    </br>
    <label class="k-input-checkbox">
        <input type="checkbox">
        <span class="k-input-checkmark"></span>
    </label>
</div>

```
<label class="k-input-checkbox">
    <input type="checkbox">
    <span class="k-input-checkmark"></span>
</label>
</br>
<label class="k-input-checkbox">
    <input type="checkbox">
    <span class="k-input-checkmark"></span>
</label>
</br>
<label class="k-input-checkbox">
    <input type="checkbox">
    <span class="k-input-checkmark"></span>
</label>
```

## Radio

**Source code**
```
.k-radio-field {
  position: relative;
  width: auto;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  input {
      display: none;
      &:checked {
          & ~ .k-radio-button {
              &:before {
                  display: block;
              }
          }
      }
  }
  .k-radio-button {
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      position: relative;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #999;
      box-sizing: border-box;
      pointer-events: none;
      &:before {
          display: none;
          content: "";
          width: 8px;
          height: 8px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          background-color: #f05825;
          border-radius: 50%;
      }
  }
  p {
      margin: 0px;
      margin-left: 14px;
      pointer-events: none;
  }
}
```

**Example:**

<div class="kukun-docs-example"> 
    <label class="k-radio-field">
        <input type="radio" checked name="radio-1" value="1">
        <div class="k-radio-button">
        </div>
    </label>
    <label class="k-radio-field">
        <input type="radio" checked name="radio-1" value="1">
        <div class="k-radio-button">
        </div>
    </label>
</div>

```
<label class="k-radio-field">
    <input type="radio" checked name="radio-1" value="1">
    <div class="k-radio-button">
    </div>
</label>
<label class="k-radio-field">
    <input type="radio" name="radio-1" value="1">
    <div class="k-radio-button">
    </div>
</label>
```

**With label**

<div class="kukun-docs-example"> 
    <label class="k-radio-field">
        <input type="radio" checked name="radio-2" value="1">
        <div class="k-radio-button">
        </div>
        <p class="k-notifications">Option 1</p>
    </label>
    <label class="k-radio-field">
        <input type="radio" name="radio-2"  value="2">
        <div class="k-radio-button">
        </div>
        <p class="k-notifications">Option 2</p>
    </label>
</div>

```
<label class="k-radio-field">
    <input type="radio" checked name="radio-2" value="1">
    <div class="k-radio-button">
    </div>
    <p class="k-notifications">Option 1</p>
</label>
<label class="k-radio-field">
    <input type="radio" name="radio-2"  value="2">
    <div class="k-radio-button">
    </div>
    <p class="k-notifications">Option 2</p>
</label>
```

## Toggle / Switch

**Source code**

```
// With text
.k-container-switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .k-switch {
        margin: 0px;
        transform: translateX(-30%);
    }

    .k-swtich-left {
        margin: 0px;
        margin-right: 32px;
    }
    .k-swtich-right {
        margin: 0px;
        margin-right: 20px;
    }
}

// Only switch
.k-switch {
    position: relative;
    top: 0;
    right: 0;
    margin: auto;
    display: inline-block;
    width: 36px;
    height: 18px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:focus {
            outline: none;
        }
        &:checked + .slider {
            box-shadow: 0 0 1px #122448;
            background-color: $c-principal-2;
        }
        &:checked + .slider:before {
            -webkit-transform: translateX(18px);
            -ms-transform: translateX(18px);
            transform: translateX(18px);
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        background-color: $c-disabled;
        margin: 0px;
        width: 100%;

        &:before {
            position: absolute;
            content: "";
            height: 14px;
            width: 14px;
            left: 2px;
            bottom: 2px;
            background-color: #FFFFFF;
            -webkit-transition: 0.4s;
            transition: 0.4s;
        }
    }

    .round {
        border-radius: 34px;
        &:before {
            border-radius: 50%;
        }
    }

    @media (min-width: 1024px) {
        width: 48px;
        height: 25px;

        input {
            &:checked + .slider:before {
                -webkit-transform: translateX(23px);
                -ms-transform: translateX(23px);
                transform: translateX(23px);
            }
        }
        
        .slider {
            &:before {
                height: 21px;
                width: 21px;
            }
        }
    }
}
```

<div class="kukun-docs-example">
    <label class="k-switch">
        <input type="checkbox" id="monthly_check" aria-label="Change size type" checked="" role="checkbox">
        <span class="slider round"></span>
    </label>
</div>

```
<label class="k-switch">
    <input type="checkbox" id="monthly_check" aria-label="Change size type" checked="" role="checkbox">
    <span class="slider round"></span>
</label>
```

**With label**

<div class="kukun-docs-example">
    <div class="k-container-switch" style="justify-content: flex-start">
        <p class="k-swtich-left">My label</p>
        <label class="k-switch">
            <input type="checkbox" id="monthly_check" aria-label="Change size type" checked="" role="checkbox">
            <span class="slider round"></span>
        </label>
    </div>
    <br />
    <div class="k-container-switch" style="justify-content: flex-start; margin-left: 15px">
        <label class="k-switch">
            <input type="checkbox" id="monthly_check" aria-label="Change size type" checked="" role="checkbox">
            <span class="slider round"></span>
        </label>
        <p class="k-swtich-right">My label</p>
    </div>
</div>

```
<div class="k-container-switch">
    <p class="k-swtich-left">My label</p>
    <label class="k-switch">
        <input type="checkbox" id="monthly_check" aria-label="Change size type" checked="" role="checkbox">
        <span class="slider round"></span>
    </label>
</div>
<br />
<div class="k-container-switch">
    <label class="k-switch">
        <input type="checkbox" id="monthly_check" aria-label="Change size type" checked="" role="checkbox">
        <span class="slider round"></span>
    </label>
    <p class="k-swtich-right">My label</p>
</div>
```