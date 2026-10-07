import type { Metadata } from "next";
import { ProjectView } from "@/components/ProjectView";
import { getProject } from "@/lib/content";

const project = getProject("studyforge");

export const metadata: Metadata = {
  title: project.name,
  description: project.metaDescription,
};

export default function StudyForgePage() {
  return (
    <main id="main">
      <ProjectView project={project} />
    </main>
  );
}
