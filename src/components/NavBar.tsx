import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent='space-between'>
            <Image src={logo} boxSize='100px' />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar