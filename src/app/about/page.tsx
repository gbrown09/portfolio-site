import { promises as fs } from 'fs';
import path from "path";
import Chip from "../compontents/Chip";

export default async function About() {
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/skills.json', 'utf8');
  const data = JSON.parse(fileContents);
  
  const content = (
    <>
      <div className="flex flex-auto mt-6 m-auto max-w-[90%] h-screen">
        <div id="aboutSection" className="h-full min-w-[80%] rounded-lg shadow-lg m-auto min-h-80 max-h-[60rem] bg-slate-100">
          <div className="flex place-content-center">
            <h2 className="m-auto mt-8 text-7xl">About Me</h2>
          </div>
          <div className="grid grid-cols-2 mt-6">
            <div>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center">
                THis is a test
              </p>
            </div>
            <div className="text-center px-56">
              <h1>Skills</h1>
              <div className='grid grid-cols-4'>
              {data.map((skill: Skill) => (
                <Chip key={skill.name} content={skill.name}></Chip>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return content;
}

