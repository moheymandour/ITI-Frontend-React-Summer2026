# Lab 5 — Popup Windows & Dynamic Styling

Three exercises covering `window.open()`, dynamic inline CSS via JavaScript, and form handling.

| # | File | Description |
|---|------|-------------|
| 1 | [01-advertising-window.html](./01-advertising-window.html) | Opens `adbook.html` in a new popup window when a link is clicked. |
| — | [adbook.html](./adbook.html) | The popup's content page — auto-scrolls down the page and closes the window once it reaches the bottom. |
| 2 | [02-text-style-control-panel.html](./02-text-style-control-panel.html) | A control panel of radio buttons that dynamically change a paragraph's font, alignment, line height, letter spacing, indent, text transform, decoration, and border — live, via JavaScript. |
| 3 | [03-profile-registration-form.html](./03-profile-registration-form.html) | A registration form (name, age, gender with avatar images, favorite color) that opens a personalized welcome page in a new tab on submit. |

## Concepts Practiced

- `window.open()` for popups and new tabs
- `window.scrollBy()` / `window.close()` / `setInterval()`
- Dynamic inline styling via `element.style.*`
- Form data collection with radio buttons and `<select>`
- `getElementsByName()` for radio group handling

## Notes

- `01-advertising-window.html` requires `adbook.html` to be in the same folder (it opens it as a popup).
- `03-profile-registration-form.html` requires `maleAvatar.jpg` and `femaleAvatar.jpg` to be in the same folder.
