import { render, screen } from '@testing-library/react';

import App from './App';
import PortfolioList from './Pages/Portfolio/PortfolioList'
import PortfolioItem from './Pages/Portfolio/PortfolioItem'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Nav from './Pages/Nav'
import NavOptions from './Pages/Nav'

test('check contact exists', () => {
  render(<Contact />);
  expect(true).toBeTruthy();
});

test("Contact render", () => {
  const actual = () => {
    render(<Contact />);
  };
  expect(actual).not.toThrow();
});