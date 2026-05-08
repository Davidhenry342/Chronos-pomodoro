type DefaultInputProps = {
  id: string;
  children: React.ReactNode;
} & React.ComponentProps<'input'>;

export function Input({ id, type, children }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} />
    </>
  );
}
