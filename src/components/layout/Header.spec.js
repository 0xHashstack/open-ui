import {render, screen} from '@testing-library/react';
import Header from './Header';

describe("Header Component", () => {
    const openMenu = jest.fn(); 
    
    function noOp() {}
    if (typeof window.URL.createObjectURL === 'undefined') {
    Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
    }
    window.Worker = noOp;

    test("Header Component should display header as Hashstack", () => {
        render(<Header theme={"Light"}
        isMenuOpened={false}
        openLeftMenuCallBack={openMenu}/>);

        const element = screen.getByRole('link')    
        expect(element.textContent).toBe("Hashstack");
  });
});