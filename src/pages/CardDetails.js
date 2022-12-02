import React from "react";
import MainBg from "./../assets/bg-main-desktop.png";
import CardFrontBg from "./../assets/bg-card-front.png";
import CardBackBg from "./../assets/bg-card-back.png";

function CardDetails() {
  return (
    <>
      <div class="grid grid-cols-2 divide-x">
        <div class="">
          <img
            src={CardFrontBg}
            class=" z-10 absolute top-24 left-36 drop-shadow-2xl"
          />
          <img
            src={CardBackBg}
            class="z-10 absolute top-1/2 left-64 drop-shadow-2xl"
          />
          <div>
            <img src={MainBg} class="h-screen w-1/3 absolute z-0" />
          </div>
        </div>

        <div class="w-screen h-screen border-4 border-red-500/100">
          <div>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
