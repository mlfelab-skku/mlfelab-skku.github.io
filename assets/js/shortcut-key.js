// The navbar search button shows only the magnifier icon (no "ctrl k" / "⌘ k"
// hint) on every OS. The keyboard shortcut itself (Ctrl/⌘ + K) is still bound by
// ninja-keys, so it keeps working. We normalize the icon here in case anything
// else changed it.
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    let shortcutKeyElement = document.querySelector("#search-toggle .nav-link");
    if (shortcutKeyElement) {
      shortcutKeyElement.innerHTML = '<i class="ti ti-search"></i>';
    }
  }
});
