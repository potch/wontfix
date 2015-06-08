var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.bugzilla.mozilla.org",
  contentScriptFile: data.url("wontfix.js")
});