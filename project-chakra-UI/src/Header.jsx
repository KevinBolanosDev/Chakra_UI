import React from "react";
import { 
    Text,
    ButtonGroup,
    Button,
    Box,
    VStack,
} from '@chakra-ui/react';
import { css } from '@emotion/react';

const Header = () => {
    return(
        <Box
        backgroundImage="url('/src/img011.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={{ base: "500px", md: "800px" }}
        css={css` 
        @media (max-width: 400px) {
            height: 300px;
        }
        `}
        >
        <VStack spacing={4}>
        <Text fontSize={{ base: "2rem", md: "5xl" }}
        color="white"
        css={css`
                @media (max-width: 500px) {
                    font-size: 2rem;
            }
        `}
        >
          DOMINA EL TERRENO
        </Text>
        <ButtonGroup 
        spacing={6}
        flexDirection={{ base: "column", sm: "row" }}
        css={css` 
        @media (max-width: 500px) {
            flex-direction: column;
            align-items: center;      
        }
      `}
        >
          <Button
          color="white" 
          variant="outline" 
          variantColor="white" 
          width="200px"
          css={css` 
        @media (max-width: 500px) {
            width: 300px     
        }
      `}
          _hover={{ bg: "white", color:"black" }}
          marginBottom="16px"
          >VER DETALLES</Button>
          <Button 
          color="white" 
          variant="outline" 
          variantColor="white"
          width="200px"
          css={css` 
        @media (max-width: 500px) {
            width: 300px     
        }
      `}
          _hover={{ bg: "white", color:"black" }}>VER VIDEO</Button>
        </ButtonGroup>
        </VStack>
    </Box>
    )
}

export default Header;