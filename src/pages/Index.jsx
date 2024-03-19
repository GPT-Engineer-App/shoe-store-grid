import React, { useState } from "react";
import { Box, Button, Grid, GridItem, Image, Text, Icon, Table, Thead, Tbody, Tr, Th, Td, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const shoes = [
  { id: 1, name: "Sneaker", price: 59.99, color: "Black", image: "https://images.unsplash.com/photo-1501665588942-a2ef271233a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNuZWFrZXJ8ZW58MHx8fHwxNzEwODY2MzI1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Running Shoe", price: 79.99, color: "Blue", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibHVlJTIwcnVubmluZyUyMHNob2V8ZW58MHx8fHwxNzEwODY2MzI1fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Loafer", price: 89.99, color: "Brown", image: "https://images.unsplash.com/photo-1615979474401-8a6a344de5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicm93biUyMGxvYWZlcnxlbnwwfHx8fDE3MTA4NjYzMjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Boot", price: 99.99, color: "Black", image: "https://images.unsplash.com/photo-1675240963946-c105ddcab6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJvb3R8ZW58MHx8fHwxNzEwODY2MzI2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Sandal", price: 49.99, color: "Tan", image: "https://images.unsplash.com/photo-1700178310305-0e05d7930f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YW4lMjBzYW5kYWx8ZW58MHx8fHwxNzEwODY2MzI3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 6, name: "High Heel", price: 109.99, color: "Red", image: "https://images.unsplash.com/photo-1591884807235-1dc6c2e148b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBoaWdoJTIwaGVlbHxlbnwwfHx8fDE3MTA4NjYzMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 7, name: "Slipper", price: 29.99, color: "Gray", image: "https://images.unsplash.com/photo-1488503648513-9b838ea1125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmF5JTIwc2xpcHBlcnxlbnwwfHx8fDE3MTA4NjYzMjh8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 8, name: "Oxford", price: 119.99, color: "Brown", image: "https://images.unsplash.com/photo-1518943667124-0c5e63a759dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicm93biUyMG94Zm9yZCUyMHNob2V8ZW58MHx8fHwxNzEwODY2MzI4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 9, name: "Flip Flop", price: 19.99, color: "Blue", image: "https://images.unsplash.com/photo-1475173277047-80300315b309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibHVlJTIwZmxpcCUyMGZsb3B8ZW58MHx8fHwxNzEwODY2MzI4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 10, name: "Sneaker", price: 69.99, color: "White", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJ8ZW58MHx8fHwxNzEwODY2MzI5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, shoe) => total + shoe.price, 0).toFixed(2);
  };

  const handleBuyNow = () => {
    const totalPrice = calculateTotalPrice();
    alert(`Total Price: $${totalPrice}`);
    setCart([]);
    onClose();
  };

  return (
    <Box>
      <Box position="fixed" top={4} right={4}>
        <Button onClick={onOpen} variant="outline" colorScheme="blue">
          <Icon as={FaShoppingCart} mr={2} />
          Cart ({cart.length})
        </Button>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={6} p={6}>
        {shoes.map((shoe) => (
          <GridItem key={shoe.id}>
            <Box borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={shoe.image} alt={shoe.name} />
              <Box p={4}>
                <Text fontWeight="bold" mb={2}>
                  {shoe.name}
                </Text>
                <Text mb={2}>${shoe.price}</Text>
                <Button colorScheme="blue" onClick={() => addToCart(shoe)}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shopping Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Color</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart.map((shoe) => (
                  <Tr key={shoe.id}>
                    <Td>{shoe.name}</Td>
                    <Td>${shoe.price}</Td>
                    <Td>{shoe.color}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleBuyNow}>
              Buy Now
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
