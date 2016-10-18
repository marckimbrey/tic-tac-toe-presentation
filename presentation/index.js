  // Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  movetree: require("../assets/move-tree.png"),
  largemovetree: require("../assets/large-move-tree.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              MiniMax Algorithm
            </Heading>
            <Heading size={4} fit >
              Building a Tic-Tac-Toe Ai
            </Heading>
          </Slide>
          <Slide>
            <Heading>
              Tic Tac Toe
            </Heading>
            <List>
              <ListItem>Game of perfect information -We know all possible moves</ListItem>
              <ListItem>Is a zero sum Game -If one player wins the other loses</ListItem>
              <ListItem>If played perfectly you will never lose.</ListItem>
            </List>
          </Slide>
          <Slide >
          <Heading size={4} fit >
            Describing Minimax
          </Heading>
            <Text>
            The key to the Minimax algorithm is a back and forth between the two players,
            where the player whose "turn it is" desires to pick the move with the maximum score.
            In turn, the scores for each of the available moves are determined by the opposing player
            deciding which of its available moves has the minimum score. And the scores for the opposing
            players moves are again determined by the turn-taking player trying to maximize
             its score and so on all the way down the move tree to an end state.
            </Text>
          </Slide>
          <Slide>
            <Heading size={1} >Turn</Heading>
            <List>
              <ListItem>If the game is over, return the score</ListItem>
              <ListItem>Otherwise get a list of new game states for every possible move</ListItem>
              <ListItem>Create a scores list</ListItem>
              <ListItem>For each of these states add the minimax result of that state to the scores list</ListItem>
              <ListItem>If it's AI's turn, return the maximum score from the scores list</ListItem>
              <ListItem>If it's players turn, return the minimum score from the scores list</ListItem>
            </List>
          </Slide>
          <Slide>
            <Image src={images.movetree.replace("/", "")} margin="0px auto 40px" height="100%"/>
          </Slide>
          <Slide>
            <Image src={images.largemovetree.replace("/", "")} margin="20px auto" height="90%" width="90%"/>
          </Slide>
          <Slide>
            <Text>Project can be found at:</Text>
            <Link href="https://codepen.io/MarcKimbrey/pen/EKwXXP">https://codepen.io/MarcKimbrey/pen/EKwXXP</Link>
            <Text>Based on blogpost:</Text>
            <Link href="http://neverstopbuilding.com/minimax">https://codepen.io/MarcKimbrey/pen/EKwXXP</Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
