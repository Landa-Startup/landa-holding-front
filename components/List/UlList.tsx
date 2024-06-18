export default function UlList({
  list,
  style1,
  style2,
  style3
}: {
  list: string[];
  style1: string;
  style2: string;
  style3: string;
}) {
  return (
    <div className={`${style1}`}>
      <ul
        className={`list-disc px-10 md:pl-12 md:pr-0 font-barlow text-[14px] md:text-[16px] font-normal text-black ${style2}`}
      >
        {list.map((item, index) => (
          <li className={style3} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
