# NEXA ARROWS

> **THINK. TAP. ESCAPE.**

A complete, fully playable mobile arrow-path logic puzzle game built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. Inspired by minimalist tap-away logic games like Easybrain's *Arrow Puzzle: Tap Puzzle Games*.

---

## 🎯 Gameplay Overview

In **NEXA ARROWS**, you are presented with a maze of interlocking continuous arrow paths containing straight segments and 90-degree turns. Each path ends with a directional arrowhead indicating where that arrow can escape.

1. **Think Before You Tap**: Analyze the board to find arrows whose escape route to the border is completely free.
2. **Tap to Escape**: When tapped, an unblocked arrow smoothly follows its actual path, rounding every corner, and accelerates off the board.
3. **Avoid Blockers**: Tapping an arrow whose escape route is blocked by another arrow results in a gentle collision bounce, a warning sound, and costs you **1 Heart (❤️)**.
4. **Use Power-Ups**:
   - 💡 **Hint**: Highlights an unblocked arrow with a glowing cyan pulse without auto-playing it.
   - ↺ **Undo**: Rewinds your last successful escape move and restores the board state.
5. **Clear the Grid**: Successfully release all arrows to earn victory fanfare, unlock trophies, and advance to unlimited new levels!

---

## ✨ Key Features

- **Continuous 90° Turn Paths**: Disjoint arrow paths with crisp navy-blue strokes (`#102A43`), smooth rounded corners, and sharp directional arrowheads.
- **Accurate Collision Detection**: Real-time ray-casting checks whether any arrow crosses another's exit trajectory.
- **Guaranteed 100% Solvable Levels**: Procedural generation built on reverse topological DAG ordering guarantees every single level has a verified solution.
- **Unlimited Level Progression**:
  - *Level 1*: Simple intro (4 arrows, 5×5 grid)
  - *Level 2–5*: Intro turns (5–8 arrows, 6×6 grid)
  - *Level 6–10*: Increasing density and turns (9–14 arrows, 7×7 grid)
  - *Level 11–20*: Complex maze layouts (15–22 arrows, 8×8 grid)
  - *Level 21–50*: Dense interlocking puzzles (24–40 arrows, 10×10 grid)
  - *Level 51–100*: Master arrangements (40–70 arrows, 12×12 grid)
  - *Level 101+*: Unlimited procedural scaling that never ends!
- **Digital "TIK!" Tap Sound**: Synthesized on-the-fly using the lightweight HTML5 **Web Audio API** (no audio assets to download, zero latency).
- **Audio & Haptic Feedback**:
  - Crisp "TIK" on every tap
  - Pleasant upward whoosh on escape
  - Subtle error buzz on blocked moves
  - Uplifting victory arpeggio on completion
  - Vibration feedback on supported mobile devices
- **3-Heart Mistake System**: Lose 3 hearts on blocked arrows and you get a Game Over screen with instant Retry.
- **Daily Challenge Mode**: Deterministic daily puzzle seeded by `YYYY-MM-DD` with a monthly calendar streak tracker.
- **Tournament Mode**: 5 escalating stages from Bronze to Master Championship with unique trophies.
- **Player Profile ("Me")**:
  - Awards & Trophy Room
  - 8 Unlockable Achievements
  - Settings (Sound ON/OFF, Vibration ON/OFF, Restart, Progress Reset)
  - Help & Rules guide
  - 100% Ad-Free disclosure
  - Privacy policy details
- **100% Offline & Private**: All progress is saved in `localStorage`. Zero trackers, zero cookies, zero external network requests.
- **Mobile-First & GitHub Pages Ready**: Responsive layout designed for phones, tablets, and desktop browsers.

---

## 🚀 Live Demo & Running Locally

### Option 1: Direct File Opening
Double-click `index.html` in any modern web browser (Chrome, Safari, Firefox, Edge, Android Chrome, Samsung Internet).

### Option 2: Local HTTP Server
Using Python 3:
```bash
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

Using Node.js:
```bash
npx serve .
```

---

## 🛠️ Technology Stack

- **HTML5**: Semantic tags, accessible attributes, responsive viewport metadata.
- **CSS3**: Mobile-first flexbox & grid, custom properties (CSS variables), GPU-accelerated keyframe animations, backdrop blur.
- **Vanilla JavaScript (ES6+)**:
  - `PuzzleGenerator`: Reverse topological placement engine with solver validation.
  - `GeometryUtils`: Vector math, polyline segmentation, and distance interpolation.
  - `SoundManager`: Web Audio API synthetic oscillators and gain envelopes.
  - `StorageManager`: LocalStorage state persistence and recovery.
- **Vector Graphics (SVG)**: Crisp vector paths, rounded joins, scalable arrowheads, responsive `viewBox="0 0 500 500"`.
- **Zero Dependencies**: No libraries, no frameworks, no paid APIs.

---

## 📱 Mobile & Android Compatibility

- Viewport configured with `viewport-fit=cover` and safe-area insets.
- `touch-action: manipulation` prevents accidental zooming or scroll lockups during gameplay.
- Wide transparent hit-test paths (`stroke-width="34"`) ensure effortless, forgiving touch input on smaller screens.
- Web Audio API automatically unlocks on the player's first screen tap.

---

## 📦 Android APK

This repository also includes a native Android WebView shell. It bundles the game files into the APK, so gameplay and saved progress work offline without a server or internet connection.

### Download a ready-to-install APK

Every push that changes the Android wrapper or game files builds a debug APK with GitHub Actions. Open the repository's **Actions → Build Android APK** run and download the `nexa-arrows-android-apk` artifact. The APK is signed with Android's debug key and can be installed directly on a device (you may need to allow installs from your browser or file manager).

### Build locally

Open the `android/` folder in Android Studio, or build with JDK 17 and Android SDK Platform 35:

```bash
./android/gradlew --no-daemon -p android assembleDebug
```

The installable APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`.

## 📄 License

MIT License. Created with ❤️ for puzzle lovers everywhere.
