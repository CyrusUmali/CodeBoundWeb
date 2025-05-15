// =================================================
// Alpha ABS Z - Weapon Motion Recovery Patch
// =================================================
(() => {
    // 1. Backup original battle end method
    const _Scene_Map_onBattleEnd = Scene_Map.prototype.onBattleEnd;
    
    Scene_Map.prototype.onBattleEnd = function() {
        // 2. Call original logic first
        _Scene_Map_onBattleEnd.call(this);
        
        // 3. Reapply Weapon Motion settings to all battlers
        $gamePlayer.followers().forEach(follower => {
            if (follower.AABattler) {
                follower.AABattler().setWeaponMotionOverride(1); // Force enable
            }
        });
        
        // 4. Refresh sprites
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
    };
})();