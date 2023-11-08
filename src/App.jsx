import { Typography } from "./components/typography";
import { Box } from "./components/box";
import { Button } from "./components/button";
import { Spacer } from "./components/spacer";
import { Greetings } from "./components/greetings";
import { List } from "./components/list";
import list from "./folder/const";
import "./App.css";

export const App = () => {
  const title = "Hello";
  return (
    <>
      <Box>
        <Typography text="Taras" title={title} visible />
        <Spacer>
          {/* <Greetings greet /> */}
          <h3>fdgdf</h3>
          <h3>fdgdf</h3>
        </Spacer>
        <List list={list} />
        <Greetings greet />
        <Button />
      </Box>
    </>
  );
};

export default App;
