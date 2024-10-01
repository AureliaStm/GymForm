import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='100px' marginTop='10px' />
        </HStack>
    )
}

export default NavBar