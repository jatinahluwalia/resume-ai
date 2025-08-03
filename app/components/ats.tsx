import clsx from "clsx";
import React from "react";
import { twMerge } from "tw-merge";
import { cn } from "~/lib/utils";

interface Suggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  const gradientClass =
    score > 69
      ? "from-green-100"
      : score > 49
        ? "from-yellow-100"
        : "from-red-100";

  const iconSrc =
    score > 69
      ? "/icons/ats-good.svg"
      : score > 49
        ? "/icons/ats-warning.svg"
        : "/icons/ats-bad.svg";

  const subtitle =
    score > 69 ? "Great Job!" : score > 49 ? "Good Start" : "Needs Improvement";
  return (
    <div
      className={cn(
        "rounded-2xl shadow-md w-full bg-gradient-to-b to-light-white p-8 flex flex-col gap-4",
        gradientClass
      )}
    >
      <div className="flex flex-row items-center gap-4">
        <img src={iconSrc} alt="ATS" className="size-10" />
        <p className="text-2xl font-semibold">ATS Score - {score}/100</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-xl">
          How well does your resume pass through Applicant Tracking Systems?
        </p>
        <p className="text-lg text-gray-500">
          Your resume was scanned like an employer would. Here's how it
          performed:
        </p>
        {suggestions.map((suggestion, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <img
              src={
                suggestion.type === "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
              alt="ATS"
              className="size-4"
            />
            <p
              className={cn(
                "text-lg",
                suggestion.type === "good" ? "text-green-700" : "text-amber-700"
              )}
            >
              {suggestion.tip}
            </p>
          </div>
        ))}
        <p className="text-lg text-gray-500">
          Want a better score? Improve your resume by applying the suggestions
          listed below.
        </p>
      </div>
    </div>
  );
};

export default ATS;
