const loadCollisionObjects = (scene) => {
  "use strict";
  return [
    {
      firstObject: scene.player,
      secondObject: scene.enemies,
      function: scene.characterAndEnemyCollision(),
    },
    {
      firstObject: scene.player,
      secondObject: scene.stones,
      function: scene.itemPlayerCollision(),
      overlap: true,
    },
    {
      firstObject: scene.thrownStones,
      secondObject: scene.enemies,
      function: scene.rockAndEnemyCollision(),
    },
    {
      firstObject: scene.coins,
      secondObject: scene.player,
      function: scene.itemPlayerCollision(),
      overlap: true,
    },
    {
      firstObject: scene.burger,
      secondObject: scene.player,
      function: scene.itemPlayerCollision(),
      overlap: true,
    },
    {
      firstObject: scene.spikes,
      secondObject: scene.player,
      function: scene.playerSpikesCollision(),
    },
    {
      firstObject: scene.enemies,
      secondObject: scene.enemyStop,
      function: scene.enemyStopCollision(),
    },
  ];
};

const groupsToCreate = {
  staticGroups: ["spikes", "enemyStop"],
  normalGroups: [
    "stones",
    "enemies",
    "thrownStones",
    "coins",
    "burger",
    "fireballs",
  ],
};

const bars = [
  { name: "healthBar", y: 16, sprite: "Healthbar_sprite", value: 3 },
  {
    name: "stoneBar",
    y: 32,
    sprite: "Energybar_sprite",
    value: 0,
  },
  { name: "coinBar", y: 48, sprite: "coinBar", value: 0 },
];

const spikesCoords = [
  [1360, 304],
  [1392, 304],
  [2768, 304],
  [2800, 304],
  [2832, 304],
  [2864, 304],
];

const bearCoords = [
  [720, 184],
  [1320, 264],
  [1104, 264],
  [2184, 264],
  [1992, 264],
  [1704, 264],
  [3128, 88],
  [3752, 264],
  [3344, 264],
];

const rockItemCoords = [
  [416, 272],
  [1000, 280],
  [1520, 280],
  [1880, 280],
  [2928, 272],
  [3584, 272],
];

const burgerCoords = [
  [1440, 272],
  [3016, 88],
  [3920, 144],
  [2984, 272],
];

const coinCoords = [
  [2696, 272],
  [704, 192],
  [2872, 88],
];

const enemyStopCoords = [
  [608, 192],
  [800, 192],
  [16, 272],
  [1360, 272],
  [1392, 272],
  [2592, 96],
  [3168, 96],
  [2864, 272],
  [2768, 272],
  [3816, 272],
  [3960, 272],
  [4528, 272],
];

const objectsToCreate = [
  [Spikes, spikesCoords],
  [Bear, bearCoords],
  [RockItem, rockItemCoords],
  [Burger, burgerCoords],
  [Coin, coinCoords],
  [EnemyStop, enemyStopCoords],
];

const audio = [
  {
    key: "backgroundmusic",
    config: {
      volume: 0.2,
      loop: true,
    },
  },
  { key: "coin" },
  { key: "gameOverAudio" },
  { key: "hit" },
  { key: "youWin" },
  { key: "bossMusic" },
  { key: "stoneMusic" },
  { key: "eatMusic" },
];

const textStyle = {
  fontFamily: "Planes_ValMore",
  fontSize: "24px",
  color: "#ffffff",
  align: "center",
};

const controlInfos = [
  { text: "LEFT", imageKey: "arrowLeft", y: 270 },
  { text: "RIGHT", imageKey: "arrowRight", y: 220 },
  { text: "JUMP", imageKey: "arrowUp", y: 170 },
  { text: "SPACE", imageKey: null, y: 250, x: 380 },
];
