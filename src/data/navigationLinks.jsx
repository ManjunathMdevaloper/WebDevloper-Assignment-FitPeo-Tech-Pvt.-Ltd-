import {
    LayoutDashboard,
    Clock,
    Calendar,
    Stethoscope,
    BarChart3,
    FlaskConical,
    MessageCircle,
    Headphones,
    Settings,
  } from 'lucide-react';
  
  const navigationLinks = [
    {
      section: 'General',
      links: [
        { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
        { label: 'History', icon: <Clock size={18} /> },
        { label: 'Calendar', icon: <Calendar size={18} /> },
        { label: 'Appointments', icon: <Stethoscope size={18} /> },
        { label: 'Statistics', icon: <BarChart3 size={18} /> },
        { label: 'Tests', icon: <FlaskConical size={18} /> },
      ],
    },
    {
      section: 'Tools',
      links: [
        { label: 'Chat', icon: <MessageCircle size={18} /> },
        { label: 'Support', icon: <Headphones size={18} /> },
        { label: 'Setting', icon: <Settings size={18} /> },
      ],
    },
  ];
  
  export default navigationLinks;
  