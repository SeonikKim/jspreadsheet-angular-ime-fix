# jspreadsheet Angular IME Fix

Workaround for **Korean IME input issues** in `jspreadsheet-ce`  
(Angular environment, no package source modification)

---

## 🚨 Problem

When using `jspreadsheet-ce` with **Korean IME**:

- First character is dropped on cell edit
- Enter / Tab moves the cell while IME is composing
- Arrow navigation breaks text input
- Users must type twice to input one character

This makes spreadsheet editing **nearly unusable** for Korean users.

---

## 🧪 Environment

- Angular
- jspreadsheet-ce `^5.0.4`
- Windows Korean IME
- Chrome / Edge

---

## 🔍 Root Cause

`jspreadsheet-ce` does **not correctly handle IME composition events**.

- `compositionstart / compositionend` are ignored
- `keydown (Enter / Tab / Arrow)` is processed during IME composition
- Navigation logic conflicts with IME text confirmation

---

## ✅ Solution (This Repository)

This repository provides a **DOM-level workaround** without modifying jspreadsheet source code.

### Key ideas

- Track IME state via `compositionstart / compositionend`
- Block Enter / Tab / Arrow navigation **while composing**
- Apply navigation **once after composition ends**
- Re-open editor automatically to prevent focus loss
- Works with mouse, keyboard, and paste operations

✔ No fork  
✔ No monkey patch  
✔ Safe for production

---

## 🧩 How It Works

```text
IME composing
 ├─ keydown Enter/Tab → blocked
 ├─ arrow navigation → blocked
 └─ input allowed

compositionend
 └─ navigation executed once (Excel-like UX)
