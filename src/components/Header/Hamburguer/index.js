import { Burguer, Bullet } from "./styles";

export function Hamburguer({ open, setOpen }) {
  return (
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <Bullet />
        <Bullet />
        <Bullet />
      </Burguer>
    </>
  );
}
