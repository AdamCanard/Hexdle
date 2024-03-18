export default function InputBox({ label, getter, setter }) {
  return (
    <div className="flex flex-col items-center pb-2">
      <label>{label}</label>
      <input
        maxLength={"2"}
        value={getter}
        className="border-solid border-black border-2 w-12"
        onChange={(e) => setter(e.target.value)}
        type="text"
      />
    </div>
  );
}
