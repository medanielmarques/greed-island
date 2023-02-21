export const audio = {
  Map: new Howl({
    src: './audio/map.wav',
    html5: true,
    volume: 0.1,
  }),
  initBattle: new Howl({
    src: './audio/init-battle.wav',
    html5: true,
    volume: 0.1,
  }),
  battle: new Howl({
    src: './audio/battle.mp3',
    html5: true,
    volume: 0.1,
  }),
  tackleHit: new Howl({
    src: './audio/tackle-hit.wav',
    html5: true,
    volume: 0.1,
  }),
  fireballHit: new Howl({
    src: './audio/fireball-hit.wav',
    html5: true,
    volume: 0.1,
  }),
  initFireball: new Howl({
    src: './audio/init-fireball.wav',
    html5: true,
    volume: 0.1,
  }),
  victory: new Howl({
    src: './audio/victory.wav',
    html5: true,
    volume: 0.1,
  }),
}
