function App() {
  return (
    <>
      <div className="h-dvh w-dvw flex flex-col justify-between bg-zinc-50">
        <div className="h-40 flex items-center px-20 bg-black">
          <h1 className="text-5xl font-bold underline text-red-500">Kitty!</h1>
        </div>

        <div className="h-full flex items-center justify-center bg-orange-100">
          <img
            className="w-80"
            src="https://images.fineartamerica.com/images/artworkimages/medium/2/3-galaxy-kitty-cat-riding-pizza-in-space-random-galaxy.jpg"
          />
        </div>

        <div className="h-12 bg-cyan-300 flex items-center px-10">footer</div>
      </div>
    </>
  );
}

export default App;
