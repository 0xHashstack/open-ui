import {render, screen} from '@testing-library/react';
import { Header } from './Header';

describe("HashstackCrypto", () => {
    openMenu = jest.fn(); 
    test("renders Component", () => {
        render(<Header theme={"Light"}
        isMenuOpened={false}
        openLeftMenuCallBack={openMenu}/>);

        const exampleInput = screen.getByLabelText('Hashstack')    
        expect(exampleInput).toBeVisible();
  });
});