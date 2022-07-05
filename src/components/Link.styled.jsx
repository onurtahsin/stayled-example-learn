import styled,{css} from 'styled-components';

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: white;
  &:hover{
    transform: scale(0.97);
    opacity: 0.5;
  }
  ${(props)=> props.secondary && css`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.25rem;
  color: black;
  `};
`;

export default StyledLink;
//!  es ile başlayarak kısaltmaları kullanabilirsin es unutma