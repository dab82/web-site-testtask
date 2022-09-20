import styled from '@emotion/styled';

import { mediaTablet, mediaDesktop, mediaQHD } from '../../utils/media';

export const ContainerBody = styled.div`
  max-width: 360px;
  padding: 0 16px;
  margin: 0 auto;

  ${mediaTablet(`
  max-width: 768px;
  padding: 0 32px;
  
  `)}

  ${mediaDesktop(`
  max-width: 1024px;
  padding: 0 60px;
  `)}

${mediaQHD(`
  max-width: 1170px;
  padding: 0;
  `)}
`;
