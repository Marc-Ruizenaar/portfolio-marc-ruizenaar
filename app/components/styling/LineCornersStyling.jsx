export default function LineCornersStyling() {
  return (
    <>
      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="topcorners absolute left-[-2px] bottom-[-3px] z-10 hidden h-5 w-5 rotate-[-90deg] md:block"></div>
      <div className="topcorners absolute right-[-2px] bottom-[-3px] z-10 hidden h-5 w-5 rotate-180  md:block"></div>
    </>
  );
}
