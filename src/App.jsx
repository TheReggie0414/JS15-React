import { Section } from "./components/section";
import { Theme } from "./components/theme";
import { useFetchProducts } from "./hooks/useFetchProducts";
import { useGeolocation } from "./hooks/useGeolocation";
import { useWindowFocus } from "./hooks/useWindowFocus";
import { ThemeProvider } from "./provider/theme";
import { LangProvider } from "./provider/lang";
import "./App.css";

export const App = () => {
  const products = useFetchProducts();
  const location = useGeolocation();
  console.log("🚀 products==>>", products);
  console.log("🚀 location==>>", location);
  useWindowFocus();

  return (
    <ThemeProvider>
      <LangProvider>
        <Theme />
        <Section />
      </LangProvider>
    </ThemeProvider>
  );
};

export default App;
