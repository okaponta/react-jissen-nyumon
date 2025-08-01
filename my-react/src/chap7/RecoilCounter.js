import { useRecoilState } from "recoil";
import { counterAtom } from "../store/atom";

export default function RecoilCounter() {
  const [counter, setCounter] = useRecoilState(counterAtom);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{counter}回クリックされました</p>
    </>
  );
}
