import {render, screen, getByTestId} from '@testing-library/react';
import Footer from './Footer';

describe("Footer Component", () => {
    function noOp() {}
    if (typeof window.URL.createObjectURL === 'undefined') {
    Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
    }
    window.Worker = noOp;
    
    test("Test Footer text value:- it should display Design & Develop by Hashstack Finance", () => {
        render(<Footer />);
        expect(screen.getByTestId('footer-text').textContent).toBe("Design & Develop by Hashstack Finance");
    });
});