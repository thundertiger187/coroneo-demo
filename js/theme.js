/* Design „Coroneo – Apple-Stil“ – ein festes Design für Kunden- und Team-App.
   Wird früh im <head> geladen und setzt <html data-theme="coroneo">. Die frühere Design-Auswahl (Klassisch/Glas)
   entfällt; die API window.DGTheme bleibt (get/set/open/close/sync), damit bestehender Code unverändert läuft. */
(function () {
  var root = document.documentElement, T = 'coroneo';
  root.setAttribute('data-theme', T);
  function noop() {}
  window.DGTheme = { get: function () { return T; }, set: noop, open: noop, close: noop, sync: noop, themes: { coroneo: { label: 'Coroneo – Apple-Stil', desc: 'Rosso & Crema' } } };
})();
