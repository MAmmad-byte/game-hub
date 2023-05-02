import { Heading } from "@chakra-ui/react";
import { GameQuary } from "../App";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {gameQuary.platform?.name || ""} {gameQuary.genre?.name || ""} Games
    </Heading>
  );
};

export default GameHeading;
