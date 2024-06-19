import { useEffect } from "react";
import { dataInterface, fetchData } from "../redux/slices/dataSlices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";

function DataCard() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  );
  useEffect(() => {
    dispatch(fetchData());
    console.log("fetching data");
  }, [dispatch]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((character: dataInterface) => (
        <div
          key={character.id}
          className="m-4 p-4 bg-white border border-gray-200 rounded-lg shadow"
        >
          <img
            src={character.image}
            alt={character.name}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          />
          <div className="p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Status: {character.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataCard;
