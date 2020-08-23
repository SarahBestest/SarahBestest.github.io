let forward = {
  Landsknecht: {
    hpUp: { },
    tpUp: { },
    strUp: { brawn: 1, warCry: 1 },
    tecUp: { },
    vitUp: { },
    agiUp: { hypercut: 1 },
    lucUp: { },
    escUp: { },
    mine: { },
    swords: { twoHit: 5, counter: 8, cleaver: 1, tornado: 3, allslash: 5, hypercut: 5, riskcut: 7, blazer: 8, freezer: 8, shocker: 8 },
    axes: { twoHit: 5, counter: 8, deathaxe: 1, silencer: 3, lifeaxe: 5, brawn: 5, stunner: 7, blazer: 8, freezer: 8, shocker: 8 },
    twoHit: { },
    counter: { },
    cleaver: { },
    tornado: { },
    allslash: { },
    hypercut: { },
    riskcut: { },
    deathaxe: { },
    silencer: { },
    brawn: { },
    lifeaxe: { },
    stunner: { },
    blazer: { },
    freezer: { },
    shocker: { },
    warCry: { },
    unbound: { },
    allOut: { }
  },
  Survivalist: {
    hpUp: { },
    tpUp: { },
    strUp: { },
    tecUp: { sleeper: 3, number: 3, poisoner: 3 },
    vitUp: { },
    agiUp: { ambush: 3, sagacity: 5, baitstep: 3, velocity: 1 },
    lucUp: { },
    escUp: { },
    chop: { },
    mine: { },
    take: { },
    bows: { trueshot: 1, twoBolt: 5, sleeper: 3, number: 3, poisoner: 3, apollon: 10 },
    ambush: { firstHit: 5 },
    sagacity: { firstHit: 3 },
    firstHit: { },
    trueshot: { },
    twoBolt: { },
    sleeper: { },
    number: { },
    poisoner: { },
    apollon: { },
    firstTurn: { },
    slowstep: { firstTurn: 5 },
    baitstep: { },
    velocity: { slowstep: 3 },
    patrol: { },
    stalker: { },
    foesense: { },
    airwalk: { }
  },
  Protector: {
    hpUp: { hpRegen: 1, riskwall: 3 },
    tpUp: { },
    strUp: { },
    tecUp: { antiall: 10, refresh: 1 },
    vitUp: { fortify: 1 },
    agiUp: { },
    lucUp: { },
    escUp: { },
    mine: { },
    shields: { enGarde: 5, smite: 10, frontGuard: 1, backGuard: 1, oneGuard: 7, antifire: 3, anticold: 3, antivolt: 3, antiall: 10 },
    aegis: { },
    enGarde: { },
    hpRegen: { aegis: 5 },
    riskwall: { aegis: 5 },
    smite: { },
    frontGuard: { allGuard: 5 },
    backGuard: { allGuard: 5 },
    allGuard: { },
    oneGuard: { },
    antifire: { },
    anticold: { },
    antivolt: { },
    antiall: { },
    fortify: { },
    provoke: { parry: 3 },
    parry: { },
    refresh: { },
    flee: { },
    painless: { }
  },
  "Dark Hunter": {
    hpUp: { },
    tpUp: { },
    strUp: { ecstasy: 5 },
    tecUp: { unbind: 1 },
    vitUp: { },
    agiUp: { },
    lucUp: { },
    escUp: { },
    chop: { },
    whips: { viper: 1, shackles: 2, cuffs: 3, gag: 4, ecstasy: 8, climax: 6, bait: 8, magibait: 8 },
    swords: { hypnos: 1, nerve: 2, mirage: 3, drain: 4, petrify: 6, bait: 8, magibait: 8 },
    antisick: { },
    antibind: { },
    viper: { },
    shackles: { },
    cuffs: { },
    gag: { },
    ecstasy: { },
    climax: { },
    hypnos: { },
    nerve: { },
    mirage: { },
    drain: { },
    petrify: { },
    bait: { },
    magibait: { },
    unbind: { antisick: 3, antibind: 3 },
    racket: { },
    dominate: { }
  },
  Medic: {
    hpUp: { },
    tpUp: { tpRegen: 10 },
    strUp: { caduceus: 10 },
    tecUp: { tpRegen: 10 },
    vitUp: { caduceus: 5 },
    agiUp: { },
    lucUp: { },
    escUp: { },
    take: { },
    healer: { cure: 1, cureTwo: 3, cureThree: 5, salve: 3, salveTwo: 6, salveThree: 10, revive: 5, unbind: 3, refresh: 3, phoenix: 10 },
    patchUp: { },
    tpRegen: { },
    scavenge: { },
    cure: { salve: 3 },
    cureTwo: { salveTwo: 4 },
    cureThree: { salveThree: 5 },
    salve: { },
    salveTwo: { },
    salveThree: { },
    revive: { cpr: 10 },
    unbind: { freedom: 5 },
    freedom: { },
    refresh: { purify: 5 },
    purify: { },
    caduceus: { },
    cpr: { },
    phoenix: { },
    patrol: { },
    healingTouch: { }
  },
  Alchemist: {
    hpUp: { },
    tpUp: { analysis: 5 },
    strUp: { physUp: 3 },
    tecUp: { analysis: 5, megido: 10 },
    vitUp: { },
    agiUp: { },
    lucUp: { },
    escUp: { },
    chop: { },
    fireUp: { fire: 1, flame: 5, inferno: 5 },
    iceUp: { ice: 1, freeze: 5, cocytus: 5 },
    voltUp: { volt: 1, thunder: 5, thor: 5 },
    physUp: { blades: 1, gravity: 1, piercing: 1 },
    analysis: { megido: 5 },
    fire: { flame: 5, inferno: 5 },
    ice: { freeze: 5, cocytus: 5 },
    volt: { thunder: 5, thor: 5 },
    flame: { },
    freeze: { },
    thunder: { },
    inferno: { },
    cocytus: { },
    thor: { },
    blades: { },
    gravity: { },
    piercing: { },
    megido: { },
    return: { },
    eschaton: { }
  },
  Troubadour: {
    hpUp: { },
    tpUp: { },
    strUp: { },
    tecUp: { },
    vitUp: { },
    agiUp: { },
    lucUp: { divinity: 10 },
    escUp: { },
    take: { },
    songs: { bravery: 1, shelter: 1, mercury: 1, stamina: 3, blaze: 7, frost: 7, shock: 7, ifrit: 10, ymir: 10, taranis: 10, erasure: 5, nihilo: 5, recovery: 3 },
    divinity: { },
    bravery: { },
    shelter: { },
    mercury: { },
    stamina: { },
    blaze: { ifrit: 3 },
    frost: { ymir: 3 },
    shock: { taranis: 3 },
    ifrit: { },
    ymir: { },
    taranis: { },
    erasure: { },
    nihilo: { },
    health: { },
    recovery: { },
    danger: { },
    luring: { },
    slumber: { },
    crusade: { }
  },
  Ronin: {
    hpUp: { },
    tpUp: { },
    strUp: { clarity: 5, deadLaw: 1 },
    tecUp: { },
    vitUp: { },
    agiUp: { shiraha: 8 },
    lucUp: { shiraha: 8 },
    escUp: { },
    mine: { },
    shiraha: { },
    overhead: { zamba: 1, midereba: 10, orochi: 5, kienzan: 7 },
    seigan: { koteuchi: 1, getsuei: 3, raizuki: 5, minakata: 7 },
    iai: { kubiuchi: 1, nukechi: 3, hyosetsu: 5, hosoyuki: 7 },
    clarity: { },
    sayageki: { },
    zamba: { },
    midereba: { },
    koteuchi: { getsuei: 5 },
    getsuei: { },
    kubiuchi: { nukechi: 5 },
    nukechi: { },
    orochi: { kienzan: 5 },
    raizuki: { minakata: 5 },
    hyosetsu: { hosoyuki: 5 },
    kienzan: { },
    minakata: { },
    hosoyuki: { },
    deadLaw: { midereba: 5 },
    issen: { }
  },
  Hexer: {
    hpUp: { },
    tpUp: { scavenge: 5 },
    strUp: { },
    tecUp: { scavenge: 5 },
    vitUp: { },
    agiUp: { },
    lucUp: { },
    escUp: { },
    take: { },
    curses: { sapping: 1, frailty: 1, leaden: 1, dampen: 10, cranial: 3, abdomen: 3, immobile: 3, blinding: 1, poison: 2, torpor: 3, evilEye: 4, paralysis: 5, corrupt: 6, revenge: 7 },
    scavenge: { dampen: 5 },
    sapping: { },
    frailty: { },
    leaden: { },
    dampen: { },
    cranial: { },
    abdomen: { },
    immobile: { },
    blinding: { },
    poison: { },
    torpor: { },
    evilEye: { suicide: 1, betrayal: 1, paralyze: 1 },
    paralysis: { },
    corrupt: { },
    suicide: { },
    betrayal: { },
    paralyze: { },
    revenge: { },
    caprice: { }
  },
  Gunner: {
    hpUp: { },
    tpUp: { },
    strUp: { },
    tecUp: { medishot: 1 },
    vitUp: { },
    agiUp: { legshot: 1, armshot: 1, headshot: 1 },
    lucUp: { },
    escUp: { },
    take: { },
    guns: { twoHit: 10, legshot: 2, armshot: 3, headshot: 4, riskshot: 5, stunshot: 5, snipe: 5, fireshot: 1, iceshot: 1, voltshot: 1, riskfire: 5, riskice: 1, riskvolt: 1, wildshot: 7, ricochet: 10 },
    twoHit: { },
    weakshot: { },
    legshot: { },
    armshot: { },
    headshot: { },
    riskshot: { },
    stunshot: { },
    snipe: { },
    fireshot: { riskfire: 5 },
    iceshot: { riskice: 5 },
    voltshot: { riskvolt: 5 },
    riskfire: { },
    riskice: { },
    riskvolt: { },
    wildshot: { },
    ricochet: { },
    medishot: { },
    haltshot: { },
    riotGun: { }
  },
  "War Magus": {
    hpUp: { },
    tpUp: { transfer: 1 },
    strUp: { blindcut: 1, venomcut: 2, sleepcut: 3, fearcut: 4, stuncut: 5, cursecut: 6 },
    tecUp: { },
    vitUp: { },
    agiUp: { },
    lucUp: { },
    escUp: { },
    chop: { },
    warEdge: { blindcut: 1, venomcut:2, sleepcut:3, fearcut: 4, stuncut: 5, cursecut: 10 },
    warLore: { cure: 1, cureTwo: 3, cureThree: 5, salve: 7, salveTwo: 10, warmight: 2, rockskin: 2, elkspeed: 2, erase: 3 },
    regenall: { },
    blindcut: { },
    venomcut: { },
    sleepcut: { },
    fearcut: { },
    stuncut: { },
    cursecut: { },
    cure: { salve: 3 },
    cureTwo: { salveTwo: 4 },
    cureThree: { },
    salve: { },
    salveTwo: { },
    warmight: { },
    rockskin: { },
    elkspeed: { },
    erase: { },
    transfer: { },
    invoke: { }
  },
  Beast: {
    hpUp: { autocure: 3 },
    tpUp: { },
    strUp: { },
    tecUp: { fetch: 5 },
    vitUp: { enGarde: 10 },
    agiUp: { },
    lucUp: { fetch: 5 },
    escUp: { },
    loyalty: { rampage: 10, bristle: 3, preen: 2, dozeOff: 1 },
    autocure: { autoheal: 5 },
    autoheal: { },
    enGarde: { tenacity: 5 },
    tenacity: { },
    maul: { devour: 5 },
    devour: { },
    bodyslam: { rampage: 5 },
    rampage: { },
    claw: { wildcut: 5 },
    wildcut: { },
    bristle: { },
    preen: { },
    wildwall: { },
    roar: { },
    saliva: { },
    dozeOff: { },
    howl: { },
    growl: { },
    fetch: { },
    salivall: { }
  }
};
