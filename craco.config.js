module.exports = {
  babel: {
    plugins: [
      ['styled-components', { ssr: false, fileName: false, pure: true }, 'styled-components'],
    ],
  },
}
