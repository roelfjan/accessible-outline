# accessible-outline

## Usage

### 1. Include Accessible Outline JS
Preferably combined with the rest of your scripts.
```html
<body>
    ...

    <script src="accessible-outline.min.js" async></script>
</body>
```

### 3. Include your CSS
Hide the outline from the elements you want. For example: we hide only the outline of a button.

```css
.no-outlines {
    button {
    	outline: none;
	}
}
```