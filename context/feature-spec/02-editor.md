We need the base chrome components that frames every editors screen - the top navbar and the left sidebar shell. This will be reused and extended in every chapter that follows.


### Editor Navbar

Create `component/editor/editor-navbar.tsx`

Requirements 

- Fixed-height top navbar
- left, center, and right section
- left section contain sidebar toggle button
- use `PanelLeftOpen` / `PanelLeftClose` based on their sidebar state
- right section stays empty for now 
- dark background with subtle bottom border

### Project Sidebar

Create `component/editor/project-sidebar.tsx`

Requirements:

- sidebar should float above the editor canvas
- opening it should not push the page content
- slides in from the left
- accept `isOpen` props
- headers with `Projects` title + close button
- shadcn `Tabs`:
  - My Projects
  - Shared
- both tabs shows empty placeholder state
- full-width `New-Project` button at the bottom with `Plus` icon

### Dialog Pattern

Use the exsiting color token for `global.css` styling.

Support:

- title
- discription
- footer actions

Do not build actual dialog yet

# Check when done 
- new component compile without typescript errors
- no lint errors
- dialog patten is ready for future use 