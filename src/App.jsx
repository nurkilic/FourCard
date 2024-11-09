import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="mb-4">
      <section className="text-center mx-auto w-full max-w-[400px]  my-16 px-2">
        <h1 className="text-[var(--grayish-blue)] text-2xl">
          Reliable, efficient delivery
        </h1>
        <h2 className="text-[var(--very-dark-blue)] text-2xl font-semibold">Powered by Technology</h2>
        <p className="text-[var(--grayish-blue)] text-xs my-2 px-4">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <Cards></Cards>
    </div>
  );
}

export default App;
