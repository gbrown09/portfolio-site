import Image from "next/image";
import path from "path";
import { promises as fs } from "fs";
import Chip from "./Chip";

export default async function ProjectCard() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const imageDirectory ="/img/"
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/projects.json", "utf8");
  const data = JSON.parse(fileContents);

  return (
    <>
      {data.map(async (project: Project) => (
        <div key={project.title} className="bg-neutral h-full mb-12 lg:mb-2">
          <div
            className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">
            {/*<img src={todo.src} className="w-full" />*/}
            <Image
              src={imageDirectory+project.srcPath}
              className="w-full"
              width={650}
              height={300}
              alt="image"
              style={{ objectFit: "fill" }}></Image>
            <a href={project.url} target="_blank">
              <div className="mask absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          <h5 className="text-lg text-center font-bold mb-3">{project.title}</h5>
          <div className="mb-3 flex flex-wrap items-center justify-center">
            {project.skills.map((skill: Skill) => (
              <Chip key={skill.name} content={skill.name}></Chip>
            ))}
          </div>
          <p className="pl-2">{project.description}</p>
        </div>
      ))}
    </>
  );
}
