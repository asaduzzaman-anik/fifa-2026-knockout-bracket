# FIFA World Cup 2026 — Knockout Bracket Predictor

An interactive knockout-stage bracket for the [FIFA World Cup 2026](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026). Pick winners round by round and predict the champion. Match times are shown in **Bangladesh Standard Time (BDT)**.

## Live demo

**[Open the bracket →](https://asaduzzaman-anik.github.io/fifa-2026-knockout-bracket/)**

## Features

- Full knockout tree: Round of 32 → Round of 16 → Quarter-finals → Semi-finals → Final (+ third-place match)
- Pre-filled Round of 32 fixtures with qualified teams and country flags
- Click a team to advance them; winners flow into the next round automatically
- Match dates and kickoff times in **BDT (UTC+6)**
- Bracket connector lines between rounds
- Predictions saved automatically in your browser (`localStorage`)
- Copy or reset your predictions anytime

## How to use

1. **Open the bracket** using the [live demo link](https://asaduzzaman-anik.github.io/fifa-2026-knockout-bracket/) above, or open `index.html` locally in your browser.
2. **Pick winners** — click the team you think wins each match. The selected team is highlighted and appears in the next round.
3. **Change a pick** — click the same team again to deselect, or pick a different team (later rounds reset automatically).
4. **Edit Round of 32 teams** — double-click a team name in the first round to rename it.
5. **Third place** — after both semi-finals have a winner, pick the third-place match at the bottom of the page.
6. **Your champion** — once you complete the Final, your predicted winner appears in the header.
7. **Copy prediction** — use the **Copy prediction** button to copy all your picks to the clipboard.
8. **Reset** — use **Reset bracket** to clear all predictions and start over.

> **Tip:** Predictions are stored only in your browser. Clearing site data or using a different device will not carry over your picks.

## Run locally

No build step or server required.

```bash
git clone https://github.com/asaduzzaman-anik/fifa-2026-knockout-bracket.git
cd fifa-2026-knockout-bracket
```

Then open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

## Project structure

```
├── index.html    # Main page
├── styles.css    # Bracket layout and styling
├── bracket.js    # Bracket logic, predictions, and rendering
└── README.md     # This file
```

## License

MIT — use and modify freely.
