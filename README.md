# jSpreadsheet Angular IME Fix

📘 English | 📗 Korean below

Workaround for **IME (Input Method Editor) input issues** in `jspreadsheet-ce`
when used in an **Angular environment**, without modifying the package source.

This repository demonstrates:
- How the IME issue occurs
- Why it happens
- A practical workaround based on composition events

---

## 🚨 Problem

When using `jspreadsheet-ce` with IME-based languages (especially Korean):

- The **first character is lost** when starting to edit a cell
- Pressing **Enter / Tab** during IME composition moves to another cell
- Arrow keys interrupt text input
- Users often need to type **twice** to input a single character

This makes spreadsheet editing nearly unusable for IME users.

---

## 🧪 Environment

- Angular
- jspreadsheet-ce `5.x`
- Windows IME (tested with Korean IME)
- Chrome / Edge

---

## 🔍 Root Cause

IME input is not a single key event.

It consists of:
- `compositionstart`
- multiple `input` updates
- `compositionend`

`jspreadsheet-ce` processes navigation keys
(**Enter / Tab / Arrow**) during composition,
which causes text confirmation to be interrupted.

---

## ✅ Solution (Workaround)

This repository applies a **DOM-level workaround**:

- Track IME state using `compositionstart / compositionend`
- Block navigation keys while IME is composing
- Execute navigation **once after composition ends**
- Re-open the editor to keep focus after cell movement

✔ No package fork  
✔ No source modification  
✔ Works in real production code

---

## 🧩 Demo

This repository includes a demo with two sheets:

- **Left**: Default `jspreadsheet-ce` behavior
- **Right**: IME guard applied

You can immediately compare the difference by typing with IME enabled.

---

## ⚠️ Notes

- This is a workaround, not an official fix
- Internal DOM structure may change in future versions
- Pinning the `jspreadsheet-ce` version is recommended

---

## ⭐ Star

If this repository helped you,
please consider giving it a ⭐

It helps other IME users find this solution.

---

---

## 🇰🇷 한국어 설명

이 레포지토리는 **Angular 환경에서 jSpreadsheet CE (5.x)** 를 사용할 때  
**한글 IME 입력 시 발생하는 문제**를 재현하고,  
패키지 소스 수정 없이 우회하는 방법을 정리한 예제입니다.

---

### 발생하는 문제

- 셀 편집 시작 시 **첫 글자가 영문으로 입력되거나 누락**
- 한글 입력 도중 **Enter / Tab 키로 셀이 이동**
- 방향키 입력 시 조합 중이던 텍스트가 깨짐
- 입력을 두 번 해야 정상 입력되는 현상

---

### 원인 요약

IME 입력은 단일 keydown 이벤트가 아니라  
`compositionstart → input → compositionend` 흐름으로 처리됩니다.

하지만 jSpreadsheet CE는
IME 조합 중에도 Enter / Tab / 방향키 네비게이션을 처리하여  
텍스트 확정 전에 셀 이동이 발생합니다.

---

### 해결 방식

이 레포에서는 다음과 같은 방식으로 우회합니다.

- IME 조합 상태를 직접 추적
- 조합 중에는 셀 이동 키 입력 차단
- 조합 종료 후 한 번만 셀 이동 처리
- 셀 이동 후 editor를 다시 열어 포커스 유지

> 본 코드는 **한국어 IME 기준으로 테스트**되었으며,  
> 동일한 IME 구조를 사용하는 **중국어 / 일본어 IME**에서도  
> 동작할 가능성이 높습니다.

---

### 정리

- 공식 옵션 없이도 IME 문제를 상당 부분 완화 가능
- 실제 운영 환경에서 적용 가능한 수준
- 버전 변경 시 selector 조정이 필요할 수 있음

---

⭐ 도움이 되었다면 좋겠습니다!
