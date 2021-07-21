import React from "react"

const myThemes = [
  {
    id: "theme-merlion",
    name: "Merlion",
  },
  {
    id: "theme-night-safari",
    name: "Night Safari",
  },
  {
    id: "theme-garden-by-the-bay",
    name: "Garden by the Bay",
  },
  {
    id: "theme-chinatown",
    name: "Chinatown",
  },
  {
    id: "theme-sentosa-sunset",
    name: "Sentosa Sunset",
  },
]

const ThemeButton = styled("div")``

const ThemeSwitcher = ({ theme, setTheme }) => {
  if (theme) {
    return (
      <div>
        {myThemes.map((item, index) => {
          const nextTheme =
            myThemes.length - 1 === index
              ? myThemes[0].id
              : myThemes[index + 1].id

          return item.id === theme ? (
            <div key={item.id} className={item.id}>
              <button
                aria-label={`Theme ${item.name}`}
                onClick={() => setTheme(nextTheme)}
              >
                {item.name}
              </button>
            </div>
          ) : null
        })}
      </div>
    )
  }
  return null
}

export default ThemeSwitcher
