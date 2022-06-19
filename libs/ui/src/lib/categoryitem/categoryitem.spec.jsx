import { render, screen } from '@testing-library/react';

import Categoryitem from './categoryitem';

describe('Categoryitem', () => {
  let category;
  beforeEach(() => {
    category = "Hats";
    render(<Categoryitem id={1} title={category} />)

  })
  it('should render successfully', () => {
    const { baseElement } = render(<Categoryitem />);
    expect(baseElement).toBeTruthy();
  });

  it('should have heading with given category ', () => {
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(category)
  })

  it('should have text Shop Now', () => {
    expect(screen.getByText(/Shop Now/i)).toBeTruthy();
  })
});
