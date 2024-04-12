import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [allowed, setAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const handleChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password == "sirziathankyou") {
      setAllowed(true);
    }
  }

  if (allowed == false) {
    return (
      <div className="h-screen align-middle">
      <form className="max-w-sm mx-auto">
        <label className="block mb-2">
          Password:
          <input
            type="name"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="form-input mt-1 block w-full"
          />
        </label>
        <button type="submit" className="bg-green-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      </div>
    )

  }
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-zinc-200'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
