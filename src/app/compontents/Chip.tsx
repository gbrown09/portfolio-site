import React from "react";

type Props = {
  content: string;
};

export default function Chip({ content }: Props) {
  return (
    <h4 className="mb-2.5 m-auto text-2xl font-medium leading-tight mx-1">
      <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
        {content}
      </span>
    </h4>
  );
}
