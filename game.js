/**
 * ============================================================================
 * NEXA ARROWS - Complete Game Engine
 * Tagline: THINK. TAP. ESCAPE.
 * Pure Vanilla JavaScript (ES6+), HTML5, CSS3, Web Audio API
 * ============================================================================
 */

'use strict';

/* ============================================================================
   1. SOUND & AUDIO MANAGER (Web Audio API)
   ============================================================================ */
class SoundManager {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.vibrationEnabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playTik() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1600, now);
      osc.frequency.exponentialRampToValueAtTime(350, now + 0.035);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}

    if (this.vibrationEnabled && navigator.vibrate) {
      try { navigator.vibrate(12); } catch (e) {}
    }
  }

  playEscape() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.22);
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {}
  }

  playBlocked() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(70, now + 0.18);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}

    if (this.vibrationEnabled && navigator.vibrate) {
      try { navigator.vibrate([35, 40, 35]); } catch (e) {}
    }
  }

  playVictory() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const st = now + idx * 0.09;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, st);
        gain.gain.setValueAtTime(0.25, st);
        gain.gain.exponentialRampToValueAtTime(0.001, st + 0.38);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(st);
        osc.stop(st + 0.4);
      });
    } catch (e) {}

    if (this.vibrationEnabled && navigator.vibrate) {
      try { navigator.vibrate([40, 60, 40]); } catch (e) {}
    }
  }

  playGameOver() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const notes = [311.13, 277.18, 233.08]; // Eb4, Db4, Bb3
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const st = now + idx * 0.15;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, st);
        gain.gain.setValueAtTime(0.25, st);
        gain.gain.exponentialRampToValueAtTime(0.001, st + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(st);
        osc.stop(st + 0.32);
      });
    } catch (e) {}
  }

  playUIClick() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.03);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {}
  }

  playUndo() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch (e) {}
  }

  playHint() {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {}
  }
}

/* ============================================================================
   2. STORAGE MANAGER (localStorage persistence)
   ============================================================================ */
class StorageManager {
  static KEY = 'nexa_arrows_save_v1';

  static getDefaultData() {
    return {
      currentLevel: 1,
      soundEnabled: true,
      vibrationEnabled: true,
      completedDailies: {},
      tournamentStage: 1,
      stats: {
        levelsCompleted: 0,
        arrowsEscaped: 0,
        hintsUsed: 0,
        dailiesCompleted: 0
      },
      achievements: {
        first_escape: false,
        level_5: false,
        level_20: false,
        level_50: false,
        flawless: false,
        daily_done: false,
        tournament_win: false,
        undo_used: false
      }
    };
  }

  static load() {
    try {
      const raw = localStorage.getItem(StorageManager.KEY);
      if (!raw) return StorageManager.getDefaultData();
      const parsed = JSON.parse(raw);
      return Object.assign(StorageManager.getDefaultData(), parsed);
    } catch (e) {
      return StorageManager.getDefaultData();
    }
  }

  static save(data) {
    try {
      localStorage.setItem(StorageManager.KEY, JSON.stringify(data));
    } catch (e) {}
  }

  static reset() {
    try {
      localStorage.removeItem(StorageManager.KEY);
    } catch (e) {}
    return StorageManager.getDefaultData();
  }
}

/* ============================================================================
   3. DETERMINISTIC PRNG (Mulberry32)
   ============================================================================ */
