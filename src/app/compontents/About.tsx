import { promises as fs } from "fs";
import path from "path";
import Chip from "./Chip";

export default async function About() {
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/skills.json", "utf8");
  const data = JSON.parse(fileContents);

  return (
    <>
      <div className="flex m-auto max-w-[80%] h-[900px]">
        <div id="aboutSection" className="h-full min-w-[80%] m-auto max-h-[60rem]">
          <div className="flex place-content-center">
            <h2 className="m-auto text-7xl">About Me</h2>
          </div>
          <div className="grid gap-x-6 grid-cols-2 mt-6">
            <div className="text-center">
              <h1>About Garrett....</h1>
              <p className="mb-10 pt-3 mx-2 px-4 text-2xl text-center">
                Hi! I am a Software Engineer that builds both front-end and back-end applications
                along with some side projects for fun. My side projects include a couple of Discord
                bots written in Typescript along with APIs to help run them. You can see them in the
                Project section below which also includes repos to a couple of other apps.
              </p>
              <p className="mb-4 text-2xl mx-2 px-4 text-center">
                In my free time I like to work on my HomeLab which hosts this website along with
                several other applications. Most of these applications are running in Docker
                containers managed with Portainer, I eventually want to move to Kubernetes but we
                will see when that happens.
              </p>
            </div>
            <div className="text-center block">
              <h1>Skills</h1>
              <div className="pt-3 place-content-center flex flex-wrap">
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
}
