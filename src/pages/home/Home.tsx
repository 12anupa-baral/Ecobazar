import { Link } from "react-router-dom";
import Navbar from "../../globals/components/Navbar";
import Hero from "../../globals/components/Hero";
import Services from "../../globals/components/Services";
import Card from "../product/components/Card";
import CategoryCard from "../../globals/components/CategoryCard";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../store/productSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function Home() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/category");
        const data = await res.json();

        // If response shape is { message, data: [...] }
        setCategory(data.data); // ← only `data` contains the array
        console.log("Fetched categories:", data.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((store) => store.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <main className="text-gray-900">
        <Hero />
        <div className="mt-8">
          <Services />
        </div>

        {/* popular categories */}
        <section>
          <div className="container mx-auto text-center py-9">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Popular Category
            </h2>
            <div className="flex w-full justify-between flex-wrap pt-6">
              {category.map((category, index) => (
                // <CategoryCard key={index} categoryName={category} />
                <CategoryCard key={index} categoryName={category} />
              ))}
            </div>
          </div>
        </section>

        {/* popular products */}
        <section>
          <div className="container mx-auto text-center py-9">
            <h2 className="text-3xl lg:text-5xl font-semibold">
              Popular Products
            </h2>
            <div className="flex w-full justify-between flex-wrap pt-6">
              {products.map((product, index) => (
                // <CategoryCard key={index} categoryName={category} />
                <Card product={product} />
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className="py-20 lg:pt-32">
          <div className="container mx-auto text-center">
            <p className="uppercase tracking-wider text-gray-600">
              Our customers get results
            </p>
            <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
              <div className="w-full sm:w-1/3">
                <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
                  +100%
                </p>
                <p className="font-semibold mb-6">Stats Information</p>
              </div>
              <div className="w-full sm:w-1/3">
                <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
                  +100%
                </p>
                <p className="font-semibold mb-6">Stats Information</p>
              </div>
              <div className="w-full sm:w-1/3">
                <p className="text-4xl lg:text-6xl font-semibold text-teal-500">
                  +100%
                </p>
                <p className="font-semibold mb-6">Stats Information</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="py-20 lg:py-40">
          <div className="container mx-auto">
            <p className="uppercase tracking-wider mb-8 text-gray-600 text-center">
              What customers are saying
            </p>
            <div className="flex flex-col md:flex-row md:-mx-3">
              <div className="flex-1 px-3">
                <div
                  className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="text-xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p className="mt-6">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div className="flex items-center mt-8">
                    <img
                      className="w-12 h-12 mr-4 rounded-full"
                      src="https://placeimg.com/150/150/people"
                      alt="Jane Doe"
                    />
                    <div>
                      <p>Jane Doe</p>
                      <p className="text-sm text-gray-600">
                        Director of Research and Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-3">
                <div
                  className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="text-xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p className="mt-6">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div className="flex items-center mt-8">
                    <img
                      className="w-12 h-12 mr-4 rounded-full"
                      src="https://placeimg.com/150/150/people"
                      alt="John Doe"
                    />
                    <div>
                      <p>John Doe</p>
                      <p className="text-sm text-gray-600">
                        Director of Research and Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-3">
                <div
                  className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="text-xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <p className="mt-6">
                    Eu lobortis elementum nibh tellus molestie nunc non blandit
                    massa. Sit amet consectetur adipiscing elit duis.
                  </p>
                  <div className="flex items-center mt-8">
                    <img
                      className="w-12 h-12 mr-4 rounded-full"
                      src="https://placeimg.com/150/150/people"
                      alt="Jane Smith"
                    />
                    <div>
                      <p>Jane Smith</p>
                      <p className="text-sm text-gray-600">
                        Director of Research and Data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
          <h3 className="text-5xl font-semibold">
            Ready to grow your business?
          </h3>
          <p className="mt-8 text-xl font-light">
            Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque
            fermentum dui faucibus in.
          </p>
          <p className="mt-8">
            <button
              type="button"
              className=" py-5 px-16 text-lg bg-teal-500 hover:bg-teal-600 rounded text-white "
            >
              Get Started Now
            </button>
          </p>
        </section>
      </main>
      <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
        <div className="flex -mx-3">
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-5">
              Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
            </p>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://codebushi.com">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="https://codebushi.com">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Social Media</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://dev.to/changoman">Dev.to</a>
              </li>
              <li>
                <a href="https://twitter.com/HuntaroSan">Twitter</a>
              </li>
              <li>
                <a href="https://github.com/codebushi/gatsby-starter-lander">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