function createRNG(seed) {
  let s = Math.floor(seed) >>> 0;
  return function() {
    let t = s += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ============================================================================
   4. PROCEDURAL PUZZLE GENERATOR (Guaranteed 100% Solvable)
   ============================================================================ */
class PuzzleGenerator {
  static getLevelConfig(level) {
    let targetArrows, cols, rows, maxTurns, difficulty;

    if (level === 1) {
      targetArrows = 4; cols = 5; rows = 5; maxTurns = 1; difficulty = 'EASY';
    } else if (level <= 5) {
      targetArrows = 4 + (level - 1); cols = 6; rows = 6; maxTurns = 1; difficulty = 'EASY';
    } else if (level <= 10) {
      targetArrows = 8 + (level - 5); cols = 7; rows = 7; maxTurns = 2; difficulty = 'MEDIUM';
    } else if (level <= 20) {
      targetArrows = 14 + Math.floor((level - 10) * 0.9); cols = 8; rows = 8; maxTurns = 2; difficulty = 'MEDIUM';
    } else if (level <= 50) {
      targetArrows = 24 + Math.floor((level - 20) * 0.55); cols = 11; rows = 11; maxTurns = 2; difficulty = 'HARD';
    } else if (level <= 100) {
      targetArrows = 42 + Math.floor((level - 50) * 0.55); cols = 14; rows = 14; maxTurns = 2; difficulty = 'MASTER';
    } else {
      // Unlimited levels beyond 100
      targetArrows = Math.min(85, Math.floor(70 + Math.sqrt(level - 100) * 1.5));
      cols = Math.min(16, Math.floor(14 + Math.sqrt(level - 100) * 0.2));
      rows = cols;
      maxTurns = 2;
      difficulty = 'MASTER';
    }

    return { level, targetArrows, cols, rows, maxTurns, difficulty };
  }

  /**
   * Generates a guaranteed-solvable puzzle using reverse topological construction.
   * Arrows placed later in reverse order are free to escape earlier in forward play.
   */
  static generate(level, customSeed = null) {
    const config = PuzzleGenerator.getLevelConfig(level);
    const seed = customSeed !== null ? customSeed : (level * 7919 + 43);
    let rng = createRNG(seed);

    let bestPuzzle = null;
    let attempts = 0;

    // Up to 5 generation attempts to get the highest density and guaranteed solvability
    while (attempts < 5) {
      attempts++;
      const candidate = PuzzleGenerator._attemptGenerate(config, rng);
      if (candidate && PuzzleGenerator.verifySolvability(candidate.arrows, candidate.cols, candidate.rows)) {
        bestPuzzle = candidate;
        // If arrow count is within acceptable threshold, accept immediately
        if (candidate.arrows.length >= Math.min(config.targetArrows, 6) || attempts >= 3) {
          break;
        }
      }
      rng = createRNG(seed + attempts * 1013);
    }

    return bestPuzzle || PuzzleGenerator._createFallback(config);
  }

  static _attemptGenerate(config, rng) {
    const { level, targetArrows, cols, rows, maxTurns } = config;
    const grid = Array.from({ length: rows }, () => Array(cols).fill(null));
    const arrows = [];

    const DIRS = [
      { dx: 0, dy: -1 }, // UP
      { dx: 1, dy: 0 },  // RIGHT
      { dx: 0, dy: 1 },  // DOWN
      { dx: -1, dy: 0 }  // LEFT
    ];

    function isCellFree(x, y) {
      return x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === null;
    }

    function rayHitsActiveArrow(hx, hy, dx, dy) {
      let x = hx + dx;
      let y = hy + dy;
      while (x >= 0 && x < cols && y >= 0 && y < rows) {
        if (grid[y][x] !== null) return true;
        x += dx;
        y += dy;
      }
      return false;
    }

    let searchSteps = 0;
    const maxSearch = targetArrows * 220;

    while (arrows.length < targetArrows && searchSteps < maxSearch) {
      searchSteps++;
      const hx = Math.floor(rng() * cols);
      const hy = Math.floor(rng() * rows);
      if (!isCellFree(hx, hy)) continue;

      // Pick an arrowhead direction whose escape ray does NOT hit any already placed arrow
      const dirIndices = [0, 1, 2, 3].sort(() => rng() - 0.5);
      let chosenDir = null;
      for (const dIdx of dirIndices) {
        const d = DIRS[dIdx];
        if (!rayHitsActiveArrow(hx, hy, d.dx, d.dy)) {
          chosenDir = d;
          break;
        }
      }
      if (!chosenDir) continue;

      // Grow the arrow body backward from the head
      const points = [{ x: hx, y: hy }];
      let curX = hx;
      let curY = hy;
      let inDir = { dx: -chosenDir.dx, dy: -chosenDir.dy };

      const allowTurns = (config.cols > 5 && rng() > 0.35);
      const numTurns = allowTurns ? (rng() > 0.5 ? 1 : Math.min(maxTurns, 2)) : 0;
      const numSegments = 1 + numTurns;

      for (let s = 0; s < numSegments; s++) {
        const segLen = (level <= 5) ? (1 + Math.floor(rng() * 2)) : (1 + (rng() > 0.65 ? 1 : 0));
        for (let st = 0; st < segLen; st++) {
          const nx = curX + inDir.dx;
          const ny = curY + inDir.dy;
          if (!isCellFree(nx, ny) || points.some(p => p.x === nx && p.y === ny)) {
            break;
          }
          curX = nx;
          curY = ny;
          points.unshift({ x: curX, y: curY });
        }

        // Turn 90 degrees if segments remain
        if (s < numSegments - 1 && points.length >= 2) {
          const turnDirs = [
            { dx: -inDir.dy, dy: inDir.dx },
            { dx: inDir.dy, dy: -inDir.dx }
          ].sort(() => rng() - 0.5);
          let turned = false;
          for (const td of turnDirs) {
            if (isCellFree(curX + td.dx, curY + td.dy)) {
              inDir = td;
              turned = true;
              break;
            }
          }
          if (!turned) break;
        }
      }

      if (points.length < 2) continue;

      const head = points[points.length - 1];
      const prev = points[points.length - 2];
      const actualDx = Math.sign(head.x - prev.x);
      const actualDy = Math.sign(head.y - prev.y);

      if (actualDx !== chosenDir.dx || actualDy !== chosenDir.dy) continue;
      if (rayHitsActiveArrow(head.x, head.y, actualDx, actualDy)) continue;

      const arrowId = arrows.length;
      for (const p of points) {
        grid[p.y][p.x] = arrowId;
      }

      arrows.push({
        id: arrowId,
        points: points,
        head: { ...head },
        dir: { dx: actualDx, dy: actualDy },
        order: arrows.length
      });
    }

    return { arrows, cols, rows, config };
  }

  /**
   * Automated fast solver pass to mathematically guarantee that all arrows can be cleared.
   */
  static verifySolvability(arrows, cols, rows) {
    if (!arrows || arrows.length === 0) return false;
    let active = [...arrows];
    let clearedCount = 0;

    while (active.length > 0) {
      const unblocked = active.find(a => {
        let x = a.head.x + a.dir.dx;
        let y = a.head.y + a.dir.dy;
        while (x >= 0 && x < cols && y >= 0 && y < rows) {
          if (active.some(o => o.id !== a.id && o.points.some(p => p.x === x && p.y === y))) {
            return false;
          }
          x += a.dir.dx;
          y += a.dir.dy;
        }
        return true;
      });

      if (!unblocked) return false; // Deadlock detected!
      active = active.filter(a => a.id !== unblocked.id);
      clearedCount++;
    }

    return clearedCount === arrows.length;
  }

  static _createFallback(config) {
    // Elegant hardcoded fallback for absolute safety
    const cols = config.cols || 5;
    const rows = config.rows || 5;
    const arrows = [
      { id: 0, points: [{ x: 1, y: 1 }, { x: 3, y: 1 }], head: { x: 3, y: 1 }, dir: { dx: 1, dy: 0 }, order: 0 },
      { id: 1, points: [{ x: 3, y: 3 }, { x: 3, y: 2 }, { x: 1, y: 2 }], head: { x: 1, y: 2 }, dir: { dx: -1, dy: 0 }, order: 1 },
      { id: 2, points: [{ x: 2, y: 4 }, { x: 2, y: 3 }], head: { x: 2, y: 3 }, dir: { dx: 0, dy: -1 }, order: 2 }
    ];
    return { arrows, cols, rows, config };
  }
}

/* ============================================================================
   5. POLYLINE & GEOMETRY UTILITIES
   ============================================================================ */
class GeometryUtils {
  static getAngle(dx, dy) {
    if (dx === 1 && dy === 0) return 0;
    if (dx === 0 && dy === 1) return 90;
    if (dx === -1 && dy === 0) return 180;
    if (dx === 0 && dy === -1) return 270;
    return Math.atan2(dy, dx) * 180 / Math.PI;
  }

  static getCumulativeDistances(pixelPoints) {
    const dists = [0];
    for (let i = 0; i < pixelPoints.length - 1; i++) {
      const dx = pixelPoints[i + 1].x - pixelPoints[i].x;
      const dy = pixelPoints[i + 1].y - pixelPoints[i].y;
      dists.push(dists[i] + Math.hypot(dx, dy));
    }
    return dists;
  }

  static getPointAndTangentAt(pixelPoints, cumDists, dist) {
    const total = cumDists[cumDists.length - 1];
    if (dist <= 0) {
      const dx = pixelPoints[1].x - pixelPoints[0].x;
      const dy = pixelPoints[1].y - pixelPoints[0].y;
      return { pt: { ...pixelPoints[0] }, dir: { dx, dy } };
    }
    if (dist >= total) {
      const last = pixelPoints.length - 1;
      const dx = pixelPoints[last].x - pixelPoints[last - 1].x;
      const dy = pixelPoints[last].y - pixelPoints[last - 1].y;
      return { pt: { ...pixelPoints[last] }, dir: { dx, dy } };
    }
    for (let i = 0; i < cumDists.length - 1; i++) {
      if (dist >= cumDists[i] && dist <= cumDists[i + 1]) {
        const segLen = cumDists[i + 1] - cumDists[i];
        const t = segLen > 0 ? (dist - cumDists[i]) / segLen : 0;
        const p1 = pixelPoints[i];
        const p2 = pixelPoints[i + 1];
        return {
          pt: { x: p1.x + t * (p2.x - p1.x), y: p1.y + t * (p2.y - p1.y) },
          dir: { dx: p2.x - p1.x, dy: p2.y - p1.y }
        };
      }
    }
    return { pt: { ...pixelPoints[pixelPoints.length - 1] }, dir: { dx: 1, dy: 0 } };
  }

  static getSubPolyline(pixelPoints, cumDists, dStart, dEnd) {
    const subPoints = [];
    const startInfo = GeometryUtils.getPointAndTangentAt(pixelPoints, cumDists, dStart);
    subPoints.push(startInfo.pt);

    for (let i = 0; i < pixelPoints.length; i++) {
      if (cumDists[i] > dStart && cumDists[i] < dEnd) {
        subPoints.push({ ...pixelPoints[i] });
      }
    }

    const endInfo = GeometryUtils.getPointAndTangentAt(pixelPoints, cumDists, dEnd);
    subPoints.push(endInfo.pt);

    return { subPoints, headPt: endInfo.pt, headDir: endInfo.dir };
  }

  static pointsToSVGPath(points) {
    if (!points || points.length === 0) return '';
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x.toFixed(1)} ${points[i].y.toFixed(1)}`;
    }
    return d;
  }
}

/* ============================================================================
   6. MAIN NEXA ARROWS GAME CONTROLLER
   ============================================================================ */
class NexaArrowsGame {
  constructor() {
    this.sound = new SoundManager();
    this.saveData = StorageManager.load();

    // Mode state: 'campaign' | 'daily' | 'tournament'
    this.gameMode = 'campaign';
    this.currentLevelNumber = this.saveData.currentLevel || 1;
    this.tournamentStage = this.saveData.tournamentStage || 1;

    // Active board state
    this.activeArrows = [];
    this.initialArrowCount = 0;
    this.cols = 5;
    this.rows = 5;
    this.hearts = 3;
    this.maxHearts = 3;
    this.undoStack = [];
    this.isAnimating = false;
    this.levelComplete = false;
    this.gameOver = false;
    this.mistakesThisLevel = 0;

    // Board rendering constants
    this.svgSize = 500;
    this.boardPadding = 46;

    // Initialize DOM references & event listeners
    this.initDOM();
    this.bindEvents();
    this.updateHomeScreenUI();
    this.updateProfileUI();

    // Unlock audio on first touch
    const unlockAudio = () => {
      this.sound.init();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('click', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio, { passive: true });
    window.addEventListener('click', unlockAudio, { passive: true });
  }

  initDOM() {
    // Screens
    this.screens = {
      home: document.getElementById('screen-home'),
      daily: document.getElementById('screen-daily'),
      profile: document.getElementById('screen-profile'),
      game: document.getElementById('screen-game')
    };

    // Nav buttons
    this.navButtons = {
      home: document.getElementById('nav-btn-home'),
      daily: document.getElementById('nav-btn-daily'),
      me: document.getElementById('nav-btn-me')
    };
    this.bottomNav = document.getElementById('bottom-nav');

    // Home elements
    this.homePlayBtn = document.getElementById('btn-home-play');
    this.homeLevelText = document.getElementById('home-current-level-text');
    this.homeDailyCard = document.getElementById('home-daily-card');
    this.homeTournamentCard = document.getElementById('home-tournament-card');
    this.homeDailyDate = document.getElementById('home-daily-date');
    this.homeDailyBadge = document.getElementById('home-daily-badge');
    this.homeTournamentSub = document.getElementById('home-tournament-sub');

    // Game elements
    this.gameBackBtn = document.getElementById('btn-game-back');
    this.gameSettingsBtn = document.getElementById('btn-game-settings');
    this.gameLevelTitle = document.getElementById('game-level-title');
    this.gameModeTag = document.getElementById('game-mode-subtitle');
    this.gameArrowCount = document.getElementById('game-arrow-count');
    this.gameHeartsContainer = document.getElementById('game-hearts-container');
    this.gameDiffBadge = document.getElementById('game-diff-badge');
    this.svgArrowsLayer = document.getElementById('svg-arrows-layer');
    this.boardToast = document.getElementById('board-toast');
    this.btnPowerupHint = document.getElementById('btn-powerup-hint');
    this.btnPowerupUndo = document.getElementById('btn-powerup-undo');

    // Modals
    this.modals = {
      levelComplete: document.getElementById('modal-level-complete'),
      gameOver: document.getElementById('modal-game-over'),
      settings: document.getElementById('modal-settings'),
      help: document.getElementById('modal-help'),
      about: document.getElementById('modal-about'),
      privacy: document.getElementById('modal-privacy'),
      removeAds: document.getElementById('modal-remove-ads'),
      achievements: document.getElementById('modal-achievements'),
      awards: document.getElementById('modal-awards'),
      tournament: document.getElementById('modal-tournament'),
      confirmReset: document.getElementById('modal-confirm-reset')
    };

    // Modal action buttons
    this.btnNextLevel = document.getElementById('btn-next-level');
    this.btnCompleteHome = document.getElementById('btn-complete-home');
    this.btnRetryLevel = document.getElementById('btn-retry-level');
    this.btnGameoverHome = document.getElementById('btn-gameover-home');
    this.btnSettingsRestart = document.getElementById('btn-settings-restart');
    this.btnSettingsReset = document.getElementById('btn-settings-reset');
    this.btnConfirmResetYes = document.getElementById('btn-confirm-reset-yes');
    this.settingSoundToggle = document.getElementById('setting-sound-toggle');
    this.settingVibrationToggle = document.getElementById('setting-vibration-toggle');

    // Daily screen elements
    this.dailyScreenDate = document.getElementById('daily-screen-date');
    this.btnStartDaily = document.getElementById('btn-start-daily');
    this.dailyStatusTitle = document.getElementById('daily-status-title');
    this.dailyStatusDesc = document.getElementById('daily-status-desc');
    this.dailyStatusPill = document.getElementById('daily-status-pill');
    this.dailyStreakCount = document.getElementById('daily-streak-count');
    this.dailyCalendarGrid = document.getElementById('daily-calendar-grid');

    // Sync settings toggles
    this.settingSoundToggle.checked = !!this.saveData.soundEnabled;
    this.settingVibrationToggle.checked = !!this.saveData.vibrationEnabled;
    this.sound.soundEnabled = !!this.saveData.soundEnabled;
    this.sound.vibrationEnabled = !!this.saveData.vibrationEnabled;
  }

  bindEvents() {
    // Navigation tabs
    Object.entries(this.navButtons).forEach(([key, btn]) => {
      btn.addEventListener('click', () => {
        this.sound.playUIClick();
        const screenKey = btn.getAttribute('data-target').replace('screen-', '');
        this.switchScreen(screenKey);
      });
    });

    // Home buttons
    this.homePlayBtn.addEventListener('click', () => {
      this.sound.playUIClick();
      this.startCampaignLevel(this.saveData.currentLevel || 1);
    });

    this.homeDailyCard.addEventListener('click', () => {
      this.sound.playUIClick();
      this.startDailyChallenge();
    });

    this.homeTournamentCard.addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('tournament');
      this.renderTournamentModal();
    });

    // Daily screen start button
    this.btnStartDaily.addEventListener('click', () => {
      this.sound.playUIClick();
      this.startDailyChallenge();
    });

    // Game top bar
    this.gameBackBtn.addEventListener('click', () => {
      this.sound.playUIClick();
      this.switchScreen('home');
      this.updateHomeScreenUI();
    });

    this.gameSettingsBtn.addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('settings');
    });

    // Power-ups
    this.btnPowerupHint.addEventListener('click', () => this.handleHintTap());
    this.btnPowerupUndo.addEventListener('click', () => this.handleUndoTap());

    // Modal buttons
    this.btnNextLevel.addEventListener('click', () => {
      this.sound.playUIClick();
      this.closeModal('levelComplete');
      if (this.gameMode === 'campaign') {
        this.startCampaignLevel(this.currentLevelNumber + 1);
      } else if (this.gameMode === 'tournament') {
        const nextStage = Math.min(5, this.tournamentStage + 1);
        this.saveData.tournamentStage = nextStage;
        StorageManager.save(this.saveData);
        this.startTournamentStage(nextStage);
      } else {
        this.switchScreen('home');
      }
    });

    this.btnCompleteHome.addEventListener('click', () => {
      this.sound.playUIClick();
      this.closeModal('levelComplete');
      this.switchScreen('home');
      this.updateHomeScreenUI();
    });

    this.btnRetryLevel.addEventListener('click', () => {
      this.sound.playUIClick();
      this.closeModal('gameOver');
      this.restartCurrentLevel();
    });

    this.btnGameoverHome.addEventListener('click', () => {
      this.sound.playUIClick();
      this.closeModal('gameOver');
      this.switchScreen('home');
      this.updateHomeScreenUI();
    });

    // Settings modal actions
    this.settingSoundToggle.addEventListener('change', (e) => {
      this.sound.soundEnabled = e.target.checked;
      this.saveData.soundEnabled = e.target.checked;
      StorageManager.save(this.saveData);
      if (this.sound.soundEnabled) this.sound.playUIClick();
    });

    this.settingVibrationToggle.addEventListener('change', (e) => {
      this.sound.vibrationEnabled = e.target.checked;
      this.saveData.vibrationEnabled = e.target.checked;
      StorageManager.save(this.saveData);
    });

    this.btnSettingsRestart.addEventListener('click', () => {
      this.sound.playUIClick();
      this.closeModal('settings');
      this.restartCurrentLevel();
    });

    this.btnSettingsReset.addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('confirmReset');
    });

    this.btnConfirmResetYes.addEventListener('click', () => {
      this.sound.playUIClick();
      this.saveData = StorageManager.reset();
      this.closeModal('confirmReset');
      this.closeModal('settings');
      this.switchScreen('home');
      this.updateHomeScreenUI();
      this.updateProfileUI();
      this.showToast('Progress has been reset.');
    });

    // Close buttons on all modals
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.sound.playUIClick();
        const modalId = btn.getAttribute('data-close');
        const modalKey = modalId.replace('modal-', '').replace(/-([a-z])/g, g => g[1].toUpperCase());
        this.closeModal(modalKey);
      });
    });

    // Profile menu items
    document.getElementById('btn-menu-awards').addEventListener('click', () => {
      this.sound.playUIClick();
      this.renderAwardsModal();
      this.openModal('awards');
    });

    document.getElementById('btn-menu-achievements').addEventListener('click', () => {
      this.sound.playUIClick();
      this.renderAchievementsModal();
      this.openModal('achievements');
    });

    document.getElementById('btn-menu-settings').addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('settings');
    });

    document.getElementById('btn-menu-help').addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('help');
    });

    document.getElementById('btn-menu-about').addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('about');
    });

    document.getElementById('btn-menu-privacy').addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('privacy');
    });

    document.getElementById('btn-menu-remove-ads').addEventListener('click', () => {
      this.sound.playUIClick();
      this.openModal('removeAds');
    });

    // Tournament stage start button
    document.getElementById('btn-start-tournament-stage').addEventListener('click', () => {
      this.sound.playUIClick();
      this.closeModal('tournament');
      this.startTournamentStage(this.saveData.tournamentStage || 1);
    });
  }

  /* ==========================================================================
     SCREEN MANAGEMENT
     ========================================================================== */
  switchScreen(screenName) {
    Object.values(this.screens).forEach(s => s.classList.remove('active'));
    if (this.screens[screenName]) {
      this.screens[screenName].classList.add('active');
    }

    // Toggle bottom nav bar visibility (hidden during gameplay)
    if (screenName === 'game') {
      this.bottomNav.style.display = 'none';
    } else {
      this.bottomNav.style.display = 'flex';
      Object.entries(this.navButtons).forEach(([key, btn]) => {
        if (key === (screenName === 'profile' ? 'me' : screenName)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    if (screenName === 'daily') {
      this.renderDailyScreen();
    } else if (screenName === 'profile') {
      this.updateProfileUI();
    }
  }

  openModal(modalKey) {
    if (this.modals[modalKey]) {
      this.modals[modalKey].classList.add('show');
    }
  }

  closeModal(modalKey) {
    if (this.modals[modalKey]) {
      this.modals[modalKey].classList.remove('show');
    }
  }

  showToast(text) {
    if (!this.boardToast) return;
    this.boardToast.textContent = text;
    this.boardToast.classList.add('show');
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      this.boardToast.classList.remove('show');
    }, 1800);
  }

  /* ==========================================================================
     LEVEL INITIALIZATION & START
     ========================================================================== */
  startCampaignLevel(lvl) {
    this.gameMode = 'campaign';
    this.currentLevelNumber = lvl;
    this.gameLevelTitle.textContent = `Level ${lvl}`;
    this.gameModeTag.textContent = 'CAMPAIGN';

    const puzzle = PuzzleGenerator.generate(lvl);
    this.setupPuzzleState(puzzle);
    this.switchScreen('game');
  }

  startDailyChallenge() {
    this.gameMode = 'daily';
    const today = new Date();
    const dateStr = today.toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash) + 8819;

    this.gameLevelTitle.textContent = 'Daily Puzzle';
    this.gameModeTag.textContent = 'DAILY';

    // Daily puzzles are balanced at ~Level 25 difficulty
    const puzzle = PuzzleGenerator.generate(25, seed);
    this.setupPuzzleState(puzzle);
    this.switchScreen('game');
  }

  startTournamentStage(stage) {
    this.gameMode = 'tournament';
    this.tournamentStage = stage;
    this.gameLevelTitle.textContent = `Stage ${stage}/5`;
    this.gameModeTag.textContent = 'TOURNAMENT';

    const stageLevels = [15, 28, 45, 65, 85];
    const targetLvl = stageLevels[stage - 1] || 50;
    const puzzle = PuzzleGenerator.generate(targetLvl, stage * 9973 + 17);
    this.setupPuzzleState(puzzle);
    this.switchScreen('game');
  }

  restartCurrentLevel() {
    if (this.gameMode === 'campaign') {
      this.startCampaignLevel(this.currentLevelNumber);
    } else if (this.gameMode === 'daily') {
      this.startDailyChallenge();
    } else {
      this.startTournamentStage(this.tournamentStage);
    }
  }

  setupPuzzleState(puzzle) {
    this.cols = puzzle.cols;
    this.rows = puzzle.rows;
    // Deep clone arrow definitions so restarting uses original data
    this.activeArrows = JSON.parse(JSON.stringify(puzzle.arrows));
    this.initialArrowCount = this.activeArrows.length;
    this.hearts = this.maxHearts;
    this.undoStack = [];
    this.isAnimating = false;
    this.levelComplete = false;
    this.gameOver = false;
    this.mistakesThisLevel = 0;

    // Difficulty badge
    const diff = puzzle.config.difficulty || 'MEDIUM';
    this.gameDiffBadge.textContent = diff;
    this.gameDiffBadge.className = `diff-badge badge-${diff.toLowerCase()}`;

    this.updateHeartsUI();
    this.updateArrowCounterUI();
    this.renderSVGBoard();
  }

  /* ==========================================================================
     SVG BOARD RENDERING & GEOMETRY
     ========================================================================== */
  gridToPixel(gx, gy) {
    const usableW = this.svgSize - 2 * this.boardPadding;
    const usableH = this.svgSize - 2 * this.boardPadding;
    const stepX = this.cols > 1 ? usableW / (this.cols - 1) : 0;
    const stepY = this.rows > 1 ? usableH / (this.rows - 1) : 0;
    return {
      x: this.boardPadding + gx * stepX,
      y: this.boardPadding + gy * stepY
    };
  }

  renderSVGBoard() {
    this.svgArrowsLayer.innerHTML = '';

    this.activeArrows.forEach(arrow => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'arrow-group');
      g.setAttribute('data-id', arrow.id);

      const pixelPoints = arrow.points.map(p => this.gridToPixel(p.x, p.y));
      const pathD = GeometryUtils.pointsToSVGPath(pixelPoints);

      // 1. Invisible wide hit area for effortless mobile tapping
      const hitPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      hitPath.setAttribute('class', 'arrow-hit');
      hitPath.setAttribute('d', pathD);
      hitPath.setAttribute('stroke-width', '34');
      g.appendChild(hitPath);

      // 2. Visible crisp continuous navy path
      const bodyPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      bodyPath.setAttribute('class', 'arrow-body');
      bodyPath.setAttribute('d', pathD);
      bodyPath.setAttribute('stroke-width', '7');
      g.appendChild(bodyPath);

      // 3. Directional Arrowhead
      const headPix = pixelPoints[pixelPoints.length - 1];
      const angle = GeometryUtils.getAngle(arrow.dir.dx, arrow.dir.dy);
      const headPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      headPoly.setAttribute('class', 'arrow-head');
      // Sleek triangular arrowhead: tip at (0,0), wings at (-14, -7.5) and (-14, 7.5)
      headPoly.setAttribute('points', '0,0 -14,-7.5 -10,0 -14,7.5');
      headPoly.setAttribute('transform', `translate(${headPix.x.toFixed(1)}, ${headPix.y.toFixed(1)}) rotate(${angle})`);
      g.appendChild(headPoly);

      // Direct tap listener on SVG group
      g.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        this.handleArrowTap(arrow.id);
      });

      this.svgArrowsLayer.appendChild(g);
    });
  }

  /* ==========================================================================
     COLLISION DETECTION & TAP LOGIC
     ========================================================================== */
  checkArrowCollision(arrow) {
    // Cast ray forward from arrow's head to the border of the board
    let x = arrow.head.x + arrow.dir.dx;
    let y = arrow.head.y + arrow.dir.dy;

    while (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
      // Find if any other active arrow crosses or occupies this grid coordinate
      const blocker = this.activeArrows.find(other => {
        if (other.id === arrow.id) return false;
        return other.points.some(p => p.x === x && p.y === y);
      });

      if (blocker) {
        return { unblocked: false, blocker };
      }
      x += arrow.dir.dx;
      y += arrow.dir.dy;
    }

    return { unblocked: true, blocker: null };
  }

  handleArrowTap(arrowId) {
    if (this.isAnimating || this.gameOver || this.levelComplete) return;

    const arrow = this.activeArrows.find(a => a.id === arrowId);
    if (!arrow) return;

    // Remove any active hint pulse immediately
    document.querySelectorAll('.hint-pulse').forEach(el => el.classList.remove('hint-pulse'));

    // Check escape route collision
    const { unblocked, blocker } = this.checkArrowCollision(arrow);

    if (unblocked) {
      // SUCCESS: Arrow escapes along its continuous path!
      this.sound.playTik();
      this.sound.playEscape();
      this.animateArrowEscape(arrow);
    } else {
      // BLOCKED: Play click and error sound, shake arrow, flash blocker, lose heart
      this.sound.playTik();
      this.sound.playBlocked();
      this.mistakesThisLevel++;
      this.animateArrowBlocked(arrow, blocker);
      this.deductHeart();
    }
  }

  /* ==========================================================================
     ARROW ANIMATIONS (Smooth 60FPS Path Interpolation)
     ========================================================================== */
  animateArrowEscape(arrow) {
    this.isAnimating = true;

    const g = this.svgArrowsLayer.querySelector(`[data-id="${arrow.id}"]`);
    if (!g) {
      this.finishArrowEscape(arrow);
      return;
    }

    const bodyPath = g.querySelector('.arrow-body');
    const hitPath = g.querySelector('.arrow-hit');
    const headPoly = g.querySelector('.arrow-head');

    // Build the full extended exit trajectory: original points + exit point off-screen
    const pixelPoints = arrow.points.map(p => this.gridToPixel(p.x, p.y));
    const lastPix = pixelPoints[pixelPoints.length - 1];
    
    // Project exit point well beyond board boundaries
    const exitDist = 180;
    const exitPoint = {
      x: lastPix.x + arrow.dir.dx * exitDist,
      y: lastPix.y + arrow.dir.dy * exitDist
    };

    const fullTrajectory = [...pixelPoints, exitPoint];
    const cumDists = GeometryUtils.getCumulativeDistances(fullTrajectory);
    const arrowLen = cumDists[pixelPoints.length - 1];
    const totalDist = cumDists[cumDists.length - 1];

    const duration = 340; // ms
    const startTime = performance.now();

    const animateFrame = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Easing: ease-in quadratic for snappy natural departure
      const easeT = t * t;

      const traveled = easeT * totalDist;
      const dStart = traveled;
      const dEnd = Math.min(totalDist, traveled + arrowLen);

      if (dStart >= totalDist || t >= 1) {
        // Arrow has completely left the viewbox
        if (g.parentNode) g.parentNode.removeChild(g);
        this.finishArrowEscape(arrow);
        return;
      }

      const { subPoints, headPt, headDir } = GeometryUtils.getSubPolyline(fullTrajectory, cumDists, dStart, dEnd);
      const newPathD = GeometryUtils.pointsToSVGPath(subPoints);

      bodyPath.setAttribute('d', newPathD);
      hitPath.setAttribute('d', newPathD);

      const angle = GeometryUtils.getAngle(headDir.dx, headDir.dy);
      headPoly.setAttribute('transform', `translate(${headPt.x.toFixed(1)}, ${headPt.y.toFixed(1)}) rotate(${angle})`);

      requestAnimationFrame(animateFrame);
    };

    requestAnimationFrame(animateFrame);
  }

  finishArrowEscape(arrow) {
    // Record for Undo capability
    this.undoStack.push({
      arrow: JSON.parse(JSON.stringify(arrow))
    });

    // Remove from active arrows
    this.activeArrows = this.activeArrows.filter(a => a.id !== arrow.id);
    this.isAnimating = false;

    // Update counter
    this.updateArrowCounterUI();

    // Stats & Achievements
    this.saveData.stats.arrowsEscaped = (this.saveData.stats.arrowsEscaped || 0) + 1;
    this.unlockAchievement('first_escape');
    StorageManager.save(this.saveData);

    // Check level complete
    if (this.activeArrows.length === 0) {
      this.handleLevelComplete();
    }
  }

  animateArrowBlocked(arrow, blocker) {
    this.isAnimating = true;

    const g = this.svgArrowsLayer.querySelector(`[data-id="${arrow.id}"]`);
    let blockerG = null;
    if (blocker) {
      blockerG = this.svgArrowsLayer.querySelector(`[data-id="${blocker.id}"]`);
      if (blockerG) blockerG.classList.add('blocking-flash');
    }

    if (!g) {
      this.isAnimating = false;
      return;
    }

    const bodyPath = g.querySelector('.arrow-body');
    const hitPath = g.querySelector('.arrow-hit');
    const headPoly = g.querySelector('.arrow-head');

    const pixelPoints = arrow.points.map(p => this.gridToPixel(p.x, p.y));
    const lastPix = pixelPoints[pixelPoints.length - 1];
    
    // Nudge forward by 12px then spring back
    const nudgePoint = {
      x: lastPix.x + arrow.dir.dx * 18,
      y: lastPix.y + arrow.dir.dy * 18
    };

    const fullTrajectory = [...pixelPoints, nudgePoint];
    const cumDists = GeometryUtils.getCumulativeDistances(fullTrajectory);
    const arrowLen = cumDists[pixelPoints.length - 1];

    const duration = 200; // ms
    const startTime = performance.now();

    const animateFrame = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);

      // Spring oscillation: sin(pi * t)
      const offset = Math.sin(Math.PI * t) * 11;
      const dStart = offset;
      const dEnd = arrowLen + offset;

      const { subPoints, headPt, headDir } = GeometryUtils.getSubPolyline(fullTrajectory, cumDists, dStart, dEnd);
      const newPathD = GeometryUtils.pointsToSVGPath(subPoints);

      bodyPath.setAttribute('d', newPathD);
      hitPath.setAttribute('d', newPathD);

      const angle = GeometryUtils.getAngle(headDir.dx, headDir.dy);
      headPoly.setAttribute('transform', `translate(${headPt.x.toFixed(1)}, ${headPt.y.toFixed(1)}) rotate(${angle})`);

      if (t < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        // Reset to original exact path
        const origD = GeometryUtils.pointsToSVGPath(pixelPoints);
        bodyPath.setAttribute('d', origD);
        hitPath.setAttribute('d', origD);
        const origAngle = GeometryUtils.getAngle(arrow.dir.dx, arrow.dir.dy);
        headPoly.setAttribute('transform', `translate(${lastPix.x.toFixed(1)}, ${lastPix.y.toFixed(1)}) rotate(${origAngle})`);

        if (blockerG) {
          setTimeout(() => blockerG.classList.remove('blocking-flash'), 250);
        }
        this.isAnimating = false;

        if (this.hearts <= 0) {
          this.handleGameOver();
        }
      }
    };

    requestAnimationFrame(animateFrame);
  }

  /* ==========================================================================
     HEARTS & MISTAKE SYSTEM
     ========================================================================== */
  deductHeart() {
    if (this.hearts <= 0) return;
    this.hearts--;
    this.updateHeartsUI(true);

    if (this.hearts === 0) {
      // Handled after blocked animation finishes
    }
  }

  updateHeartsUI(didLoseHeart = false) {
    const heartElements = this.gameHeartsContainer.querySelectorAll('.heart');
    heartElements.forEach((el, idx) => {
      if (idx < this.hearts) {
        el.className = 'heart active';
        el.textContent = '❤️';
      } else {
        el.className = 'heart lost';
        el.textContent = '🖤';
        if (didLoseHeart && idx === this.hearts) {
          el.classList.add('shake');
        }
      }
    });
  }

  updateArrowCounterUI() {
    this.gameArrowCount.textContent = this.activeArrows.length;
  }

  /* ==========================================================================
     POWER-UPS: HINT & UNDO
     ========================================================================== */
  handleHintTap() {
    if (this.isAnimating || this.gameOver || this.levelComplete) return;

    // Find any arrow with a clear path to escape
    const unblockedArrows = this.activeArrows.filter(a => this.checkArrowCollision(a).unblocked);

    if (unblockedArrows.length === 0) {
      this.showToast('No arrows can escape right now.');
      return;
    }

    // Pick an unblocked arrow to highlight
    const hintArrow = unblockedArrows[0];
    const g = this.svgArrowsLayer.querySelector(`[data-id="${hintArrow.id}"]`);

    if (g) {
      this.sound.playHint();
      document.querySelectorAll('.hint-pulse').forEach(el => el.classList.remove('hint-pulse'));
      g.classList.add('hint-pulse');

      this.saveData.stats.hintsUsed = (this.saveData.stats.hintsUsed || 0) + 1;
      StorageManager.save(this.saveData);
      this.showToast('Look here! This arrow is free to escape.');

      setTimeout(() => {
        g.classList.remove('hint-pulse');
      }, 3000);
    }
  }

  handleUndoTap() {
    if (this.isAnimating || this.gameOver || this.levelComplete) return;

    if (this.undoStack.length === 0) {
      this.showToast('Nothing to undo.');
      return;
    }

    const lastMove = this.undoStack.pop();
    const restoredArrow = lastMove.arrow;

    this.sound.playUndo();
    this.activeArrows.push(restoredArrow);
    this.updateArrowCounterUI();
    this.renderSVGBoard();

    this.unlockAchievement('undo_used');
    this.showToast('Previous move undone.');
  }

  /* ==========================================================================
     LEVEL COMPLETION & GAME OVER
     ========================================================================== */
  handleLevelComplete() {
    this.levelComplete = true;
    this.sound.playVictory();

    // Trigger confetti
    this.triggerConfetti();

    // Update stats
    this.saveData.stats.levelsCompleted = (this.saveData.stats.levelsCompleted || 0) + 1;

    // Check flawless achievement
    if (this.mistakesThisLevel === 0) {
      this.unlockAchievement('flawless');
    }

    if (this.gameMode === 'campaign') {
      const nextLvl = this.currentLevelNumber + 1;
      if (nextLvl > this.saveData.currentLevel) {
        this.saveData.currentLevel = nextLvl;
      }
      if (nextLvl >= 5) this.unlockAchievement('level_5');
      if (nextLvl >= 20) this.unlockAchievement('level_20');
      if (nextLvl >= 50) this.unlockAchievement('level_50');

      document.getElementById('complete-level-subtitle').textContent = `Level ${this.currentLevelNumber} Cleared!`;
    } else if (this.gameMode === 'daily') {
      const todayStr = new Date().toISOString().slice(0, 10);
      this.saveData.completedDailies[todayStr] = true;
      this.saveData.stats.dailiesCompleted = (this.saveData.stats.dailiesCompleted || 0) + 1;
      this.unlockAchievement('daily_done');

      document.getElementById('complete-level-subtitle').textContent = `Daily Challenge Solved!`;
    } else if (this.gameMode === 'tournament') {
      if (this.tournamentStage >= 5) {
        this.unlockAchievement('tournament_win');
        document.getElementById('complete-level-subtitle').textContent = `Tournament Champion! All Stages Cleared!`;
      } else {
        document.getElementById('complete-level-subtitle').textContent = `Tournament Stage ${this.tournamentStage} Cleared!`;
      }
    }

    StorageManager.save(this.saveData);

    // Modal stats
    document.getElementById('complete-arrows-count').textContent = this.initialArrowCount;
    let heartsStr = '';
    for (let i = 0; i < this.hearts; i++) heartsStr += '❤️';
    document.getElementById('complete-hearts-left').textContent = heartsStr || '❤️';

    setTimeout(() => {
      this.openModal('levelComplete');
    }, 400);
  }

  handleGameOver() {
    this.gameOver = true;
    this.sound.playGameOver();
    setTimeout(() => {
      this.openModal('gameOver');
    }, 350);
  }

  triggerConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    container.innerHTML = '';

    const colors = ['#2563EB', '#F59E0B', '#10B981', '#EC4899', '#8B5CF6', '#3B82F6'];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      piece.style.animationDuration = `${1.8 + Math.random() * 1}s`;
      container.appendChild(piece);
    }
  }

  /* ==========================================================================
     HOME & PROFILE & DAILY UI UPDATES
     ========================================================================== */
  updateHomeScreenUI() {
    const lvl = this.saveData.currentLevel || 1;
    this.homeLevelText.textContent = `Level ${lvl}`;

    const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    this.homeDailyDate.textContent = todayStr;

    const dateKey = new Date().toISOString().slice(0, 10);
    const isDailyDone = !!this.saveData.completedDailies[dateKey];
    this.homeDailyBadge.textContent = isDailyDone ? 'DONE ✓' : 'PLAY';

    const stage = this.saveData.tournamentStage || 1;
    this.homeTournamentSub.textContent = stage >= 5 ? 'Champion 🏆' : `Stage ${stage} of 5`;
  }

  updateProfileUI() {
    const lvl = this.saveData.currentLevel || 1;
    document.getElementById('profile-level-badge').textContent = `Level ${lvl} Unlocked`;
    document.getElementById('stat-levels-cleared').textContent = this.saveData.stats.levelsCompleted || 0;
    document.getElementById('stat-arrows-escaped').textContent = this.saveData.stats.arrowsEscaped || 0;
    document.getElementById('stat-daily-streak').textContent = this.saveData.stats.dailiesCompleted || 0;
  }

  renderDailyScreen() {
    const today = new Date();
    this.dailyScreenDate.textContent = today.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    const dateKey = today.toISOString().slice(0, 10);
    const isDone = !!this.saveData.completedDailies[dateKey];

    if (isDone) {
      this.dailyStatusTitle.textContent = 'Challenge Completed!';
      this.dailyStatusDesc.textContent = 'Great job! You have already conquered today\'s arrow maze. Come back tomorrow for a new puzzle!';
      this.dailyStatusPill.textContent = 'Completed ✓';
      this.dailyStatusPill.className = 'badge-pill completed';
      this.btnStartDaily.textContent = 'Replay Daily Challenge';
    } else {
      this.dailyStatusTitle.textContent = 'Today\'s Logic Challenge';
      this.dailyStatusDesc.textContent = 'A handcrafted daily maze to test your spatial reasoning. Consistent puzzle for everyone today.';
      this.dailyStatusPill.textContent = 'Available';
      this.dailyStatusPill.className = 'badge-pill';
      this.btnStartDaily.textContent = 'Play Daily Challenge';
    }

    // Render monthly streak grid
    this.renderDailyCalendarGrid();
  }

  renderDailyCalendarGrid() {
    this.dailyCalendarGrid.innerHTML = '';
    const today = new Date();
    const curYear = today.getFullYear();
    const curMonth = today.getMonth();
    const daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();
    const todayDate = today.getDate();

    let completedInMonth = 0;

    for (let day = 1; day <= daysInMonth; day++) {
      const dayPadded = String(day).padStart(2, '0');
      const monthPadded = String(curMonth + 1).padStart(2, '0');
      const dayKey = `${curYear}-${monthPadded}-${dayPadded}`;
      const isCompleted = !!this.saveData.completedDailies[dayKey];

      if (isCompleted) completedInMonth++;

      const cell = document.createElement('div');
      cell.className = 'streak-day-cell';
      if (day === todayDate) cell.classList.add('today');
      if (isCompleted) cell.classList.add('done');

      cell.textContent = isCompleted ? '✓' : day;
      this.dailyCalendarGrid.appendChild(cell);
    }

    this.dailyStreakCount.textContent = `${completedInMonth} Completed`;
  }

  renderAchievementsModal() {
    const listContainer = document.getElementById('achieve-items-container');
    listContainer.innerHTML = '';

    const achievementsDefs = [
      { id: 'first_escape', name: 'First Escape', desc: 'Successfully escape your very first arrow', icon: '🚀' },
      { id: 'level_5', name: 'Arrow Novice', desc: 'Reach Level 5 in Campaign mode', icon: '🎯' },
      { id: 'level_20', name: 'Pathfinder', desc: 'Reach Level 20 in Campaign mode', icon: '🧭' },
      { id: 'level_50', name: 'Puzzle Master', desc: 'Reach Level 50 in Campaign mode', icon: '👑' },
      { id: 'flawless', name: 'Flawless Mind', desc: 'Clear a level without losing a single heart', icon: '✨' },
      { id: 'daily_done', name: 'Daily Dedication', desc: 'Complete a Daily Challenge', icon: '📅' },
      { id: 'tournament_win', name: 'Tournament Champion', desc: 'Conquer Stage 5 of the Logic Tournament', icon: '🏆' },
      { id: 'undo_used', name: 'Time Bender', desc: 'Use the Undo power-up to rewind a move', icon: '↺' }
    ];

    achievementsDefs.forEach(def => {
      const isUnlocked = !!this.saveData.achievements[def.id];
      const item = document.createElement('div');
      item.className = `achieve-item ${isUnlocked ? 'unlocked' : ''}`;
      item.innerHTML = `
        <div class="achieve-icon">${isUnlocked ? def.icon : '🔒'}</div>
        <div class="achieve-info">
          <span class="achieve-name">${def.name}</span>
          <span class="achieve-desc">${def.desc}</span>
        </div>
        <span class="achieve-status">${isUnlocked ? 'UNLOCKED' : 'LOCKED'}</span>
      `;
      listContainer.appendChild(item);
    });
  }

  renderAwardsModal() {
    const grid = document.getElementById('awards-items-container');
    grid.innerHTML = '';

    const lvl = this.saveData.currentLevel || 1;
    const tStage = this.saveData.tournamentStage || 1;
    const dailiesCount = this.saveData.stats.dailiesCompleted || 0;

    const awards = [
      { name: 'Bronze Logic Cup', sub: 'Reach Level 10', unlocked: lvl >= 10, trophy: '🥉' },
      { name: 'Silver Logic Cup', sub: 'Reach Level 25', unlocked: lvl >= 25, trophy: '🥈' },
      { name: 'Gold Logic Cup', sub: 'Reach Level 50', unlocked: lvl >= 50, trophy: '🥇' },
      { name: 'Daily Champion', sub: 'Solve 3 Dailies', unlocked: dailiesCount >= 3, trophy: '🌟' },
      { name: 'Master Cup', sub: 'Win Tournament', unlocked: tStage >= 5, trophy: '🏆' }
    ];

    awards.forEach(a => {
      const card = document.createElement('div');
      card.className = `award-card ${a.unlocked ? 'unlocked' : ''}`;
      card.innerHTML = `
        <span class="award-trophy">${a.trophy}</span>
        <span class="award-name">${a.name}</span>
        <span class="award-sub">${a.sub}</span>
      `;
      grid.appendChild(card);
    });
  }

  renderTournamentModal() {
    const container = document.getElementById('tournament-stages-container');
    container.innerHTML = '';

    const stageNames = ['Bronze Qualifier', 'Silver Stage', 'Gold Gauntlet', 'Diamond Trials', 'Master Championship'];
    const currentStage = this.saveData.tournamentStage || 1;

    stageNames.forEach((name, idx) => {
      const stageNum = idx + 1;
      const row = document.createElement('div');
      row.className = 't-stage-row';
      if (stageNum === currentStage) row.classList.add('current');
      if (stageNum < currentStage) row.classList.add('cleared');

      let statusText = 'LOCKED';
      if (stageNum < currentStage) statusText = 'CLEARED ✓';
      else if (stageNum === currentStage) statusText = 'ACTIVE';

      row.innerHTML = `
        <div class="t-stage-left">
          <span class="t-stage-cup">${stageNum <= currentStage ? '🏆' : '🔒'}</span>
          <span class="t-stage-title">Stage ${stageNum}: ${name}</span>
        </div>
        <span class="t-stage-status">${statusText}</span>
      `;
      container.appendChild(row);
    });
  }

  unlockAchievement(key) {
    if (!this.saveData.achievements[key]) {
      this.saveData.achievements[key] = true;
      StorageManager.save(this.saveData);
    }
  }
}

/* ============================================================================
   7. APP BOOTSTRAPPER
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  window.nexaGame = new NexaArrowsGame();

  /**
   * Hardware back button hook for the Android (WebView) build.
   * Returns true when the back press was consumed in-app, false to let
   * the OS handle it (i.e. exit the app).
   */
  window.NexaAndroidBack = function () {
    const game = window.nexaGame;
    if (!game || !game.screens) return false;
    try {
      if (game.screens.game && game.screens.game.classList.contains('active')) {
        game.switchScreen('home');
        return true;
      }
      if (game.screens.daily && game.screens.daily.classList.contains('active')) {
        game.switchScreen('home');
        return true;
      }
      if (game.screens.profile && game.screens.profile.classList.contains('active')) {
        game.switchScreen('home');
        return true;
      }
    } catch (e) { /* fall through to exit */ }
    return false;
  };
});
