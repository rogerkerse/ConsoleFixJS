/**
 * IE console.log fix
 * 
 * Author: Roger Kerse
 * https://github.com/rogerkerse/ConsoleFixJS
 */
if (typeof console === "undefined" || typeof console.log === "undefined") {console = {log: function() {}}