type Choice = "system" | "light" | "dark"

const KEY = "theme"
const media = matchMedia("(prefers-color-scheme: dark)")

function stored(): Choice {
  try {
    const value = localStorage.getItem(KEY)
    return value === "light" || value === "dark" ? value : "system"
  } catch {
    return "system"
  }
}

function apply(choice: Choice) {
  const dark = choice === "system" ? media.matches : choice === "dark"
  document.documentElement.classList.toggle("dark", dark)
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-theme-choice]")) {
    button.setAttribute("aria-pressed", String(button.dataset.themeChoice === choice))
  }
}

/** Wires the footer's System / Light / Dark buttons. "System" forgets the stored choice. */
export function initThemeSwitch() {
  apply(stored())
  for (const button of document.querySelectorAll<HTMLButtonElement>("[data-theme-choice]")) {
    button.addEventListener("click", () => {
      const choice = button.dataset.themeChoice as Choice
      try {
        if (choice === "system") localStorage.removeItem(KEY)
        else localStorage.setItem(KEY, choice)
      } catch {}
      apply(choice)
    })
  }
  media.addEventListener("change", () => {
    if (stored() === "system") apply("system")
  })
}
