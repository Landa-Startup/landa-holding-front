export default function UlList({list, style1, style2, style3} : {list: string[], style1:string, style2:string, style3:string}) {
  return (
    <div className={`${style1}`}>
        <ul className={`text-black text-[14px] font-normal list-disc pl-5 font-barlow ${style2}`}>
            {list.map((item, index) => (
                <li className={`${style3}`}></li>
            ))}
        </ul>
    </div>
  );
}
