import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const Background = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1;
`;

export { Background };
