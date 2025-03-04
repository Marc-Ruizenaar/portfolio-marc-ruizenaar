export default function LineStyling() {
    return (
      <>
        <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
        <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
        <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>
      </>
    );
  }
  