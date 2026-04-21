# Design System: SAOCA & Huellas de Luz

**Stitch Project:** `4991171645414743574`

---

## 1. Token Strategy

All SAOCA colors are mapped onto **shadcn/ui's default CSS variables** in `:root` of `globals.css`. This means every component uses well-known shadcn classes (`bg-primary`, `text-muted-foreground`, `bg-accent`, etc.) — no need to learn a new token vocabulary.

Only **2 custom tokens** were added for colors that don't fit the shadcn model:

| Custom Token    | Hex       | Tailwind Class       | Usage                            |
|:----------------|:----------|:---------------------|:---------------------------------|
| `highlight`     | `#96d4b0` | `text-highlight`     | Bright values on dark sections   |
| `surface-alt`   | `#e6e9e7` | `bg-surface-alt`     | Medium-grey card backgrounds     |

---

## 2. shadcn → SAOCA Color Mapping

| shadcn Token             | SAOCA Role                | Hex       |
|:-------------------------|:--------------------------|:----------|
| `--primary`              | Deep Evergreen (brand)    | `#062511` |
| `--primary-foreground`   | White on dark             | `#ffffff` |
| `--secondary`            | Muted Pine (accents)      | `#2d694c` |
| `--secondary-foreground` | White                     | `#ffffff` |
| `--background`           | Page surface              | `#f8faf8` |
| `--foreground`           | Body text                 | `#191c1b` |
| `--card`                 | White cards               | `#ffffff` |
| `--card-foreground`      | Card text                 | `#191c1b` |
| `--muted`                | Alternate section bg      | `#f2f4f2` |
| `--muted-foreground`     | Secondary text            | `#424842` |
| `--accent`               | Soft green (pills, tags)  | `#aeeec9` |
| `--accent-foreground`    | Text on accent            | `#326e50` |
| `--destructive`          | Error                     | `#ba1a1a` |
| `--border`               | Input/section borders     | `#c2c8c0` |
| `--ring`                 | Focus rings               | `#46664c` |

---

## 3. Huellas de Luz Override

The `.huellas-mode` CSS class overrides shadcn tokens for a blue/sky palette:

```css
.huellas-mode {
  --primary: #0d2840;
  --background: #e8f4fb;
  --foreground: #0d2840;
  --secondary: #6dbde0;
}
```

Applied to the `<section id="huellas">`. All child elements automatically inherit the blue palette via the same shadcn classes.

---

## 4. Typography

| Role        | Font     | CSS Class       | Usage                                    |
|:------------|:---------|:----------------|:-----------------------------------------|
| Headlines   | Manrope  | `font-headline` | Section titles, nav, buttons. Bold 700-800, uppercase, tight tracking. |
| Body        | Inter    | `font-body`     | Paragraphs, labels, descriptions.        |
| Empathy     | Lora     | `font-empathy`  | Huellas de Luz quotes only. Italic.      |

---

## 5. Visual Utilities

| Class            | Effect                                              |
|:-----------------|:----------------------------------------------------|
| `.industrial-grid` | Cross-hatch gridlines at 5% opacity               |
| `.particle-bg`     | Radial dot pattern for Huellas atmosphere          |
| `.bw-filter`       | B&W photo → color on hover                        |

---

## 6. Component Class Cheatsheet

| Section     | Key classes used                                                |
|:------------|:----------------------------------------------------------------|
| Navbar      | `bg-white/80 backdrop-blur-xl`, `bg-accent`, `bg-primary`      |
| Hero        | `bg-primary text-primary-foreground`, `text-highlight`          |
| Services    | `bg-muted`, `bg-primary`, `bg-surface-alt`, `text-secondary`   |
| About       | `bg-muted`, `bg-background`, `border-primary`, `border-secondary` |
| Facilities  | `bg-primary text-primary-foreground`, `bg-white/5 backdrop-blur-md` |
| Huellas     | `.huellas-mode bg-background`, `bg-card`, `bg-primary`          |
| Contact     | `bg-background`, `border-border`, `text-muted-foreground`       |
| Footer      | `bg-emerald-950` (Tailwind native)                              |
