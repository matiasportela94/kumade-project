import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`;

const FadeIn = styled.div`
  animation: 4s ${fadeInAnimation};
`;

export default FadeIn;