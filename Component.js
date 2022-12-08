import { useEffect, useState } from "./ReactClone.js";

export default function Component({ propCount, buttonElem }) {
  const [count, setCount] = useState(0);
  const propCountDoubled = propCount * 2;

  useEffect(() => {
    const handler = () => setCount((currentCount) => currentCount + 1);
    buttonElem.addEventListener("click", handler);

    return () => buttonElem.removeEventListener("click", handler);
  }, [buttonElem]);

  return `
    <div>
      State: ${count}
      Prop: ${propCount}
      Prop Doubled: ${propCountDoubled}
    </div>
  `;
}
