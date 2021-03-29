import React,{useEffect,useState} from "react";
import Typist from "react-typist";
import "./TypeWriter.css"
const TypeWriter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <div className="type">
        <span className="type_static"> I am </span>
      {count ?
    <Typist avgTypingDelay={100} delay={1000} onTypingDone={() => setCount(0)}>
     
      <span>a developer</span>
      <Typist.Backspace count={11} delay={800} />
      <span>a designer</span>
      <Typist.Backspace count={10} delay={800} />
      <span>an artist</span>
    </Typist>:""}
    </div>
  );
};

export default TypeWriter;
