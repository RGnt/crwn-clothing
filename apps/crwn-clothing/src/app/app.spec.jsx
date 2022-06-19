import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  let appContainer;
  beforeEach(() => {
    const { container } = render(<App />)
    appContainer = container;
  })
  it('should render successfully', () => {
    expect(appContainer).toBeTruthy();
  });

  it('should have parent container for categories ', () => {
    const categoriesContainer = appContainer.querySelector(".categories-container");
    expect(categoriesContainer).toBeTruthy();
  })

  it('should display 5 categories', () => {
    const categoriesCount = appContainer.querySelectorAll(".category-container");

    expect(categoriesCount.length).toEqual(5);
  });
});
