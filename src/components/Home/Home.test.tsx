import {render,screen} from "@testing-library/react";
import Home from './Home';

describe('Home component',()=>{
    it('Should Home component render Sucessfully', ()=>{
        render(<Home/>);
    })
    
    it('Should render Form component Sucessfully', ()=>{
        render(<Home/>);
        expect(screen.getByTestId('form')).not.toBeNull();
    })
})