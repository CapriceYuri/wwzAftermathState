import Table from "./Table";

function App() {
  return (
    <div className="h-lvh w-full">
      <video
        src="wwz.mp4"
        alt="background-image"
        className="object-cover h-auto min-h-full min-w-full absolute"
        autoPlay
        loop
        muted
      />
      <Table />
    </div>
  );
}

export default App;
