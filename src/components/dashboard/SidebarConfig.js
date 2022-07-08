import { Icon, InlineIcon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/award-outline';
import listFill from '@iconify/icons-eva/list-fill';
import logoutFill from '@iconify/icons-eva/log-out-fill';
import peopleGroup from '@iconify/icons-eva/book-open-fill';
import personFill from '@iconify/icons-eva/person-fill';
import message from '@iconify/icons-eva/message-square-fill';
import { DoorBack } from '@mui/icons-material';
// import bannersFill from '@iconify/icons-eva/camera-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

export const config = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'Watchlist',
    path: '/dashboard/watchlist',
    icon: getIcon(listFill),
  },
  {
    title: 'Community',
    path: '/dashboard/community',
    icon: getIcon(peopleGroup),
  },
  {
    title: 'Nodes',
    path: '/dashboard/nodes',
    icon: getIcon(peopleFill),
  },
  // {
  //   title: 'Ambassadors',
  //   path: '/dashboard/ambassadors',
  //   icon: getIcon(peopleFill),
  // },
  {
    title: 'PROFILE',
    path: '/dashboard/profile',
    icon: getIcon(personFill),
  },
  {
    title: 'Huhu',
    path: '/dashboard/contact',
    icon: getIcon(message),
  },

  {
    title: 'Logout',
    path: '/logout',
    icon: getIcon(logoutFill),
  },
];
