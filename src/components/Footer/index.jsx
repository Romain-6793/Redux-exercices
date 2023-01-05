import styled from 'styled-components'
import colors from '../../utils/style/colors'
import EmailInput from '../EmailInput'
import { useDispatch, useSelector } from 'react-redux';
import * as themeActions from '../../features/theme';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  padding-top: 30px;
`

function Footer() {
  const dispatch = useDispatch();
  const handleTheme = () => dispatch(themeActions.toggle())
  const theme = useSelector(state => state.theme);
  console.log({theme})
  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={handleTheme}>
        Changer de mode : {theme === 'light' ? '*' : 'P'} 
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
