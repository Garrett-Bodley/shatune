import "./App.css";
import { useState, ChangeEvent, MouseEvent, FormEvent } from "react";

import HashInput from "./HashInput.tsx";
import GithubInput from "./GithubInput.tsx";
import StringFileInput from "./StringFileInput.tsx";
import ScaleSelect from "./ScaleSelect.tsx";
import TempoInput from "./TempoInput.tsx";
import Play from './Play.tsx'
import ShowSHA from "./ShowSHA.tsx";

function App() {
  const [hashInput, setHashInput] = useState<string>("");
  const [githubInput, setGithubInput] = useState<string>("");
  const [stringInput, setStringInput] = useState<string>("");
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [scale, setScale] = useState<string>('ionian')

  const handleHashInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHashInput(e.target.value);
  };

  const clearHashInput = (_e: MouseEvent<HTMLButtonElement>) => {
    setHashInput("");
  };

  const handleGithubOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubInput(e.target.value);
  };

  const clearGithubInput = (_e: MouseEvent<HTMLButtonElement>) => {
    setGithubInput("");
  };

  const handleStringOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStringInput(e.target.value);
  };

  const clearStringInput = (_e: MouseEvent<HTMLButtonElement>) => {
    console.log('clearing string')
    setStringInput("");
  };

  const handleFileOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) setFileInput(files[0])
  }

  const clearFileInput = () => {
    setFileInput(null);
  }

  const handleCheckedOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  const handleScaleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setScale(e.target.value)
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const playHash = () => {

  }


  return (
    <>
      <h1>SHAlala</h1>
      <h2>Turn Your SHA1 into Music If You Want to Do That For Some Reason</h2>
      <form onSubmit={handleFormSubmit}>
        <HashInput
          hashInput={hashInput}
          handleHashInputOnChange={handleHashInputOnChange}
          clearHashInput={clearHashInput}
        />
        <hr/>
        <GithubInput
          githubInput={githubInput}
          handleGithubOnChange={handleGithubOnChange}
          clearGithubInput={clearGithubInput}
          />
        <hr/>
        <StringFileInput
          handleFileOnChange={handleFileOnChange}
          clearFileInput={clearFileInput}
          />
        <hr/>
        <ScaleSelect
          isChecked={isChecked}
          handleCheckedOnChange={handleCheckedOnChange}
        />
        <TempoInput/>
        <Play/>
        <ShowSHA/>
      </form>
    </>
  );
}

export default App;
