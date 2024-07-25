import Speaker from "@components/icons/speaker";

export default function Announcement() {
  return (
    <section
      className={
        "max-w-[920px] mx-auto w-full min-h-[120px] rounded-xl border border-[#D3D5D6] py-6 px-3"
      }
    >
      <div className={"flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center gap-2 "}>
        <div className={"rounded-full bg-brand-yellow-secondary p-2"}>
          <Speaker size={24} />
        </div>
        <p className={"text-lg font-semibold"}>Announcements</p>
      </div>
      <div className={"w-full pt-8"}>
         {/*<EmptyAnnouncement />*/}

        <AnnouncementItem />
         <hr className={"my-2"} />
        <AnnouncementItem />
      </div>
    </section>
  );
}

const EmptyAnnouncement = () => {
  return (
    <div className={"w-full flex flex-col items-center"}>
      <Speaker className={"opacity-20"} size={80} />
      <p className={"text-muted text-sm"}>There are no new notifications</p>
    </div>
  );
};

const AnnouncementItem = () => {
  return (
    <div
      className={
        "min-h-[80px] h-full bg-[#D0EFE9] rounded-lg p-3 relative cursor-pointer"
      }
    >
      <svg
        className={"top-3 right-3 absolute animate-iteration-3 animate-pulse"}
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <circle cx="4" cy="4" r="4" fill="#E57A5A" />
      </svg>
      <div className={"flex flex-col gap-2"}>
        <p className={"text-sm font-bold"}>New course alert!</p>
        <p className={"text-xs text-muted"}>
          Civil Procedure was recently added!
        </p>
        <p className={"text-xs text-muted place-self-end"}>1 day ago</p>
      </div>
    </div>
  );
};
