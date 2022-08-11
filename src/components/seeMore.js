import { useEffect, useState } from "react";
import innerText from 'react-innertext';

const SeeMore = ({ children }) => {
  const [isTruncate, setTrucante] = useState(false);

  const computeTruncate = () => {
    const text = innerText(children);
    if (text.length > 309) {
      setTrucante(true);
    }
  }

  useEffect(() => {
    computeTruncate();
  }, [])

  return (
    <div>
      <div className="line-clamp-7">
        {children}
      </div>
      <div className="mt-2 text-neutral-400 font-normal italic">
        <a>See more</a>
      </div>
    </div>
  );
}

export default SeeMore;