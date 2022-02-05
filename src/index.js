import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

function Header() {
  return (
    <header>
      <h2>React App</h2>
      <nav>
        <span>Home</span>
        <span>Info</span>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <p>
        created by:
        <a href="https://github.com/ifeelblue99">ifeelblue99</a>
      </p>
    </footer>
  );
}

function Page() {
  return (
    <div class="page">
      <Header />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, rootElement);
