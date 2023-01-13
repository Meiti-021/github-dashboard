import { HiCode } from "react-icons/hi";
import { GoRepo } from "react-icons/go";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";

const AccountData = [
  {
    title: "پروژه ها",
    icon: <GoRepo />,
    content: "public_repos",
  },
  {
    title: "دنبال کننده ها",
    icon: <SlUserFollow />,
    content: "followers",
  },
  {
    title: "دنبال شونده ها",
    icon: <SlUserFollowing />,
    content: "following",
  },
  {
    title: "چکیده ها",
    icon: <HiCode />,
    content: "public_gists",
  },
];

export default AccountData;
