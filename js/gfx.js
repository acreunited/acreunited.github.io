var nAkameGaKill = 33;
var nAttackOnTitan = 12;
var nBerserk = 19;
var nBlackClover = 9;
var nBlackLagoon = 1;
var nBleach = 405;
var nBlueExorcist = 2;
var nBSD = 22;
var nClaymore = 7;
var nCodeGeass = 34;
var nCowboyBebop = 11;
var nDarkerThanBlack = 5;
var nDarlingFranxx = 9;
var nDeadManWonderland = 1;
var nDeathNote = 18;
var nDemonSlayer = 26;
var nDevilMayCry = 1;
var nDGrayMan = 1;
var nDragonBall = 106;
var nDrStone = 3;
var nDurarara = 3;
var nEvalgelion = 5;
var nFairyTail = 157;
var nFate = 38;
var nFinalFantasy = 39;
var nFireForce = 8;
var nFoodWars = 4;
var nFreezing = 16;
var nFullMetalAlchemist = 22;
var nGenshinImpact = 4;
var nGintama = 14;
var nGundam = 3;
var nGurrenLagann = 13;
var nHellsing = 8;
var nHihgschoolOfTheDead = 12;
var nHitmanReborn = 16;
var nHunterXHunter = 59;
var nHyouka = 3;
var nInyuasha = 11;
var nIRL = 291;
var nJojo = 9;
var nJujutsuKaisen = 29;
var nKakeguri = 12;
var nKimiNiTodoke = 1;
var nKingOfFighters = 2;
var nKProject = 3;
var nKurokoNoBasket = 10;
var nKuroshitsuji = 9;
var nLoL = 20;
var nMiraiNikki = 1;
var nMisc = 382;
var nMobPsycho = 6;
var nMyHeroAcademia = 28;
var nNaruto = 489;
var nNoblesse = 35;
var nOnePiece = 159;
var nOnePunchMan = 28;
var nPersona = 14;
var nPokemon = 11;
var nReZero = 21;
var nSamuraiChamploo = 4;
var nSevenDeadlySins = 17;
var nShamanKing = 8;
var nSoloLeveling = 43;
var nSoulEater = 2;
var nTokyoGhoul = 10;
var nTowerOfGod = 3;
var nVivyFluoriteEyeSong = 10;
var nTokyoRevengers = 1;
var nBlueLock = 6;
var nYugioh = 208;
var nYuYuHakusho = 7;




