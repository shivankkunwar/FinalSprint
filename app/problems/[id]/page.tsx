import React from "react";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { question } from "@/types";

export default function ProblemPage({ question }: { question: question }) {
    const {title, difficulty, type, tags, Code} = question
  return (
    <div className="bg-neutral-900 w-full h-full">
      <div className="bg-neutral-900 rounded-lg border-b border-neutral-200/20 p-6 mb-6">
        <div className="flex items-center mb-4">
          <button className="">
            <ArrowLeft className="h-6 w-6 text-gray-300 hover:text-white" />
          </button>
          <Breadcrumb>
            <BreadcrumbList className="px-2 text-gray-300 ">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="hover:text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/problems" className="hover:text-white">
                  Problems
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-200">
                  {title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-xl font-bold text-gray-300 mb-2">
          {title}
        </h1>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
            {difficulty}
          </span>
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
            {type}
          </span>
          {tags.map((tag, i) => {
            return (
              <span className="px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded-full">
                {tag}
              </span>
            );
          })}
        </div>

      </div>
      <div>
        {<Code/>}
      </div>
    </div>
  );
}
