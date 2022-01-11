import {render, screen, getByTestId} from '@testing-library/react';
import Footer from './Footer';

describe("HashstackCrypto", () => {
    function noOp() {}
    if (typeof window.URL.createObjectURL === 'undefined') {
    Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
    }
    window.Worker = noOp;
    
    test("renders Component", () => {
        render(<Footer />);

        const element = screen.getByTestId('footer-text')
        // console.log(element);
        expect(screen.getByTestId('footer-text').textContent).toBe("Design & Develop by Hashstack Finance");
  });
});