export default function ColorBox({ bg, size }) {
  return (
    <>
      {size == "s" ? (
        <div
          style={{
            backgroundColor: bg,
          }}
          className="size-6"
        />
      ) : (
        <div
          style={{
            backgroundColor: bg,
          }}
          className="size-12"
        />
      )}
    </>
  );
}
