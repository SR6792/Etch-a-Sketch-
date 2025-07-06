# Etch-a-Sketch (Grid Drawing App)
Website link:https://sr6792.github.io/Etch-a-Sketch-/
A fun browser-based grid drawing app built using HTML, CSS, and JavaScript. You can hover to color squares, click to darken them progressively, and even generate grids of different sizes or with random colors.

## 🚀 Features

- ✅ 16x16 default grid of squares
- 🎨 Hover over squares to color them (red or random colors)
- 🖱️ Click on squares to darken them by 10% each time
- 🔄 Reset button to return to the default grid
- 🎲 Random button to enable random colors on hover
- 📏 Prompt-based input to generate a new grid size (up to 100x100)

---

## 🧠 How It Works

### 1. Grid Creation

- The main container is a 480x480 pixel square (`.container`).
- The `createS(size)` function dynamically creates `size x size` squares.
- Each square is a `div` styled to fit evenly inside the container.

### 2. Hover Coloring

- If `rand` is `false`: squares turn **red** on hover.
- If `rand` is `true`: squares turn a **random RGB color** on hover.

### 3. Progressive Darkening on Click

- Each square starts with `opacity = 1` (fully visible).
- On every click, the square's opacity is reduced by 0.1.
- The current opacity is stored per square using the `dataset.opacity` attribute.
- This ensures that each square remembers how much it has been darkened, even across grid re-creation.

### 4. Buttons

- **New Button**: Prompts for a new size (`1–100`) and regenerates the grid.
- **Reset Button**: Resets grid to 16x16 and coloring mode to red.
- **Random Button**: Enables random RGB coloring on hover.

---

## 📦 File Structure

