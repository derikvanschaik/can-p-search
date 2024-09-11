import { useState } from "https://esm.sh/v128/preact@10.19.6/hooks/src/index.js";
import EntryInput from "../islands/EntryInput.tsx";

export default function Home() {
  return (
    <div className="container">
      <EntryInput />
    </div>
  );
}
