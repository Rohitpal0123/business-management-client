"use client";
import { useStore } from "@/utility/store/counter";

export default function Counter() {
  const { count, inc } = useStore();
  return (
    <div className=" flex space-x-3 items-center">
      {/* <h1>{count}</h1>
      <button onClick={inc} className="border px-2 py-1 border-slate-300 rounded-md hover:bg-slate-100">Click me</button>*/}
    </div>
  );
}
