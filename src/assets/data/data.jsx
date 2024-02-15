import dashIcon from "../../assets/dashboard_images/component.png";
import business from "../../assets/dashboard_images/business_center.png";
import inactive from "../../assets/dashboard_images/Inactive_Icons.png";
import assistant from "../../assets/dashboard_images/AIassistant.png";
import settings from "../../assets/dashboard_images/settings.png";
import support from "../../assets/dashboard_images/support_agent.png";
import logout from "../../assets/dashboard_images/logout.png";
//images for the first Dashboard
import thrive from "../../assets/dashboard_images/thriveframe.png";
import framea from "../../assets/dashboard_images/framea.png";
import frameb from "../../assets/dashboard_images/frameb.png";
import framec from "../../assets/dashboard_images/framec.png";
//images for project component
import framed from "../../assets/project_images/framed.png";
import teampics from "../../assets/project_images/frameE.png";
import ProgressBar from "../../components/dashboard/progressbar/ProgressBar";
//Tasks today images
import hamburger from "../../assets/dashboard_images/calendar_icon.png";
import notification from "../../assets/dashboard_images/reminder.png";
//Task Schedule Data
import team from "../../assets/dashboard_images/groups.png";
export const sideBarData = [
  {
    id: 1,
    image: dashIcon,
    altUrl: "Dashboard icon",
    text: "Dashboard",
  },
  {
    id: 2,
    image: business,
    altUrl: "Poject icon",
    text: "Projects",
  },
  {
    id: 3,
    image: inactive,
    alturl: "Calendar icon",
    text: "Calendar",
  },
  {
    id: 4,
    image: assistant,
    altUrl: "assistant icon",
    text: "AI assistant",
  },
  {
    id: 5,
    image: settings,
    altUrl: "settings icon",
    text: "Settings",
  },
];
export const sideBarData2 = [
  {
    id: 1,
    image: support,
    altUrl: "support icon",
    text: "Support",
  },
  {
    id: 2,
    image: logout,
    altUrl: "sign-out icon",
    text: "Log Out",
  },
];
export const DashboardData = [
  {
    id: 1,
    icon: thrive,
    altUrl: "thrive icon",
    header: "All tasks",
    text: "In progress",
  },
  {
    id: 2,
    icon: framea,
    altUrl: "icon",
    header: "In Progress",
    text: "10 Project",
  },
  {
    id: 3,
    icon: frameb,
    altUrl: "icon",
    header: "Completed",
    text: "28 Projects",
  },
  {
    id: 4,
    icon: framec,
    altUrl: "icon",
    header: "Overdue",
    text: "12 Projects",
  },
];
export const projectData = [
  {
    id: 1,
    icon: framed,
    header: "Meet with Clients",
    text: "Prepare a progress report and send the meeting link",
    component: <ProgressBar value={70} />,
    team: teampics,
    time: "2 days left",
  },
  {
    id: 2,
    icon: framed,
    header: "Write an article",
    text: "Article and blog write-ups for website.",
    component: <ProgressBar value={50} />,
    team: teampics,
    time: "1 hour left",
  },
  {
    id: 3,
    icon: framed,
    header: "Product design",
    text: "Design a mobile app for a fintech company",
    component: <ProgressBar value={60} />,
    team: teampics,
    time: "3 weeks left",
  },
];
export const tasksData = [
  {
    id: 1,
    icon: hamburger,
    altUrl: "icon",
    header: "Time",
    time: "3:00pm",
    header2: "Hold training with TAP programmers",
    text: "https//zoom.link.us/ng",
    image: notification,
    rem: "reminder",
  },
  {
    id: 2,
    icon: hamburger,
    altUrl: "icon",
    header: "Time",
    time: "12:00am",
    header2: "Reading a book on public speaking",
    text: "Complete 500 pages before noon",
    image: notification,
    rem: "reminder",
  },
];
export const taskScheduleData = [
  {
    id: 1,
    image: team,
    header: "Meet with devs",
    location: "Online 03:00 pm",
  },
  {
    id: 2,
    image: team,
    header: "Meet with devs",
    location: "Online 03:00 pm",
  },
  {
    id: 3,
    image: team,
    header: "Meet with devs",
    location: "Online 03:00 pm",
  },
];
