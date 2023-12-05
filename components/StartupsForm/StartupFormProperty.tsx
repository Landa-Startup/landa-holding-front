import TextArea from '../common/TextArea';

export default function StartupFormProperty({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="bg-[#222222CC]">
            <p className="mb-3 w-[310px] border-b py-5 pl-10 text-3xl text-white md:w-[550px] lg:w-[450px] xl:w-[650px]">
              Property
            </p>
            <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
          </div>

          <TextArea
            title="How much revenue has your startup made since its inception?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="startupRevenue"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much is your monthly income?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="monthlyIncome"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        {/* <div className="col-span-2">
          <TextArea
            title="What is your current interest rate?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentInterestRate"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div> */}
        <div className="col-span-2">
          <TextArea
            title="How much current funding did you raise before starting your business?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="currentRaisedFunding"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much capital do you need to start your project?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="neededCapital"
            patternMessage=""
            patternValue=""
            required="this is required!"
          />
        </div>
      </div>
    </>
  );
}
