import React from "react";
import { Link } from "react-router-dom";
import SideBarTimer from "../context/SideBarTimer";

function Question16() {
  return (
    <section class="w-full flex gap-5">
      <SideBarTimer />

      <div class="w-11/12 bg-amber-100 px-10 pt-10">
        <h1 class="font-bold text-xl"> Set the Password expire date</h1>
        <p className="my-2 w-1/2">
          The password for all new users in node1.network250.example.com should
          expires after 20 days.
        </p>
        <hr className="border-black border  mt-10" />

        <div className="w-full mt-4 flex justify-center mb-10">
          <Link to={"/exam"}>
            <button className="bg-gray-300 px-4 py-1 border border-gray-500">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Question16;
