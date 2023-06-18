import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Button
          count={count}
          setCount={setCount} // Pass setCount as a prop
        />
      </div>
    </>
  );
}

function Button() {
  const emojis = ["🙌", "🎉", "😭", "👍"];

  const [count, setCount] = useState(0);
  const [emojiIndex, setEmojiIndex] = useState(0);

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        setEmojiIndex((emojiIndex + 1) % emojis.length);
      }}
      className="button-text"
    >
      Let's Go! {emojis[emojiIndex]}
      <p>{count}</p>
    </button>
  );
}

export default App;
