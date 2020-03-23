// ==UserScript==
// @name         Prevent Default Project
// @namespace    http://infoprojects.nl/
// @version      1.1
// @description  When creating an issue, empties the project input
// @author       Marco
// @match        https://infoprojects.atlassian.net/*/*
// @updateURL    https://github.com/scizorg45/Tampermonky_scripts/blob/master/JIRA-Prevent-Auto-Project.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  let observer = new MutationObserver(function(mutations) {
    // project is the hidden field which contains the real value
    // project-field is the dropdownbox
    let projectFields = jQuery("#create-issue-dialog").find("#project, #project-field");

    if (projectFields.length) {
      projectFields.val("");
      // We need to disconnect, or else we will not get project filled
      observer.disconnect();
    }
  });

  observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
})();
