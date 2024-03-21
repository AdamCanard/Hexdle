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
            className="w-[40rem] h-full bg-[#fff0da] text-[#112A46] overflow-auto absolute z-10"
          >
            <h2 className="inline-block text-[#011A36] text-4xl border-b-3 border-black">
              Welcome to Hexdle!
            </h2>
            <h4 className="text-xs">By: Adam Cunard</h4>
            <h4 className="text-xs">
              Creator of your Favourite Hexcode Guesing Game
            </h4>

            <h5 className="font-bold text-lg">What is a Hexcode?</h5>
            <p className="text-s ">
              Hex color codes are the background of the internet. Every color
              you see on a screen can be determined by a Hexcode, your job is to
              guess one of them. Don't worry we will hold your hand though it.
              Hexcodes determine color by a differing amount of red, green blue
              values. Each Hexcode is made of 6 hexadecimals, 2 for each color.
              Hexadecimals are the same a regular decimals which use 10
              different digits to represent a number. Hexadecimal is in base16,
              meaning its made of 16 digits instead.{" "}
            </p>
            <div className="flex justify-evenly bg-[#DAE9FF]">
              <div>
                Base10:
                <div className="flex p-2 bg-[#80B9FF] justify-center items-center text-[#000000] border-2 border-black">
                  0 1 2 3 4 5 6 7 8 9
                </div>
                5, 13, 35, 100, 160, 250
              </div>
              <p className="flex leading-10 "> ==&gt;</p>
              <div>
                Base16:
                <div className="flex p-2 bg-[#80B9FF] justify-center items-center text-[#000000] border-2 border-black">
                  0 1 2 3 4 5 6 7 8 9 A B C D E F
                </div>
                00, 46, 7D, A3, BE, E0, F5
              </div>
            </div>
            <p>
              With only 2 hexadecimals, you can count up to 255, which in 'hex'
              is represented as FF. Hexadecimals are not very different from the
              digits your used to, where from right to left each digit gets 10
              times larger, in hexadecimals each digit is 16 times larger
            </p>
            <div className="flex w-[28rem] flex-col justify-evenly bg-[#DAE9FF]">
              <div>
                255 in base10 is counted with this formula:
                <div className="flex leading-3 p-4 bg-[#80B9FF] justify-center items-center text-[#000000] border-2 border-black">
                  (255)<sub>10</sub> = (2 x 10<sup>2</sup>) + (5 x 10
                  <sup>1</sup>) + (5 x 10<sup>0</sup>)
                </div>
              </div>

              <div>
                It would look like this in base16:
                <div className="flex p-2 bg-[#80B9FF] justify-center items-center text-[#000000] border-2 border-black">
                  (FF)<sub>16</sub> = (15 x 16<sup>1</sup>) + (15 x 16
                  <sup>0</sup>)
                </div>
              </div>
            </div>
            <h3 className="inline-block pt-4 font-extrabold text-2xl border-b-3 border-black">
              How to play
            </h3>
            <h4 className="text-s pt-2">Make a Guess!</h4>
            <p></p>
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
