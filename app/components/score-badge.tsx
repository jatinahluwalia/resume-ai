import clsx from "clsx";
import React from "react";
import { twMerge } from "tw-merge";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  const badgeColor =
    score > 69
      ? "bg-badge-green text-green-600"
      : score < 49
        ? "bg-badge-yellow text-yellow-600"
        : "bg-badge-red text-red-600";

  const badgeText =
    score > 69 ? "Strong" : score > 49 ? "Good Start" : "Needs Work";
  return (
    <div className={twMerge(clsx("px-3 py-1 rounded-full", badgeColor))}>
      <p className="text-sm font-medium">{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;