function searchAnime(anime) {

    /*
    All AkameGaKill AttackOnTitan  Berserk BlackClover Bleach CodeGeass CowboyBebop DarkerThanBlack
    DeathNote  DemonSlayer DragonBall Evalgelion FairyTail Fate FinalFantasy FireForce 
    FoodWars FullMetalAlchemist GenshinImpact Gintama Gundam GurrenLagann Hellsing HihgschoolOfTheDead
    HitmanReborn HunterXHunter Inyuasha Jojo JujutsuKaisen MiraiNikki Misc MobPsycho MyHeroAcademia 
    Naruto  Noblesse OnePiece OnePunchMan  Persona  Pokemon  SamuraiChamploo SevenDeadlySins
    ShamanKing SoloLeveling TokyoGhoul TowerOfGod YoichiIsagi Yugioh YuYuHakusho 
    */

    document.getElementById('showAvys').innerHTML = "";

    if( anime.value==="AkameGaKill") {
        for(var i = 0; i < nAkameGaKill; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/AkameGaKill/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="AttackOnTitan") {
        for(var i = 0; i < nAttackOnTitan; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/AttackOnTitan/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Berserk") {
        for(var i = 0; i < nBerserk; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Berserk/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="BlackClover") {
        for(var i = 0; i < nBlackClover; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/BlackClover/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="BlackLagoon") {
        for(var i = 0; i < nBlackLagoon; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/BlackLagoon/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Bleach") {
        for(var i = 0; i < nBleach; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Bleach/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="BlueExorcist") {
        for(var i = 0; i < nBlueExorcist; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/BlueExorcist/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="BlueLock") {
        for(var i = 0; i < nBlueLock; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/BlueLock/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="BungouStrayDogs") {
        for(var i = 0; i < nBSD; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/BSD/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Claymore") {
        for(var i = 0; i < nClaymore; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Claymore/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="CodeGeass") {
        for(var i = 0; i < nCodeGeass; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/CodeGeass/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="CowboyBebop") {
        for(var i = 0; i < nCowboyBebop; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/CowboyBebop/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DarkerThanBlack") {
        for(var i = 0; i < nDarkerThanBlack; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DarkerThanBlack/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DarlingInTheFranxx") {
        for(var i = 0; i < nDarlingFranxx; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DarlingInTheFranxx/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DeadManWonderland") {
        for(var i = 0; i < nDeadManWonderland; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DeadManWonderland/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DeathNote") {
        for(var i = 0; i < nDeathNote; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DeathNote/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DemonSlayer") {
        for(var i = 0; i < nDemonSlayer; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DemonSlayer/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DevilMayCry") {
        for(var i = 0; i < nDevilMayCry; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DevilMayCry/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DGrayMan") {
        for(var i = 0; i < nDGrayMan; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DGrayMan/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DragonBall") {
        for(var i = 0; i < nDragonBall; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DragonBall/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="DrStone") {
        for(var i = 0; i < nDrStone; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/DrStone/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Durarara") {
        for(var i = 0; i < nDurarara; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Durarara/"+ i + ".png'/>";
        }
    }   
    else if( anime.value==="Evangelion") {
        for(var i = 0; i < nEvalgelion; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Evangelion/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="FairyTail") {
        for(var i = 0; i < nFairyTail; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/FairyTail/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Fate") {
        for(var i = 0; i < nFate; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Fate/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="FinalFantasy") {
        for(var i = 0; i < nFinalFantasy; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/FinalFantasy/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="FireForce") {
        for(var i = 0; i < nFireForce; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/FireForce/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="FoodWars") {
        for(var i = 0; i < nFoodWars; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/FoodWars/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Freezing") {
        for(var i = 0; i < nFreezing; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Freezing/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="FullMetalAlchemist") {
        for(var i = 0; i < nFullMetalAlchemist; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/FullMetalAlchemist/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="GenshinImpact") {
        for(var i = 0; i < nGenshinImpact; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/GenshinImpact/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Gintama") {
        for(var i = 0; i < nGintama; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Gintama/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Gundam") {
        for(var i = 0; i < nGundam; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Gundam/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="GurrenLagann") {
        for(var i = 0; i < nGurrenLagann; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/GurrenLagann/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Hellsing") {
        for(var i = 0; i < nHellsing; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Hellsing/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="HighschoolOfTheDead") {
        for(var i = 0; i < nHihgschoolOfTheDead; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/HighschoolOfTheDead/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="HitmanReborn") {
        for(var i = 0; i < nHitmanReborn; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/HitmanReborn/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="HunterXHunter") {
        for(var i = 0; i < nHunterXHunter; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/HunterXHunter/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Hyouka") {
        for(var i = 0; i < nHyouka; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Hyouka/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Inyuasha") {
        for(var i = 0; i < nInyuasha; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Inyuasha/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="IRL") {
        for(var i = 0; i < nIRL; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/IRL/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Jojo") {
        for(var i = 0; i < nJojo; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Jojo/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="JujutsuKaisen") {
        for(var i = 0; i < nJujutsuKaisen; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/JujutsuKaisen/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="JujutsuKaisen") {
        for(var i = 0; i < nJujutsuKaisen; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/JujutsuKaisen/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Kakeguri") {
        for(var i = 0; i < nKakeguri; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Kakeguri/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="KimiNiTodoke") {
        for(var i = 0; i < nKimiNiTodoke; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/KimiNiTodoke/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="KingOfFighters") {
        for(var i = 0; i < nKingOfFighters; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/KingOfFighters/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="KProject") {
        for(var i = 0; i < nKProject; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/KProject/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="KurokoNoBasket") {
        for(var i = 0; i < nKurokoNoBasket; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/KurokoNoBasket/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Kuroshitsuji") {
        for(var i = 0; i < nKuroshitsuji; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Kuroshitsuji/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="LeagueOfLegends") {
        for(var i = 0; i < nLoL; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/LeagueOfLegends/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="MiraiNikki") {
        for(var i = 0; i < nMiraiNikki; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/MiraiNikki/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Misc") {
        for(var i = 0; i < nMisc; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Misc/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="MobPsycho") {
        for(var i = 0; i < nMobPsycho; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/MobPsycho/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="MyHeroAcademia") {
        for(var i = 0; i < nMyHeroAcademia; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/MyHeroAcademia/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Naruto") {
        for(var i = 0; i < nNaruto; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Naruto/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Noblesse") {
        for(var i = 0; i < nNoblesse; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Noblesse/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="OnePiece") {
        for(var i = 0; i < nOnePiece; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/OnePiece/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="OnePunchMan") {
        for(var i = 0; i < nOnePunchMan; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/OnePunchMan/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Persona") {
        for(var i = 0; i < nPersona; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Persona/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Pokemon") {
        for(var i = 0; i < nPokemon; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Pokemon/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="ReZero") {
        for(var i = 0; i < nReZero; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/ReZero/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="SamuraiChamploo") {
        for(var i = 0; i < nSamuraiChamploo; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/SamuraiChamploo/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="SevenDeadlySins") {
        for(var i = 0; i < nSevenDeadlySins; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/SevenDeadlySins/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="ShamanKing") {
        for(var i = 0; i < nShamanKing; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/ShamanKing/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="SoloLeveling") {
        for(var i = 0; i < nSoloLeveling; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/SoloLeveling/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="SoulEater") {
        for(var i = 0; i < nSoulEater; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/SoulEater/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="TokyoGhoul") {
        for(var i = 0; i < nTokyoGhoul; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/TokyoGhoul/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="TokyoRevengers") {
        for(var i = 0; i < nTokyoRevengers; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/TokyoRevengers/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="TowerOfGod") {
        for(var i = 0; i < nTowerOfGod; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/TowerOfGod/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="VivyFluoriteEyeSong") {
        for(var i = 0; i < nVivyFluoriteEyeSong; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/VivyFluoriteEyeSong/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="Yugioh") {
        for(var i = 0; i < nYugioh; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/Yugioh/"+ i + ".png'/>";
        }
    }
    else if( anime.value==="YuYuHakusho") {
        for(var i = 0; i < nYuYuHakusho; i++){
            document.getElementById('showAvys').innerHTML += "<img src='avys/YuYuHakusho/"+ i + ".png'/>";
        }
    }

}

