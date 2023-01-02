import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const theme = useSelector(state => state.theme.currentTheme);
  console.log('>>>>>>', theme, theme === 'dark')

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
