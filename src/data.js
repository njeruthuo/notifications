import markWeber from "./images/avatar-mark-webber.webp";
import angelaGray from "./images/avatar-angela-gray.webp";
import jacobThompson from "./images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./images/avatar-kimberly-smith.webp";
import nathanPeterson from "./images/avatar-nathan-peterson.webp";
import annaKim from "./images/avatar-anna-kim.webp";
import chessImg from "./images/image-chess.webp";

export const notifications = [
  {
    img: markWeber,
    name: "Mark Webber",
    action: "reacted to your recent post",
    subject: "My first tournament today!",
    time: "1m ago",
    isNew: true,
  },
  {
    img: angelaGray,
    name: "Angela Gray",
    action: "followed you",
    time: "5m ago",
    isNew: true,
  },
  {
    img: jacobThompson,
    name: "Jacob Thompson",
    action: "has joined your group",
    subject: "Chess Club",
    time: "1 day ago",
    isNew: true,
  },
  {
    img: rizkyHasanuddin,
    name: "Rizky Hasanuddin",
    action: "sent you",
    subject: "a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    isNew: false,
  },
  {
    img: kimberlySmith,
    name: "Kimberly Smith",
    action: "commented",
    subject: "on your picture",
    time: "1 week ago",
    isNew: false,
    extraImg: chessImg,
  },
  {
    img: nathanPeterson,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    subject: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    isNew: false,
  },
  {
    img: annaKim,
    name: "Anna Kim",
    action: "left the group",
    subject: "Chess Club",
    time: "2 weeks ago",
    isNew: false,
  },
];
