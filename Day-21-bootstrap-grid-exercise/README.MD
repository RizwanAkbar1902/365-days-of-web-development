# Bootstrap 5 Grid System Exercise

Completed the Bootstrap 12-column responsive layout exercise, practicing how columns adapt across different device viewports.

![Exercise Solution Preview](solution-preview.png)

### Layout Mechanics Solved:
* **Extra Extra Large screens (`xxl`):** 1 col / 11 cols split
* **Extra Large screens (`xl`):** 2 cols / 10 cols split
* **Large screens (`lg`):** 4 cols / 8 cols split
* **Medium screens (`md`):** 6 cols / 6 cols equal split
* **Mobile / Default (`col-12`):** Full-width stacked layout

### Code Snippet:
```html
<div class="row">
  <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-6 col-12">Column 1</div>
  <div class="col-xxl-11 col-xl-10 col-lg-8 col-md-6 col-12">Column 2</div>
</div>