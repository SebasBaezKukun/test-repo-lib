---
id: datepicker
title: Datepicker
sidebar_title: Datepicker
---

Kukun's datepicker allow select a date from an interactive calendar.

## How to use
You need add the HTML of component and initialize it with javascript `$kl.InputCalendar.init()`

**Example**
<div class="kukun-docs-example">
    <div class="k-input-field k-input-field-calendar" id="my-input-calendar">
        <div class="k-field">
            <input type="text" class="k-input k-input-calendar" autocomplete="off" placeholder="Scheduled date" readonly>
            <label class="k-input-label">Scheduled date</label>
            <i class="k-icon-calendar calendar-icon"></i>
        </div>
        <p role="alert" class="k-error k-notifications">
            <i class="k-icon-block-1"><span class="path1"></span><span class="path2"></span></i>
            Date is required
        </p>
    </div>
</div>

<script>
let div_calendars = document.querySelector('#my-input-calendar');
let kukunCalendars = $kl.InputCalendar.init(div_calendars, {
    minDate: '2019-12-05',            
    maxDate: new Date(),
    defaultDate: new Date()
});
</script>

**Add HTML**  
```
<div class="k-input-field k-input-field-calendar" id="my-input-calendar">
    <div class="k-field">
        <input type="text" class="k-input k-input-calendar" autocomplete="off" placeholder="Scheduled date" readonly>
        <label class="k-input-label">Scheduled date</label>
        <i class="k-icon-calendar calendar-icon"></i>
    </div>
    <p role="alert" class="k-error k-notifications">
        <i class="k-icon-block-1"><span class="path1"></span><span class="path2"></span></i>
        Date is required
    </p>
</div>
```

**And initialize the component**  
```
<script>
    let div_calendars = document.querySelector('#my-input-calendar');
    let kukunCalendars = $kl.InputCalendar.init(div_calendars, {
        minDate: '2020-12-05',
        maxDate: new Date(),
        defaultDate: new Date()
    });
</script>
```

## Options

| Name        | Type            | Default   | Description                             |
|-------------|-----------------|-----------|-----------------------------------------|
| format      | string          | YYYY-MM-DD          | Date format to be use in the instance  |
| defaultDate | string,  Date() | new Date()          | Date by default selected               |
| minDate     | string, Date()  | 1990-01-01          | Minimum calendar date that can be selected |
| maxDate     | string *(with format)*, Date()  | minDate + 20 years | Maximum calendar date that can be selected |