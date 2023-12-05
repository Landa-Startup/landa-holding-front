import React from 'react';

export default function PartnerMembershipTitle(
  {lang} : {lang: string}
) {

  return (
    <>
      <div className="text-center">
        <p className="font-serif text-2xl pt-8 mb-20 tracking-wide md:pt-8 md:text-5xl lg:text-6xl xl:text-7xl ">
          {lang === "en" ? "Business Partner Form" : "فرم شریک کاری"}
        </p>
      </div>
      <div>
        <p className="text-xl mb-4 lg:text-2xl">{lang === "en" ? "Personal Information" : "اطلاعات شخصی"}</p>
      </div>
      <div>
        <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
      </div>
    </>
  );
}
