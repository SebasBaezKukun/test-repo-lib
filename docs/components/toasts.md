---
id: toasts
title: Toast
sidebar_title: Toast
---

Push notifications in our website with a  lightweight alert message.

## How to use

Initialize component with `$kl.createToast()`

**Example**

<style>
    .fixedHeaderContainer {
        z-index: 120
    }
</style>

<div class="kukun-docs-example">
    <div id="container-toast">
    </div>
    <button class="k-btn-primary" id="btn-create-toast">
        Create toast
    </button>
</div>


<script>
const btnCreateToast = document.querySelector('#btn-create-toast');
document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', '<div class="kukun-docs-example" style="z-index: 400; position: absolute; margin-bottom: 0px"><div id="custom-toast-wrapper"></div></div>');
btnCreateToast.addEventListener('click', function() {
    $kl.createKToast({
        wrapperId: 'custom-toast-wrapper',
        toastMessage: 'My message',
        icon: '<i class="k-icon-check-2"></i>'
    });      
})
</script>

```
<button class="k-btn-primary" id="btn-create-toast">
    Create toast
</button>
```

```
<script>
    const btnCreateToast = document.querySelector('#btn-create-toast');

    btnCreateToast.addEventListener('click', function() {
        $kl.createKToast({
            toastMessage: 'My message',
            icon: '<i class="k-icon-check-2"></i>'
        });      
    })
</script>
```

## Options

| Name            | Type   | Default | Description | 
|---------------- |--------|---------|-------------|
| wrapperId       | string | body (`HTMLElement`)  | Set wrapper for toast component. Exam: `wrapperId: 'my-container'`|
| toastMessage    | string | null  | Set message for toast component |
| icon            | string | `<i class="k-icon-check-2"></i>` | Set toast icon |