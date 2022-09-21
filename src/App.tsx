import React from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { getData } from "./store/slices/fetchDataSlice";

function App() {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector((state) => state.data);

  const renderActivityData = () => {
    return (
      <ul>
        <li>Activity: {data.activity}</li>
        <li>Type: {data.type}</li>
        <li>Participants: {data.participants}</li>
        <li>Price: {data.price}</li>
        <li>Accessibility: {data.accessibility}</li>
      </ul>
    );
  };

  return (
    <div className="container">
      <section>
        <div className="text-center">
          <h1>I'm bored. What should I do?</h1>
        </div>
      </section>

      <section className="mt-10">
        <button
          onClick={() => dispatch(getData())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Button
        </button>
      </section>

      <section className="mt-10">
        {!isLoading && data && renderActivityData()}
        {!isLoading && error && <p>Failed to get an activity</p>}
      </section>
    </div>
  );
}

export default App;
