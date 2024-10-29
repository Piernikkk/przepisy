import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    backgroundColor: 'background',
    fontFamily: 'var(--font-poppins)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./lib/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            value: '#000000',
          },
          tile: [
            { value: '#0a0a0a' },
            { value: '#181818' },
          ],
          text: [
            { value: '#E9ECEF' },
            { value: '#A1A1AA' },
            { value: '#898989' },
            { value: '#7A7A7A' },
            { value: '#000000' },
          ],
          border: {
            value: '#ffffff30',
          },
          gray: [
            { value: "#f5f5f5" },
            { value: "#e7e7e7" },
            { value: "#cdcdcd" },
            { value: "#b2b2b2" },
            { value: "#9a9a9a" },
            { value: "#8b8b8b" },
            { value: "#848484" },
            { value: "#717171" },
            { value: "#656565" },
            { value: "#575757" }
          ],
          blue: [
            { value: "#e5f4ff", },
            { value: "#cde2ff", },
            { value: "#9bc2ff", },
            { value: "#64a0ff", },
            { value: "#3984fe", },
            { value: "#1d72fe", },
            { value: "#0969ff", },
            { value: "#0058e4", },
            { value: "#004ecc", },
            { value: "#0043b5" }
          ],
          orange: [
            { value: "#fff8e1" },
            { value: "#ffefcb" },
            { value: "#ffdd9a" },
            { value: "#ffca64" },
            { value: "#ffba38" },
            { value: "#ffb01b" },
            { value: "#ffab09" },
            { value: "#e39500" },
            { value: "#cb8400" },
            { value: "#b07100" },
          ],
          red: [
            { value: "#ffe9e9", },
            { value: "#ffd1d1", },
            { value: "#fba0a1", },
            { value: "#f76d6d", },
            { value: "#f34141", },
            { value: "#f22625", },
            { value: "#f21616", },
            { value: "#d8070b", },
            { value: "#c10008", },
            { value: "#a90003" }
          ],
          dimmed: {
            blue: [
              { value: "#e5f4ff20", },
              { value: "#cde2ff20", },
              { value: "#9bc2ff20", },
              { value: "#64a0ff20", },
              { value: "#3984fe20", },
              { value: "#1d72fe20", },
              { value: "#0969ff20", },
              { value: "#0058e420", },
              { value: "#004ecc20", },
              { value: "#0043b520" }
            ],
            red: [
              { value: "#ffe9e920", },
              { value: "#ffd1d120", },
              { value: "#fba0a120", },
              { value: "#f76d6d20", },
              { value: "#f3414120", },
              { value: "#f2262520", },
              { value: "#f2161620", },
              { value: "#d8070b20", },
              { value: "#c1000820", },
              { value: "#a9000320" }
            ],
            gray: [
              { value: "#f5f5f520" },
              { value: "#e7e7e720" },
              { value: "#cdcdcd20" },
              { value: "#b2b2b220" },
              { value: "#9a9a9a20" },
              { value: "#8b8b8b20" },
              { value: "#84848420" },
              { value: "#71717120" },
              { value: "#65656520" },
              { value: "#57575720" }
            ],
            orange: [
              { value: "#fff8e120" },
              { value: "#ffefcb20" },
              { value: "#ffdd9a20" },
              { value: "#ffca6420" },
              { value: "#ffba3820" },
              { value: "#ffb01b20" },
              { value: "#ffab0920" },
              { value: "#e3950020" },
              { value: "#cb840020" },
              { value: "#b0710020" },
            ],
          }
        }
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss,
});
