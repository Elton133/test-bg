import { IAnnouncement } from "@/types/course";
import AnnouncementItem from "./announcement-item";
import { useEffect, useRef } from "react";

const AnnouncementPanel = ({
    announcements,
    onClose,
    notificationIconRef
  }: {
    announcements: IAnnouncement[];
    onClose: () => void;
    notificationIconRef: React.RefObject<HTMLDivElement>;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          ref.current &&
          !ref.current.contains(event.target as Node)
          &&
          notificationIconRef.current &&
          !notificationIconRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, onClose, notificationIconRef]);
  
  
    return (
      <div
        className="fixed bg-white top-[56px] md:top-[88px] shadow-sm shadow-brand-yellow-primary rounded-lg right-2 h-auto max-w-[280px] md:max-w-[400px] w-full z-30 animate-fade-down animate-duration-200 md:max-h-[400px] max-h-[250px] overflow-scroll"
        ref={ref}
      >
        {/* <div className='flex justify-between items-center p-4 border-b border-[#D3D5D6]'>
          <h3 className='text-xs font-bold'>Announcements</h3>
          <button className='text-muted ' onClick={onClose}>Close</button>
        </div> */}
        <div className="p-4 v-stack">
          {announcements &&
            announcements.map((announcement) => (
              <div key={announcement?.id} className="shadow-sm">
                <AnnouncementItem announcement={announcement} cb={onClose} />
              </div>
            ))}
        </div>
      </div>
    );
  };

export default AnnouncementPanel;
