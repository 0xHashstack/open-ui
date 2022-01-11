import {render, screen} from '@testing-library/react';
import { HashstackCrypto } from './hashstack-crypto';

fdescribe("HashstackCrypto", () => {
 
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