import { useEffect } from "react";
import Navbar from "../../globals/components/Navbar";
import Card from "./components/Card";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/productSlice";

function Product() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Kofi widget setup
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      kofiWidgetOverlay.draw('mohamedghulam', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#323842',
        'floating-chat.donateButton.text-color': '#fff'
      });
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <div className="container mx-auto py-9 px-4 sm:px-6 lg:px-8">
        <h2 className="headers text-center"> Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Product;
