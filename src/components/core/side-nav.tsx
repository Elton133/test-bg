'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { ArrowRightToLine } from 'lucide-react';
import NavLink from '@components/ui/nav-link';
import useNavItems from '@hooks/use-nav-items';
import { useNoteSidePanel } from '@/context/note-side-panel-context';
import { useSideBar } from '@/context/side-bar-context';

const sideBarVariants = {
  close: {
    minWidth: '96px',
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 500,
      damping: 30,
      duration: 0.5,
    },
  },
  open: {
    minWidth: '190px',
    transition: {
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 500,
      duration: 0.5,
      damping: 30,
    },
  },
};

const SideBar = () => {
  const { openSideBar, toggleSideBar } = useSideBar();
  const controls = useAnimationControls();
  const navItems = useNavItems();
  const { openSidePanel } = useNoteSidePanel();

  useEffect(() => {
    if (openSideBar) {
      controls.start('open');
    } else {
      controls.start('close');
    }
  }, [controls, openSideBar]);

  return (
    <motion.aside
      className={
        'bg- shadow-d hidden sm:block min-h-[calc(100vh_-_80px)] h-full w-24'
      }
      animate={controls}
      variants={sideBarVariants}
    >
      <motion.div
        className={cn(
          'flex flex-col items-center fixed z-20 shadow-md h-full px-5 py-12 gap-6 bg-white overflow-y-scroll no-scrollbar',
          openSideBar && 'items-start px-4'
        )}
      >
        {!openSidePanel && (
          <div
            className={cn(
              'rounded-full border flex justify-center items-center min-w-12 min-h-12 animate-fade-up',
              {
                'place-self-end': openSideBar,
              }
            )}
          >
            <motion.button
              initial={false}
              animate={{
                rotateY: openSideBar ? 180 : 0,
                transition: {
                  duration: 0.5,
                },
              }}
              onClick={toggleSideBar}
            >
              <ArrowRightToLine size={24} color={'#706F66 '} />
            </motion.button>
          </div>
        )}

        <ul
          className={cn('flex flex-col gap-6 mb-12', {
            'w-full': openSideBar,
          })}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className={cn(
                'hover:bg-[#E6EBEA] h-14 min-w-14 flex flex-col justify-center rounded-[12px] cursor-pointer',
                {
                  'bg-[#DAE0E0]': item.isFocused,
                  'bg-white': !item.isFocused,
                  'items-center': !openSideBar,
                  'px-4': openSideBar,
                }
              )}
            >
              <NavLink
                name={item.name}
                url={item.url}
                showTitle={openSideBar}
              >
                {item.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.aside>
  );
};

export default SideBar;
