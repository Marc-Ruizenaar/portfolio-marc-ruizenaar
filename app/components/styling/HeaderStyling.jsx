export default function HeaderStyling() {
  return (
    <>
      <div className="topBorder absolute left-0 top-0 hidden h-[0.2rem] w-full md:block"></div>
      <div className="topcorners absolute left-[-2px] top-[-3px] z-10 hidden h-5 w-5 md:block"></div>
      <div className="topcorners absolute right-[-2px] top-[-3px] z-10 hidden h-5 w-5 rotate-90 md:block"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
    </>
  );
}
