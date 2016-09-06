# Kanan + Prime
A neat pack of modifications for Mabinogi powered by Kanan, enriched with QoL tweaks and aimed at surpassing the original client.

## Features included:
### [cursey's Kanan](https://github.com/cursey/kanan)
##### Original kanan scripts ([refer to master branch](https://github.com/cursey/kanan/tree/master/scripts) for details & [credits](https://github.com/cursey/kanan#original-patch-authors))

##### Unique scripts:
- (Private)PauseFlashyDyes.js - Breaks the flashy dye tick, causing them to pause. (Step29)
- (Private)DisableSunGlare.js - Disable glare when looking at the sun. (Step29)
- (Private)SkipCutscenes.js - Automatically skip any sort of cutscene. (Blade3575)
- (Private)DefaultRangedSwap.js - Swaps the default skill used when using ranged weapons. (Blade3575)
- (Private)PartyToHousingBoard.js - Instead of party board functioning as intended, it will open up the housing board instead. (Blade3575)
- (Private)CancelLanceCounter.js - Allows Lance Counter to be cancelled where else it shouldn't. (Blade3575)
- (Private)DisableAltEnter.js Disables the ALT + Enter shortcut which enables full-screen mode. (Blade3575)
- (Private)HideBarehandMessages.js - Disables barehand weapon warning messages when attempting to attack with tools. (Blade3575)
- (Private)RemoveLandingRestriction.js - Remove the minimum 15 height restriction when landing a flying mount. (Blade3575)
- (Private)TargetRestingEnemies.js - Allows you to target enemies that are in resting position such as mimics, books and golems. (Blade3575)

##### Modified scripts: 
- FreeZoom.js - Free zoom in disabled, only zoom out infinite works.
- ShowCombatPower.js - "500 (STRONG)" > "500 CP (Powerful)"

##### Disabled scripts:
- (Private)PauseFlashyDyes.js
- (Private)DisableSunGlare.js
- (Private)SkipCutscenes.js
- AlwaysTransCollectMode.js
- DontTargetNPCs.js
- FreeIndoorCamera.js
- HideMainTitle.js
- HideNPCCurtains.js
- ManaTunnelLagFix.js
- NoLogoutPenaltyMsg.js
- NoSkillRankUpWindow.js
- SkipGraphicsCardMsg.js
- WindowsAppearFaster.js
- ZeroFogDistance.js

### Data folder

##### Main adjustments:
- [Ranged skills have been recolored to green](http://i.imgur.com/y8Usjai.png), and have been placed into Hybrid which is now called Archery. 
- [Hybrid skills have been recolored](http://i.imgur.com/Hh6pkGE.png) and re-categorized to their own skill tabs. Study: Potion Lore is now in Life, Doppleganger and Berserk are in Combat, Shockwave is now in Magic, Counter Punch is in Fighter, and Spider Shot is in Archery.
- All skill icons received a [minor shade tune-up](http://i.imgur.com/pOpLZs3.png) to fit film style post shader better.
- [Cloth, Metal, Wand, Pet, Instrument and Spirit Weapon dye icons  have been remade](http://i.imgur.com/lxtx8m5.png) for easier color identification.
- Dye Ampoule (regular 5 spot RNG one) now uses the Mini Dye Ampoule icon for easier identification.
- [Replaced old hairs with updated versions](http://i.imgur.com/k4KmMah.png) included in the Tir Chornail update in 2013.
- Rock Throwing can now target enemies with Ctrl + Click.
- Images and tips on loading screen have been removed to increase loading time.
- Removed gathering failure messages due to cringe, simplified out of resource and equipment breakage messages.
- Shadow Wizard spam map recreated to work with recent map update.
- Fixed "FINISH!" not appearing properly above enemy names.
- Arc Lich is now much, much more noticeable and easier to sketch.
- Ancients are now much more noticeable to spot.
- Renamed the following skills: Transformation Mastery > Shapeshift, Shyllien Ecology > Ecology, Hillwen Engineering > Engineering, Rare Mineralogy > Mineralogy, Ranged Attack > Ranged Mastery.

##### Looting adjustments:
- Increased the clickable size when you hold down ALT for easier looting of the following: Gold, Treasure Keys, Fine and Finest Leather, Herbs and 100's and 300's Potions.
- Made the following items unlootable from the ground when you hold down ALT: 10's, 30's, 50's Potions, Cheap and Common Leather and Fabric, Branches, Gems, Sulfur Ore, Phoenix Feather, Bandage, Alchemy Crystals (exception: Arat), Arrow, Bolt, Magic Powder.
The purpose of these changes is to clean the screen when you hold down ALT, now the only things that show up are important loot, all the junk is filtered away.

##### Talent Title remake:
- Fledging Archer is now Rank F Archer, Novice Archer is now Rank E Archer ... Master Archer is now Rank 1 Archer, Grandmaster Archer is now Master Archer.
This was done for easier progress identification and to also fit in the old skill system. When somebody turns silver, they'll be rank 9, when they're gold, they'll be rank 5, etc.
- Mage has been renamed Wizard. Word has been around since G1, and both wizard and cleric are mages who take from the magic tab, just adding some sense here.
- Knight renamed to Lancer.
- Warrior renamed to Knight.
- Fighter renamed to Martial Artist. 

##### Sound tweaks:
-  Decreased the volume of inventory opening to accommodate large amount of bags.
-  Sheeps swallowed a balloon...
- Removed Edern tinks
- Removed golem 'woo' (players spam this)
- Removed Bullet Storm's gun spinning (players spam this)
- Removed Mini dragon walking stomps
- Removed bird flap
- Removed window open (To mute the noise when summoning pets)
- Removed pickaxe noise (Poulnabrone...)

##### Text differences:
Most of these are simple text tweaks to fix the UI where else it clips or just doesn't look right, remove annoying text ("You've entered the world of Mabinogi", "Critical Hit!!!", No enchant text, etc).
It also [fixes the big text window text when using bitmap font], and [simplifies the daily effects].
You can see the full list of changes below if you're interested.
- [client](https://www.diffchecker.com/8k6zvkoq)
- [interface](https://www.diffchecker.com/fuhtjgeu)
- [standard](https://www.diffchecker.com/jhr0qr8y)
- [layout](https://www.diffchecker.com/mrymrvii)
- [skillinfo](https://www.diffchecker.com/342oi0mu)
- [talentitle](https://www.diffchecker.com/hylkrgi1)
- [title](https://www.diffchecker.com/qmswvmic)
- [collectingform](https://www.diffchecker.com/bindzguf)

##### Other tweaks included I didn't make:
- [Talent Icon replacement](http://i.imgur.com/Fhi0lO8.png) (Source: OMJ)
- Doll Bags loot much faster. (Source: Tiara)
- Cutscene skips: Artifact Discovery & Erinn Martial Arts Tournament. (Source: Tiara)
- Books in Rath Castle differentiation. (Source: Tiara)
- Mimics differentiation. (Source: Tiara)
- L-Rod Radar (Source: Tiara)
- Items now appear on the ground instantly. (Source: Tiara)
- Boss key, Room key, and Treasure key are bigger. (Source: Tiara) 
- Theatre Mission curtain removal. (Source: Unknown)
- Shadow Mission walls removal. (Source: Unknown)

## Disclaimer
Please do not link this fork to MabiMods.net, or refer kanan master issues here, all of these scripts are NOT permitted in either of those locations.

You may use, share and republish any of the data folder modifications.

You may use the unique script, but you may NOT share or republish them on MabiMods. Again, not allowed.
