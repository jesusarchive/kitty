
export default function App() {
  return (
    <>
      <div className="h-dvh w-dvw flex flex-col justify-between bg-zinc-50">
        <div className="h-40 flex items-center px-20 bg-black">
          <h1 className="text-5xl font-bold underline text-red-500">Kitty!</h1>
        </div>

        <div className="h-full flex flex-col bg-orange-100 p-32 gap-4">
          <div className="h-full w-full bg-white p-4 flex flex-col gap-16">
            <h2 className="text-4xl font-bold">Button</h2>

            <div className="flex gap-2">
              {/* <Button variant="default">primary</Button> */}
              
            </div>
          </div>

          <img
            className="w-52 self-center p-12"
            src="https://images.fineartamerica.com/images/artworkimages/medium/2/3-galaxy-kitty-cat-riding-pizza-in-space-random-galaxy.jpg"
          />
        </div>

        <div className="h-12 bg-cyan-300 flex items-center justify-end px-10 ">
          2024
        </div>
      </div>
    </>
  );
}
