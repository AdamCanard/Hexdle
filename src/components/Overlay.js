import Button from "./Button";

export default function Overlay({ isOn, onClose, children }) {
  return (
    <>
      {isOn ? (
        <div
          id="background"
          className="flex justify-center items-center w-full h-screen cursor-pointer bg-[#000000] bg-opacity-50 mix-blend-multiply relative"
        >
          <div
            id="How to play"
            className="w-[30rem] h-full bg-[#fff0da] text-[#112A46] overflow-auto absolute z-10"
          >
            <h2>Welcome to Hexdle!</h2>
            <h3>How to play</h3>
            <Button
              className="size-7 top-3 right-5 absolute border-3 border-black rounded-full leading-5 bg-black bg-opacity-25 font-bold "
              value={"X"}
              onClick={onClose}
            ></Button>
          </div>
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
