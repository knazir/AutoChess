
function makeItem(name, effects, image, components = null) {
  const item = { name, effects, image };
  if (components) {
    // don't concatenate effects for spatula items
    if (!components.find(c => c.name === "Spatula")) {
      components.forEach(c => item.effects = [...c.effects, ...item.effects]);
    }
    item.components = components;
  }
  return item;
}

/* Basic Items */
const bfSword = makeItem("B.F. Sword", ["+20 Attack Damage"], "bf.png");
const chainVest = makeItem("Chain Vest", ["+20 Armor"], "vest.png");
const giantsBelt = makeItem("Giant's Belt", ["+200 Health"], "belt.png");
const needleslyLargeRod = makeItem("Needlessly Large Rod", ["+20% Spell Damage"], "rod.png");
const negatronCloak = makeItem("Negatron Cloak", ["+20 Magic Resist"], "negatron.png");
const recurveBow = makeItem("Recurve Bow", ["+15% Attack Speed"], "recurve.png");
const spatula = makeItem("Spatula", ["Used to build items that change a champions Origin or Class"], "spatula.png");
const tear = makeItem("Tear of the Goddess", ["+20 Mana"], "tear.png");

/* Advance Items */
const ga = makeItem(
  "Guardian Angel",
  ["Wearer revives with 500 health"],
  "ga.png",
  [bfSword, chainVest]
);
const zekes = makeItem(
  "Zeke's Herald",
  ["Adjacent allies gain 10% attack speed"],
  "zekes.png",
  [bfSword, giantsBelt]
);
const gunblade = makeItem(
  "Hextech Gunblade",
  ["Heal for 25% of all damage dealt"],
  "gunblade.png",
  [bfSword, needleslyLargeRod]
);
const spearOfShoujin = makeItem(
  "Spear of Shoujin",
  ["After casting an ability, wearer gains 15% of its max mana per attack"],
  "shoujin.png",
  [bfSword, tear]
);
const swordOfTheDivine = makeItem(
  "Sword of the Divine",
  ["Each second, the wearer has a 5% chance to gain 100% critical strike"],
  "sotd.png",
  [bfSword, recurveBow]
);
const bloodthirster = makeItem(
  "Bloodthirster",
  ["50% lifesteal"],
  "bt.png",
  [bfSword, negatronCloak]
);
const infinityEdge = makeItem(
  "Infinity Edge",
  ["Critical strikes deal 100% damage"],
  "ie.png",
  [bfSword, bfSword]
);
const youmuus = makeItem(
  "Youmuu's Blade",
  ["Wearer is also an assassin"],
  "youmuus.png",
  [bfSword, spatula]
);
const frozenHeart = makeItem(
  "Frozen Heart",
  ["Adjacent enemies attack speed is 20% slower"],
  "frozenHeart.png",
  [chainVest, tear]
);
const knightsVow = makeItem(
  "Knight's Vow",
  ["Wearer is also a knight"],
  "knightsVow.png",
  [chainVest, spatula]
);
const locket = makeItem(
  "Locket of the Iron Solari",
  ["On start of combat, all adjacent allies gain a shield of 200"],
  "locket.png",
  [chainVest, needleslyLargeRod]
);
const phantomDancer = makeItem(
  "Phantom Dancer",
  ["Wearer dodges all critical strikes"],
  "pd.png",
  [chainVest, recurveBow]
);
const redBuff = makeItem(
  "Red Buff",
  ["Attacks deal 2.5% maximum health burn damage, burned units cannot heal"],
  "red.png",
  [chainVest, giantsBelt]
);
const swordBreaker = makeItem(
  "Sword Breaker",
  ["Attacks have a chance to disarm"],
  "swordBreaker.png",
  [chainVest, negatronCloak]
);
const thornmail = makeItem(
  "Thornmail",
  ["Reflect 35% of damage taken taken from attacks"],
  "thornmail.png",
  [chainVest, chainVest]
);
const frozenMallet = makeItem(
  "Frozen Mallet",
  ["Wearer is also a glacial"],
  "mallet.png",
  [giantsBelt, spatula]
);
const morellonomicon = makeItem(
  "Morellonomicon",
  ["Spells deal burn damage equal to 2.5% of the enemy's maximum health per second"],
  "morello.png",
  [giantsBelt, needleslyLargeRod]
);
const redemption = makeItem(
  "Redemption",
  ["On death, heal all nearby allies for 1000 health"],
  "redemption.png",
  [giantsBelt, tear]
);
const titanicHydra = makeItem(
  "Titanic Hydra",
  ["Attacks deal 10% of the wearer's max health as splash damage"],
  "titanic.png",
  [giantsBelt, recurveBow]
);
const warmogs = makeItem(
  "Warmog's Armor",
  ["Wearer regenerates 3% max health per second"],
  "warmogs.png",
  [giantsBelt, giantsBelt]
);
const zephyr = makeItem(
  "Zephyr",
  ["On start of combat, banish an enemy for 5 seconds"],
  "zephyr.png",
  [giantsBelt, negatronCloak]
);
const yuumi = makeItem(
  "Yuumi",
  ["Wearer is also a sorcerer"],
  "yuumi.png",
  [needleslyLargeRod, spatula]
);
const deathcap = makeItem(
  "Rabadon's Deathcap",
  ["Spell damage +50%"],
  "deathcap.png",
  [needleslyLargeRod, needleslyLargeRod]
);
const ludens = makeItem(
  "Luden's Echo",
  ["Spells deal 200 splash damage on hit"],
  "ludens.png",
  [needleslyLargeRod, tear]
);
const ionicSpark = makeItem(
  "Ionic Spark",
  ["Whenever an enemy casts a spell, they take 200 damage"],
  "spark.png",
  [needleslyLargeRod, negatronCloak]
);
const guinsoos = makeItem(
  "Guinsoo's Rageblade",
  ["Attacks grant 3% attack speed, stacks infinitely"],
  "guinsoos.png",
  [needleslyLargeRod, recurveBow]
);
const cursedBlade = makeItem(
  "Cursed Blade",
  ["Attacks have a low chance to reduce enemy's star level by 1"],
  "cursedBlade.png",
  [negatronCloak, recurveBow]
);
const dragonsClaw = makeItem(
  "Dragon's Claw",
  ["Gain 83% resistance to magic damage"],
  "dragonsClaw.png",
  [negatronCloak, negatronCloak]
);
const hush = makeItem(
  "Hush",
  ["Attacks have a high chance to silence"],
  "hush.png",
  [negatronCloak, tear]
);
const runaans = makeItem(
  "Runaan's Hurricane",
  ["Attacks 2 additional enemies, these additional attacks deal 50% damage"],
  "runaans.png",
  [negatronCloak, spatula]
);
const statikkShiv = makeItem(
  "Statikk Shiv",
  ["Every 3rd attack deals 100 splash magical damage"],
  "shiv.png",
  [recurveBow, tear]
);
const rapidFirecannon = makeItem(
  "Rapid Firecannon",
  ["Wearer's attacks cannot be dodged, attack range is doubled"],
  "rapidfire.png",
  [recurveBow, recurveBow]
);
const bork = makeItem(
  "Blade of the Ruined King",
  ["Wearer is also a blademaster"],
  "bork.png",
  [recurveBow, spatula]
);
const darkin = makeItem(
  "Darkin",
  ["Wearer is also a demon"],
  "darkin.png",
  [tear, spatula]
);
const seraphs = makeItem(
  "Seraph's Embrace",
  ["Regain 20 mana each time a spell is cast"],
  "seraphs.png",
  [tear, tear]
);
const forceOfNature = makeItem(
  "Force of Nature",
  ["Gain +1 team size"],
  "forceOfNature.png",
  [spatula, spatula]
);

const items = [
  bfSword, chainVest, giantsBelt, needleslyLargeRod, negatronCloak, recurveBow, spatula, tear,
  ga, zekes, gunblade, spearOfShoujin, swordOfTheDivine, bloodthirster, youmuus, infinityEdge,
  frozenHeart, knightsVow, locket, phantomDancer, redBuff, swordBreaker, thornmail,
  frozenMallet, morellonomicon, redemption, titanicHydra, warmogs, zephyr,
  yuumi, deathcap, ludens, ionicSpark, guinsoos,
  cursedBlade, dragonsClaw, hush, runaans,
  statikkShiv, rapidFirecannon, bork,
  darkin, seraphs,
  forceOfNature,
];

export default items;
