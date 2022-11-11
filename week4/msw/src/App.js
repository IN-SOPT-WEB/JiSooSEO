import { useEffect, useState } from "react";

function App() {
  const [jisoos, setTodos] = useState([]);
  const [jisoo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/jisoos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("jisoos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jisoo,
    }).then((res) => {
      fetch("/jisoos")
        .then((res) => res.json())
        .then((data) => {
          setTodo("");
          setTodos(data);
          setLoading(false);
        });
    });
  };

  return (
    <section>
      <h2>나는 지수</h2>

      {jisoos.map((jisoo, idx) => (
        <p key={idx}>{jisoo}</p>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="jisoo"
          placeholder="지수에 대한 정보"
          disabled={loading}
          value={jisoo}
          onChange={({ target: { value } }) => setTodo(value)}
        />
        <button disabled={!jisoo}>추가</button>
      </form>
    </section>
  );
}

export default App;
