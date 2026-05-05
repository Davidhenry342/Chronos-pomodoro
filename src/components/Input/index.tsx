type DefaultInputProps = {
  type: string;
};
export function Input({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor="defaultInput"></label>
      <input id="defaultInput" type={type} />
    </>
  );
}
