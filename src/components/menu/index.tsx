import { Container, Wrapper } from "./style"

interface menuProps {
    
    handleClosedMenu: () => void
}


export function MenuContainer({  handleClosedMenu }: menuProps) {


    return (
        <Wrapper>
            <Container>
                <h1>Hello word</h1>
                <button onClick={() => handleClosedMenu()}>

                    close Menu
                </button>
                
                <a onClick={()=> handleClosedMenu()} href="#sobre">sobre</a>
            </Container>
        </Wrapper>
    )
}