import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">ElectroShop</Heading>
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">Products</Link>
              <Link href="#" color="white">About Us</Link>
              <Link href="#" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="start" spacing={4} maxW="lg">
              <Heading as="h2" size="xl">Discover the Latest in Electronics</Heading>
              <Text fontSize="lg">Explore our wide range of products and find the perfect gadget for you.</Text>
              <Link href="#" color="blue.500" fontSize="lg">Shop Now</Link>
            </VStack>
            <Image src="/images/hero-product.jpg" alt="Featured Product" boxSize="400px" objectFit="cover" />
          </Flex>
        </Container>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb={8}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product1.jpg" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 1</Heading>
                <Text mt={4}>Description of Product 1</Text>
                <Text mt={4} fontWeight="bold">$199.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product2.jpg" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 2</Heading>
                <Text mt={4}>Description of Product 2</Text>
                <Text mt={4} fontWeight="bold">$299.99</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/product3.jpg" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md">Product 3</Heading>
                <Text mt={4}>Description of Product 3</Text>
                <Text mt={4} fontWeight="bold">$399.99</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;