gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDPlayButtonObjects1= [];
gdjs.MenuCode.GDPlayButtonObjects2= [];
gdjs.MenuCode.GDLevelsButtonObjects1= [];
gdjs.MenuCode.GDLevelsButtonObjects2= [];
gdjs.MenuCode.GDSettingsButtonObjects1= [];
gdjs.MenuCode.GDSettingsButtonObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDSoundObjects1= [];
gdjs.MenuCode.GDSoundObjects2= [];
gdjs.MenuCode.GDSoundSliderObjects1= [];
gdjs.MenuCode.GDSoundSliderObjects2= [];
gdjs.MenuCode.GDMusicSliderObjects1= [];
gdjs.MenuCode.GDMusicSliderObjects2= [];
gdjs.MenuCode.GDMusicObjects1= [];
gdjs.MenuCode.GDMusicObjects2= [];
gdjs.MenuCode.GDSettingsMarkerObjects1= [];
gdjs.MenuCode.GDSettingsMarkerObjects2= [];
gdjs.MenuCode.GDMarkerObjects1= [];
gdjs.MenuCode.GDMarkerObjects2= [];
gdjs.MenuCode.GDBackButtonObjects1= [];
gdjs.MenuCode.GDBackButtonObjects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];
gdjs.MenuCode.GDSunObjects1= [];
gdjs.MenuCode.GDSunObjects2= [];
gdjs.MenuCode.GDGrassGround3Objects1= [];
gdjs.MenuCode.GDGrassGround3Objects2= [];
gdjs.MenuCode.GDGrassGround2Objects1= [];
gdjs.MenuCode.GDGrassGround2Objects2= [];
gdjs.MenuCode.GDGrassGroundObjects1= [];
gdjs.MenuCode.GDGrassGroundObjects2= [];
gdjs.MenuCode.GDGround3Objects1= [];
gdjs.MenuCode.GDGround3Objects2= [];
gdjs.MenuCode.GDGround2Objects1= [];
gdjs.MenuCode.GDGround2Objects2= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDSky3Objects1= [];
gdjs.MenuCode.GDSky3Objects2= [];
gdjs.MenuCode.GDSky2Objects1= [];
gdjs.MenuCode.GDSky2Objects2= [];
gdjs.MenuCode.GDSky1Objects1= [];
gdjs.MenuCode.GDSky1Objects2= [];
gdjs.MenuCode.GDBlueFlowerObjects1= [];
gdjs.MenuCode.GDBlueFlowerObjects2= [];
gdjs.MenuCode.GDPurpleSmallPlantObjects1= [];
gdjs.MenuCode.GDPurpleSmallPlantObjects2= [];
gdjs.MenuCode.GDRedFlowerObjects1= [];
gdjs.MenuCode.GDRedFlowerObjects2= [];
gdjs.MenuCode.GDBigOrangeTree6Objects1= [];
gdjs.MenuCode.GDBigOrangeTree6Objects2= [];
gdjs.MenuCode.GDBigOrangeTree3Objects1= [];
gdjs.MenuCode.GDBigOrangeTree3Objects2= [];
gdjs.MenuCode.GDBigOrangeTree1Objects1= [];
gdjs.MenuCode.GDBigOrangeTree1Objects2= [];
gdjs.MenuCode.GDGreenBush2Objects1= [];
gdjs.MenuCode.GDGreenBush2Objects2= [];
gdjs.MenuCode.GDGreenBush3Objects1= [];
gdjs.MenuCode.GDGreenBush3Objects2= [];
gdjs.MenuCode.GDGreenBush1Objects1= [];
gdjs.MenuCode.GDGreenBush1Objects2= [];
gdjs.MenuCode.GDBigGreenTree7Objects1= [];
gdjs.MenuCode.GDBigGreenTree7Objects2= [];
gdjs.MenuCode.GDBigGreenTree4Objects1= [];
gdjs.MenuCode.GDBigGreenTree4Objects2= [];
gdjs.MenuCode.GDBigGreenTree2Objects1= [];
gdjs.MenuCode.GDBigGreenTree2Objects2= [];
gdjs.MenuCode.GDBigGreenTree1Objects1= [];
gdjs.MenuCode.GDBigGreenTree1Objects2= [];
gdjs.MenuCode.GDCloudObjects1= [];
gdjs.MenuCode.GDCloudObjects2= [];
gdjs.MenuCode.GDMuShuObjects1= [];
gdjs.MenuCode.GDMuShuObjects2= [];
gdjs.MenuCode.GDBokBokObjects1= [];
gdjs.MenuCode.GDBokBokObjects2= [];
gdjs.MenuCode.GDMuShu2Objects1= [];
gdjs.MenuCode.GDMuShu2Objects2= [];
gdjs.MenuCode.GDBokBok2Objects1= [];
gdjs.MenuCode.GDBokBok2Objects2= [];
gdjs.MenuCode.GDBunnyObjects1= [];
gdjs.MenuCode.GDBunnyObjects2= [];
gdjs.MenuCode.GDBunny2Objects1= [];
gdjs.MenuCode.GDBunny2Objects2= [];
gdjs.MenuCode.GDDirt1Objects1= [];
gdjs.MenuCode.GDDirt1Objects2= [];
gdjs.MenuCode.GDDirt2Objects1= [];
gdjs.MenuCode.GDDirt2Objects2= [];
gdjs.MenuCode.GDStone1Objects1= [];
gdjs.MenuCode.GDStone1Objects2= [];
gdjs.MenuCode.GDStone2Objects1= [];
gdjs.MenuCode.GDStone2Objects2= [];
gdjs.MenuCode.GDBridgeObjects1= [];
gdjs.MenuCode.GDBridgeObjects2= [];
gdjs.MenuCode.GDMovingObjects1= [];
gdjs.MenuCode.GDMovingObjects2= [];
gdjs.MenuCode.GDCoinObjects1= [];
gdjs.MenuCode.GDCoinObjects2= [];
gdjs.MenuCode.GDHitBoxObjects1= [];
gdjs.MenuCode.GDHitBoxObjects2= [];
gdjs.MenuCode.GDBoundaryObjects1= [];
gdjs.MenuCode.GDBoundaryObjects2= [];
gdjs.MenuCode.GDBoundary2Objects1= [];
gdjs.MenuCode.GDBoundary2Objects2= [];
gdjs.MenuCode.GDBoundary3Objects1= [];
gdjs.MenuCode.GDBoundary3Objects2= [];
gdjs.MenuCode.GDUiWinObjects1= [];
gdjs.MenuCode.GDUiWinObjects2= [];
gdjs.MenuCode.GDDarkColorObjects1= [];
gdjs.MenuCode.GDDarkColorObjects2= [];
gdjs.MenuCode.GDLavaObjects1= [];
gdjs.MenuCode.GDLavaObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MenuCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MenuCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MenuCode.GDSoundSliderObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "time_for_adventure.mp3", 0, true, 40, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MenuCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSettingsMarkerObjects1[i].hide();
}
}{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MenuCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MenuCode.GDSoundSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSoundSliderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSoundSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSoundSliderObjects1[k] = gdjs.MenuCode.GDSoundSliderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSoundSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSoundSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.MenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MenuCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDMusicSliderObjects1[k] = gdjs.MenuCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.MenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonObjects1[k] = gdjs.MenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Characters", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelsButton"), gdjs.MenuCode.GDLevelsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLevelsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLevelsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLevelsButtonObjects1[k] = gdjs.MenuCode.GDLevelsButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDLevelsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MenuCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsButtonObjects1[k] = gdjs.MenuCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MenuCode.GDSettingsMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.MenuCode.GDSettingsMarkerObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSettingsMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBackButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBackButtonObjects1[k] = gdjs.MenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MenuCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.MenuCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDLevelsButtonObjects1.length = 0;
gdjs.MenuCode.GDLevelsButtonObjects2.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDSoundObjects1.length = 0;
gdjs.MenuCode.GDSoundObjects2.length = 0;
gdjs.MenuCode.GDSoundSliderObjects1.length = 0;
gdjs.MenuCode.GDSoundSliderObjects2.length = 0;
gdjs.MenuCode.GDMusicSliderObjects1.length = 0;
gdjs.MenuCode.GDMusicSliderObjects2.length = 0;
gdjs.MenuCode.GDMusicObjects1.length = 0;
gdjs.MenuCode.GDMusicObjects2.length = 0;
gdjs.MenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.MenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.MenuCode.GDMarkerObjects1.length = 0;
gdjs.MenuCode.GDMarkerObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDSunObjects1.length = 0;
gdjs.MenuCode.GDSunObjects2.length = 0;
gdjs.MenuCode.GDGrassGround3Objects1.length = 0;
gdjs.MenuCode.GDGrassGround3Objects2.length = 0;
gdjs.MenuCode.GDGrassGround2Objects1.length = 0;
gdjs.MenuCode.GDGrassGround2Objects2.length = 0;
gdjs.MenuCode.GDGrassGroundObjects1.length = 0;
gdjs.MenuCode.GDGrassGroundObjects2.length = 0;
gdjs.MenuCode.GDGround3Objects1.length = 0;
gdjs.MenuCode.GDGround3Objects2.length = 0;
gdjs.MenuCode.GDGround2Objects1.length = 0;
gdjs.MenuCode.GDGround2Objects2.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDSky3Objects1.length = 0;
gdjs.MenuCode.GDSky3Objects2.length = 0;
gdjs.MenuCode.GDSky2Objects1.length = 0;
gdjs.MenuCode.GDSky2Objects2.length = 0;
gdjs.MenuCode.GDSky1Objects1.length = 0;
gdjs.MenuCode.GDSky1Objects2.length = 0;
gdjs.MenuCode.GDBlueFlowerObjects1.length = 0;
gdjs.MenuCode.GDBlueFlowerObjects2.length = 0;
gdjs.MenuCode.GDPurpleSmallPlantObjects1.length = 0;
gdjs.MenuCode.GDPurpleSmallPlantObjects2.length = 0;
gdjs.MenuCode.GDRedFlowerObjects1.length = 0;
gdjs.MenuCode.GDRedFlowerObjects2.length = 0;
gdjs.MenuCode.GDBigOrangeTree6Objects1.length = 0;
gdjs.MenuCode.GDBigOrangeTree6Objects2.length = 0;
gdjs.MenuCode.GDBigOrangeTree3Objects1.length = 0;
gdjs.MenuCode.GDBigOrangeTree3Objects2.length = 0;
gdjs.MenuCode.GDBigOrangeTree1Objects1.length = 0;
gdjs.MenuCode.GDBigOrangeTree1Objects2.length = 0;
gdjs.MenuCode.GDGreenBush2Objects1.length = 0;
gdjs.MenuCode.GDGreenBush2Objects2.length = 0;
gdjs.MenuCode.GDGreenBush3Objects1.length = 0;
gdjs.MenuCode.GDGreenBush3Objects2.length = 0;
gdjs.MenuCode.GDGreenBush1Objects1.length = 0;
gdjs.MenuCode.GDGreenBush1Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree7Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree7Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree4Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree4Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree2Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree2Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree1Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree1Objects2.length = 0;
gdjs.MenuCode.GDCloudObjects1.length = 0;
gdjs.MenuCode.GDCloudObjects2.length = 0;
gdjs.MenuCode.GDMuShuObjects1.length = 0;
gdjs.MenuCode.GDMuShuObjects2.length = 0;
gdjs.MenuCode.GDBokBokObjects1.length = 0;
gdjs.MenuCode.GDBokBokObjects2.length = 0;
gdjs.MenuCode.GDMuShu2Objects1.length = 0;
gdjs.MenuCode.GDMuShu2Objects2.length = 0;
gdjs.MenuCode.GDBokBok2Objects1.length = 0;
gdjs.MenuCode.GDBokBok2Objects2.length = 0;
gdjs.MenuCode.GDBunnyObjects1.length = 0;
gdjs.MenuCode.GDBunnyObjects2.length = 0;
gdjs.MenuCode.GDBunny2Objects1.length = 0;
gdjs.MenuCode.GDBunny2Objects2.length = 0;
gdjs.MenuCode.GDDirt1Objects1.length = 0;
gdjs.MenuCode.GDDirt1Objects2.length = 0;
gdjs.MenuCode.GDDirt2Objects1.length = 0;
gdjs.MenuCode.GDDirt2Objects2.length = 0;
gdjs.MenuCode.GDStone1Objects1.length = 0;
gdjs.MenuCode.GDStone1Objects2.length = 0;
gdjs.MenuCode.GDStone2Objects1.length = 0;
gdjs.MenuCode.GDStone2Objects2.length = 0;
gdjs.MenuCode.GDBridgeObjects1.length = 0;
gdjs.MenuCode.GDBridgeObjects2.length = 0;
gdjs.MenuCode.GDMovingObjects1.length = 0;
gdjs.MenuCode.GDMovingObjects2.length = 0;
gdjs.MenuCode.GDCoinObjects1.length = 0;
gdjs.MenuCode.GDCoinObjects2.length = 0;
gdjs.MenuCode.GDHitBoxObjects1.length = 0;
gdjs.MenuCode.GDHitBoxObjects2.length = 0;
gdjs.MenuCode.GDBoundaryObjects1.length = 0;
gdjs.MenuCode.GDBoundaryObjects2.length = 0;
gdjs.MenuCode.GDBoundary2Objects1.length = 0;
gdjs.MenuCode.GDBoundary2Objects2.length = 0;
gdjs.MenuCode.GDBoundary3Objects1.length = 0;
gdjs.MenuCode.GDBoundary3Objects2.length = 0;
gdjs.MenuCode.GDUiWinObjects1.length = 0;
gdjs.MenuCode.GDUiWinObjects2.length = 0;
gdjs.MenuCode.GDDarkColorObjects1.length = 0;
gdjs.MenuCode.GDDarkColorObjects2.length = 0;
gdjs.MenuCode.GDLavaObjects1.length = 0;
gdjs.MenuCode.GDLavaObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MenuCode.GDLevelsButtonObjects1.length = 0;
gdjs.MenuCode.GDLevelsButtonObjects2.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDSoundObjects1.length = 0;
gdjs.MenuCode.GDSoundObjects2.length = 0;
gdjs.MenuCode.GDSoundSliderObjects1.length = 0;
gdjs.MenuCode.GDSoundSliderObjects2.length = 0;
gdjs.MenuCode.GDMusicSliderObjects1.length = 0;
gdjs.MenuCode.GDMusicSliderObjects2.length = 0;
gdjs.MenuCode.GDMusicObjects1.length = 0;
gdjs.MenuCode.GDMusicObjects2.length = 0;
gdjs.MenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.MenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.MenuCode.GDMarkerObjects1.length = 0;
gdjs.MenuCode.GDMarkerObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MenuCode.GDSunObjects1.length = 0;
gdjs.MenuCode.GDSunObjects2.length = 0;
gdjs.MenuCode.GDGrassGround3Objects1.length = 0;
gdjs.MenuCode.GDGrassGround3Objects2.length = 0;
gdjs.MenuCode.GDGrassGround2Objects1.length = 0;
gdjs.MenuCode.GDGrassGround2Objects2.length = 0;
gdjs.MenuCode.GDGrassGroundObjects1.length = 0;
gdjs.MenuCode.GDGrassGroundObjects2.length = 0;
gdjs.MenuCode.GDGround3Objects1.length = 0;
gdjs.MenuCode.GDGround3Objects2.length = 0;
gdjs.MenuCode.GDGround2Objects1.length = 0;
gdjs.MenuCode.GDGround2Objects2.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDSky3Objects1.length = 0;
gdjs.MenuCode.GDSky3Objects2.length = 0;
gdjs.MenuCode.GDSky2Objects1.length = 0;
gdjs.MenuCode.GDSky2Objects2.length = 0;
gdjs.MenuCode.GDSky1Objects1.length = 0;
gdjs.MenuCode.GDSky1Objects2.length = 0;
gdjs.MenuCode.GDBlueFlowerObjects1.length = 0;
gdjs.MenuCode.GDBlueFlowerObjects2.length = 0;
gdjs.MenuCode.GDPurpleSmallPlantObjects1.length = 0;
gdjs.MenuCode.GDPurpleSmallPlantObjects2.length = 0;
gdjs.MenuCode.GDRedFlowerObjects1.length = 0;
gdjs.MenuCode.GDRedFlowerObjects2.length = 0;
gdjs.MenuCode.GDBigOrangeTree6Objects1.length = 0;
gdjs.MenuCode.GDBigOrangeTree6Objects2.length = 0;
gdjs.MenuCode.GDBigOrangeTree3Objects1.length = 0;
gdjs.MenuCode.GDBigOrangeTree3Objects2.length = 0;
gdjs.MenuCode.GDBigOrangeTree1Objects1.length = 0;
gdjs.MenuCode.GDBigOrangeTree1Objects2.length = 0;
gdjs.MenuCode.GDGreenBush2Objects1.length = 0;
gdjs.MenuCode.GDGreenBush2Objects2.length = 0;
gdjs.MenuCode.GDGreenBush3Objects1.length = 0;
gdjs.MenuCode.GDGreenBush3Objects2.length = 0;
gdjs.MenuCode.GDGreenBush1Objects1.length = 0;
gdjs.MenuCode.GDGreenBush1Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree7Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree7Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree4Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree4Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree2Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree2Objects2.length = 0;
gdjs.MenuCode.GDBigGreenTree1Objects1.length = 0;
gdjs.MenuCode.GDBigGreenTree1Objects2.length = 0;
gdjs.MenuCode.GDCloudObjects1.length = 0;
gdjs.MenuCode.GDCloudObjects2.length = 0;
gdjs.MenuCode.GDMuShuObjects1.length = 0;
gdjs.MenuCode.GDMuShuObjects2.length = 0;
gdjs.MenuCode.GDBokBokObjects1.length = 0;
gdjs.MenuCode.GDBokBokObjects2.length = 0;
gdjs.MenuCode.GDMuShu2Objects1.length = 0;
gdjs.MenuCode.GDMuShu2Objects2.length = 0;
gdjs.MenuCode.GDBokBok2Objects1.length = 0;
gdjs.MenuCode.GDBokBok2Objects2.length = 0;
gdjs.MenuCode.GDBunnyObjects1.length = 0;
gdjs.MenuCode.GDBunnyObjects2.length = 0;
gdjs.MenuCode.GDBunny2Objects1.length = 0;
gdjs.MenuCode.GDBunny2Objects2.length = 0;
gdjs.MenuCode.GDDirt1Objects1.length = 0;
gdjs.MenuCode.GDDirt1Objects2.length = 0;
gdjs.MenuCode.GDDirt2Objects1.length = 0;
gdjs.MenuCode.GDDirt2Objects2.length = 0;
gdjs.MenuCode.GDStone1Objects1.length = 0;
gdjs.MenuCode.GDStone1Objects2.length = 0;
gdjs.MenuCode.GDStone2Objects1.length = 0;
gdjs.MenuCode.GDStone2Objects2.length = 0;
gdjs.MenuCode.GDBridgeObjects1.length = 0;
gdjs.MenuCode.GDBridgeObjects2.length = 0;
gdjs.MenuCode.GDMovingObjects1.length = 0;
gdjs.MenuCode.GDMovingObjects2.length = 0;
gdjs.MenuCode.GDCoinObjects1.length = 0;
gdjs.MenuCode.GDCoinObjects2.length = 0;
gdjs.MenuCode.GDHitBoxObjects1.length = 0;
gdjs.MenuCode.GDHitBoxObjects2.length = 0;
gdjs.MenuCode.GDBoundaryObjects1.length = 0;
gdjs.MenuCode.GDBoundaryObjects2.length = 0;
gdjs.MenuCode.GDBoundary2Objects1.length = 0;
gdjs.MenuCode.GDBoundary2Objects2.length = 0;
gdjs.MenuCode.GDBoundary3Objects1.length = 0;
gdjs.MenuCode.GDBoundary3Objects2.length = 0;
gdjs.MenuCode.GDUiWinObjects1.length = 0;
gdjs.MenuCode.GDUiWinObjects2.length = 0;
gdjs.MenuCode.GDDarkColorObjects1.length = 0;
gdjs.MenuCode.GDDarkColorObjects2.length = 0;
gdjs.MenuCode.GDLavaObjects1.length = 0;
gdjs.MenuCode.GDLavaObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
