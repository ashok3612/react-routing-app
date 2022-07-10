import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import ProductDetail from "./pages/ProductDetail.page";
import ProductsPage from "./pages/Products.page";
import WelcomePage from "./pages/Welcome.page";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
