import { FaLanguage, FaAccessibleIcon } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";
import {  BsFillBookmarkPlusFill } from "react-icons/bs";

export const featureList = [
  {
    id: 1,
    icon: <BsFillBookmarkPlusFill color="#0a1930" size={22} />,
    heading: "Bookmark your favourite",
    text: "Now you can bookmark your favourite rooms or mess and can book it later whenever you want.",
  },
  {
    id: 2,
    icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
    heading: "Stay Connected",
    text: " Stay connected with our app to get information about the lastest rooms or mess available in your city.",
  },
  {
    id: 3,
    icon: <FaLanguage color="#0a1930" size={22} />,
    heading: "Translation in language",
    text: "Do not worry about language barrier because here we will provide you with mulitilingual support.",
  },
  {
    id: 4,
    icon: <FaAccessibleIcon color="#0a1930" size={22} />,
    heading: "Designed for you",
    text: "Book your rooms and mess as per your convenience by checking out the facilities available.",
  },
  {
    id: 5,
    icon: <GrContactInfo color="#0a1930" size={22} />,
    heading: "Instant contact feature",
    text: "You can freely contact and interact with your customer's nd owner's according to your feasibility.",
  }
];