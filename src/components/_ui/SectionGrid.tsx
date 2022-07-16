import styled from '@emotion/styled';
import dimensions from '@styles/dimensions';

export const SectionGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export default SectionGrid;
