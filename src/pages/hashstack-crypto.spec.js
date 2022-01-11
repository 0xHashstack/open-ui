import {render, screen} from '@testing-library/react';
import HashstackCrypto from './hashstack-crypto';

describe("HashstackCrypto Component", () => {
    function noOp() {}
    if (typeof window.URL.createObjectURL === 'undefined') {
        Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
        console.log('Created custom');
    }
    window.Worker = noOp;
   test("renders Component", () => {
    render(<HashstackCrypto/>);
    // expect(screen.getByRole("heading", { name: /location search/i })
    //     ).toBeVisible();
        
    // expect(screen.getByRole("textbox", { name: /choose an origin \(optional\)/i })
    //     ).toBeVisible();

    // expect(screen.getByRole("textbox", { name: /choose a destination/i})
    //     ).toBeVisible();
    const exampleInput = screen.getByLabelText('Hashstack Finance')    
    expect(exampleInput).toBeVisible();
  });
});