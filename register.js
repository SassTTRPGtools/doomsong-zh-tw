const MODULE_ID = 'daggerheart-taiwan-zh-tw'; // Change this ID!


Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: '自動實作 Babele 翻譯',
    hint: '自動實作 Babele 翻譯，無需指向包含翻譯的目錄。',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
    if (typeof Babele !== 'undefined') {
      game.babele.register({
        module: MODULE_ID,
        lang: 'zh-tw',
        dir: 'compendium/zh-tw',
      });
    }
  }
  