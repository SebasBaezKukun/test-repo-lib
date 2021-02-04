---
id: pagination
title: Pagination
sidebar_label: Pagination
---

Add pagination links to help split up your long content into shorter, easier to understand blocks.

## Source code

```
.k-pagination {
	z-index: 2;
	width: 100%;
	height: 32px;
	text-align: center;
	margin: 30px 0 40px;
	ul {
		display: inline-block;
		margin: 0;
		li {
			a {
				border-radius: 50%;
				background: #f0f0f0;
				box-shadow: 0 2px 2px rgba(0, 0, 0, .118829);
				margin-left: 10px;
				&:hover {
					background-color: $c-main;
				}
			}
			span {
				border-radius: 50%;
				background: #f0f0f0;
				box-shadow: 0 2px 2px rgba(0, 0, 0, .118829);
				margin-left: 10px;
				&:hover {
					background-color: $c-main;
				}
			}
			span[class=current] {
				background-color: $c-main;
			}
		}
	}
	li {
		display: inline;
	}
	a {
		float: left;
		width: 32px;
		height: 32px;
		margin-left: -1px;
		font-size: 13px;
		font-weight: 400;
		line-height: 32px;
		text-decoration: none;
		color: $c-text;
		&:hover {
			color: #fff;
			background-color: $c-text;
		}
	}
	span {
		float: left;
		width: 32px;
		height: 32px;
		margin-left: -1px;
		font-size: 13px;
		font-weight: 400;
		line-height: 32px;
		text-decoration: none;
		color: $c-text;
	}
	span.pages {
		display: none;
	}
	span.dots {
		color: #fff;
		background-color: $c-text;
	}
	span.current {
		color: #fff;
		background-color: $c-text;
	}
}
@media (max-width: 767px) {
	.k-pagination {
		a.prev {
			display: none;
		}
		a.next {
			display: none;
		}
		a.prev-next {
			display: none;
		}
	}
}
@media (max-width:767px) {
	.k-pagination {
		a.next {
			display: block;
		}
		a.prev {
			display: block;
		}
		a.prev-next {
			display: block;
		}
	}
}

```

## How to use
You need add  `.k-pagination` in your pagination element.

**Example**

<div class="kukun-docs-example">
    <div class="k-pagination">
        <ul class="center-list center-text">
            <li>
                <a href="#" class="prev-next"> &lt;</a>
            </li>
            <li>
                <a href="#" class="single_page" title="1">1</a>
            </li>
            <li>
                <span class="current">2</span>
            </li>
            <li>
                <a href="#" class="single_page" title="3">3</a>
            </li>
            <li>
                <span class="expand">...</span>
            </li>
            <li>
                <a href="#" class="last" title="Last Page">28</a>
            </li>
            <li>
                <a href="#" class="prev-next">&gt;</a>
            </li>
        </ul>
    </div>
</div>

```
<div class="k-pagination">
    <ul class="center-list center-text">
        <li>
            <a href="#" class="prev-next"> &lt;</a>
        </li>
        <li>
            <a href="#" class="single_page" title="1">1</a>
        </li>
        <li>
            <span class="current">2</span>
        </li>
        <li>
            <a href="#" class="single_page" title="3">3</a>
        </li>
        <li>
            <span class="expand">...</span>
        </li>
        <li>
            <a href="#" class="last" title="Last Page">28</a>
        </li>
        <li>
            <a href="#" class="prev-next">&gt;</a>
        </li>
    </ul>
</div>
```

---

<div class="kukun-docs-example">
    <div class="k-pagination">
        <ul class="center-list center-text">
            <li>
                <span class="current">1</span>
            </li>
            <li>
                <a href="#" class="single_page" title="2">2</a>
            </li>
            <li>
                <a href="#" class="single_page" title="3">3</a>
            </li>
            <li>
                <a href="#" class="single_page" title="4">4</a>
            </li>
        </ul>
    </div>
</div>

```
<div class="k-pagination">
    <ul class="center-list center-text">
        <li>
            <span class="current">1</span>
        </li>
        <li>
            <a href="#" class="single_page" title="2">2</a>
        </li>
        <li>
            <a href="#" class="single_page" title="3">3</a>
        </li>
        <li>
            <a href="#" class="single_page" title="4">4</a>
        </li>
    </ul>
</div>
```
