import Table from "./Table";

function App() {
  return (
    <>
      <video
        src="wwz.mp4"
        alt="background-image"
        className="object-cover h-full w-full absolute hidden md:block"
        autoPlay
        loop
        muted
      />
      <Table />
    </>
  );
}

export default App;
