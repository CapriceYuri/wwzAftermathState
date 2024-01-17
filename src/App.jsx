import Table from "./Table";

function App() {
  return (
    <div className="h-lvh w-full min-h-lvh">
      <video
        src="wwz.mp4"
        alt="background-image"
        className="object-cover h-lvh min-w-full absolute"
        autoPlay
        loop
        muted
      />
      <Table />
    </div>
  );
}

export default App;
