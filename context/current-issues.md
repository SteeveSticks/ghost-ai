# Bug Fix Spec — Dialog Sizing & Sidebar Hover Actions

## Context
UI inconsistencies in dialog sizing and sidebar project action buttons.

---

## Task 1 — Standardize Dialog Size

### Problem
Dialog components vary in size across the app and are too large.

### Requirements
- Reduce dialog size to a smaller, consistent dimension
- Apply the **same width, padding, and font sizing** to ALL dialog instances in the codebase
- Do not change dialog functionality or content — layout/size only

### Acceptance Criteria
- [ ] All dialogs render at the same size
- [ ] No dialog appears oversized relative to its content
- [ ] Changes are applied globally (no one-off overrides per dialog)

---

## Task 2 — Sidebar: Show Action Buttons on Hover Only

### Problem
`Pencil` (edit) and `Trash` (delete) buttons are always visible on each project row in the sidebar.

### Requirements
- Hide both buttons by default (opacity: 0 or display: none)
- Show both buttons **only when the user hovers over that specific project row** add a subtile hover color.
- Buttons must disappear again when the user moves the cursor away

### Acceptance Criteria
- [ ] Buttons are not visible in the default/idle state
- [ ] Hovering a project row reveals ONLY that row's buttons
- [ ] Other rows' buttons remain hidden during hover of a sibling row

---

## Task 3 — Reduce Gap Between Pencil & Trash Buttons

### Problem
The spacing between the `Pencil` and `Trash` buttons is inconsistent and too large.

### Requirements
- Reduce the gap between the two buttons to a tight, consistent value 
- Must be uniform across all project rows in the sidebar

### Acceptance Criteria
- [ ] Pencil and Trash buttons sit close together with minimal, consistent spacing
- [ ] Spacing matches across every project row

---

## Scope
- No logic or data changes — UI/CSS only
- Affects: Dialog components (all), Sidebar project list rows