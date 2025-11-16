
import React, { useState } from 'react';
import { TesterConfig } from '../App';

// Icons
const RulerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 3H3C2.45 3 2 3.45 2 4V6C2 6.55 2.45 7 3 7H21C21.55 7 22 6.55 22 6V4C22 3.45 21.55 3 21 3ZM8 6H6V5H8V6ZM12 6H10V5H12V6ZM16 6H14V5H16V6ZM21 17H3C2.45 17 2 17.45 2 18V20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20V18C22 17.45 21.55 17 21 17ZM8 19H6V18H8V19ZM12 19H10V18H12V19ZM16 19H14V18H16V19Z" />
        <path d="M3,9H21V15H3V9M5,10V11H7V10H5M5,12V13H7V12H5M9,10V11H11V10H9M9,12V13H11V12H9M13,10V11H15V10H13M13,12V13H15V12H13M17,10V11H19V10H17M17,12V13H19V12H17Z"/>
    </svg>
);

const DesktopIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" />
    </svg>
);

const TabletIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 18H7v-1h10v1zm-7-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-4H5V4h14v10z" />
    </svg>
);

const MobileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7-4H5V4h14v12z" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
);

interface ResponsiveTesterProps {
  testerConfig: TesterConfig;
  setTesterConfig: React.Dispatch<React.SetStateAction<TesterConfig>>;
}

const devices = [
  { name: 'Mobile', icon: MobileIcon, width: '375px' },
  { name: 'Tablet', icon: TabletIcon, width: '768px' },
  { name: 'Desktop', icon: DesktopIcon, width: '1280px' },
];

const ResponsiveTester: React.FC<ResponsiveTesterProps> = ({ testerConfig, setTesterConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDevice, setActiveDevice] = useState<string | null>(null);

  const handleDeviceClick = (device: { name: string; width: string; }) => {
    setActiveDevice(device.name);
    setTesterConfig({
      enabled: true,
      width: device.width,
    });
  };

  const handleReset = () => {
    setActiveDevice(null);
    setTesterConfig({
      enabled: false,
      width: '100%',
    });
    setIsOpen(false);
  };
  
  const fabStyle = "fixed bottom-5 right-5 z-[100] bg-amber-500 text-white p-4 rounded-full shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-transform transform hover:scale-110";

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className={fabStyle} aria-label="Open responsive tester">
        <RulerIcon className="w-7 h-7" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 flex justify-center" role="toolbar" aria-label="Responsive Design Tester">
      <div className="bg-slate-800/90 backdrop-blur-sm text-white rounded-lg shadow-2xl p-3 flex items-center gap-2 sm:gap-4 animate-bounce-in">
        <span className="font-semibold text-sm mr-2 hidden sm:block">Test View:</span>
        {devices.map((device) => (
          <button
            key={device.name}
            onClick={() => handleDeviceClick(device)}
            className={`flex items-center gap-2 px-3 py-2 sm:px-4 rounded-md text-sm transition-colors ${activeDevice === device.name ? 'bg-amber-500 text-white' : 'bg-slate-700 hover:bg-slate-600'}`}
            aria-pressed={activeDevice === device.name}
            aria-label={`Switch to ${device.name} view (${device.width})`}
          >
            <device.icon className="w-5 h-5" />
            <span className="hidden md:inline">{device.name}</span>
          </button>
        ))}
        <button
          onClick={handleReset}
          className="px-3 py-2 sm:px-4 rounded-md text-sm transition-colors bg-slate-700 hover:bg-slate-600"
          aria-label="Reset to full screen view"
        >
          Reset
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-full transition-colors bg-slate-700 hover:bg-red-500 ml-2 sm:ml-4"
          aria-label="Close responsive tester"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveTester;
