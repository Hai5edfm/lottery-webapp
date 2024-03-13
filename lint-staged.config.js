const isWin = process.platform === "win32"

module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "npm run type-check",
  // Run ESLint on changes to JavaScript/TypeScript files
  "**/*.(ts)?(x)": (filenames) => {
    const escapedFileNames = filenames
      // this will wrap all "[" "]" square brackets with another square brackets ([ => [[]) so [...customer].tsx will be processed to [[]...customer[]].tsx
      .map((filename) => `"${isWin ? filename.replace(/\[|\]/g, "[$&]") : filename}"`)
      .join(" ")
    return [`npm run lint . ${escapedFileNames}`, `npm run format:fix ${escapedFileNames}`]
  },
}
