import React from 'react';
import Button from '../common/Button';

export default function FeaturesCards({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col bg-white  md:w-[580px] p-8">
      <span className="font-gilda text-2xl text-primary">{title}</span>
      <p className="font-barlow text-base leading-7">{description}</p>
      <Button
        goto="/"
        size="not"
        text="Register"
        addedClass="self-end"
        bgColor="Primary"
      />
    </div>
  );
}
