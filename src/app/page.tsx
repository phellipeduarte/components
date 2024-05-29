import { Button, Type } from "./components/Button";

export default function Home() {
  return (
    <>
      <Button text="Home" link="/" type={Type.Main} />
    </>
  );
}
