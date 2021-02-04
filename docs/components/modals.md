---
id: modals
title: Modal
sidebar_title: Modal
---

Use Kukun modals to display dialog boxes to your site.

## How to use

You need add the HTML of component and initialize it with javascript `$kl.Modal.init()`

**Example:**
<div class="kukun-docs-example">
    <button class="k-btn-primary" id="btn-trigger-modal">Open modal</button>
    <div class="k-modal-background" id="example-modal-wrapper">
        <div class="k-modal" id="example-wrapper">
            <div class="k-modal-close-wrapper k-modal-close">
                <span class="k-modal-close-icon">
                    ×
                </span>
            </div>
            <h4 class="k-h4">Thank you for reading!</h4>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
        </div>
    </div>
</div>

<script>
const modalBackground = document.querySelector("#example-modal-wrapper");
const btnTriggerModal = document.querySelector('#btn-trigger-modal');
let modalInstance = $kl.Modal.init(modalBackground, {
    elmntContainer: "md-40",
    maxElmntWidth: 500,
    scrollable: false,
});
btnTriggerModal.addEventListener('click', function() {
    modalInstance.open();
})
</script>

**Add HTML**

```
<div class="kukun-docs-example">
    <button class="k-btn-primary" id="btn-trigger-modal">Open modal</button>
    <div class="k-modal-background" id="example-modal-wrapper">
        <div class="k-modal">
            <div class="k-modal-close-wrapper k-modal-close">
                <span class="k-modal-close-icon">
                    ×
                </span>
            </div>
            <h4 class="k-h4">Thank you for reading!</h4>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
            <p class="k-content">Content</p>
        </div>
    </div>
</div>
```
**And initialize the component**

```
<script>
    const modalBackground = document.querySelector("#example-modal-wrapper");
    const btnTriggerModal = document.querySelector('#btn-trigger-modal');

    let modalInstance = $kl.Modal.init(modalBackground, {
        elmntContainer: "md-40",
        maxElmntWidth: 500,
        scrollable: false
    });

    btnTriggerModal.addEventListener('click', function() {
        modalInstance.open();
    })
</script>
```

## Options

| Name            | Type   | Default | Description | 
|---------------- |--------|---------|-------------|
| elmntContainer  | string | none    | Set the `k-width-` class to calculate width automatically |
| maxElmntWidth   | number | 600 | Set the `max-width` property in `px` |
| scrollable      | boolean | true | Enable/disable the scrollbar |

## Methods

### Open
To show the modal instance
```
modalInstance.open()
```

### Close
To close the modal instance
```
modalInstance.close()
```