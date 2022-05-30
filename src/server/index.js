import * as publicUiFunctions from './ui';
import * as publicAPIFunctions from './api-tools';
import * as publicTextFunctions from './text-tools';
import * as publicDebugFunctions from './debug-tools';

// Expose public functions by attaching to `global`
global.onOpen = publicUiFunctions.onOpen;
global.showSidebar = publicUiFunctions.showSidebar;

global.startCorrection = publicAPIFunctions.startCorrection;

global.replaceWord = publicTextFunctions.replaceWord;
global.highlightWord = publicTextFunctions.highlightWord;

global.debugHighlight = publicDebugFunctions.debugHighlight;
global.debugReplace = publicDebugFunctions.debugReplace;
global.debugValidate = publicDebugFunctions.debugValidate;
