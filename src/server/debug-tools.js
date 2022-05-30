import { highlightWord, replaceWord, validateSelection } from './text-tools';

export function debugHighlight() {
  highlightWord(100, 105, 0);
}

export function debugReplace() {
  replaceWord('tilkynningunni', 0, 23, 2, 'tilkynningunni');
}

const debugPar =
  'Í tilkynningunni kemur fram að hér gefur að líta enn ein mistökin í viðbrögðum stjórnvalda við heimsfaraldrinum. Betra væri að setja stórfelldar afléttingar í kælir fram yfir Páska en búist er við umtalsverðum fólksferðum innanlands yfir helgina.';

export function debugValidate() {
  console.log(validateSelection(0, 23, debugPar, 'tilkynningunni'));
}
