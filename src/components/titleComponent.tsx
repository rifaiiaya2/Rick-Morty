import DataCard from "./dataCard";
function TitleComponent() {
  return (
    <div className="container mx-auto pt-5">
      <div className="flex justify-center pb-5">
        <h1 className="font-sans text-6xl text-red-600 font-bold tracking-wide text-center w-full">
          The Rick and Morty API
        </h1>
      </div>
      <DataCard />
    </div>
  );
}

export default TitleComponent;
