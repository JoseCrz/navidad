import type { Profile } from "types";

import esferinImage from "public/esferin.jpg";
import arbolinImage from "public/arbolin.jpg";
import estrellinImage from "public/estrellin.jpg";

export const profiles: Profile[] = [
  {
    name: "Esferin",
    avatar: esferinImage,
    stories: [
      {
        pictureUrl: "/story-photos/story-1.jpg",
        title: "Esferin First Story",
        description:
          "Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius lorem.",
      },
      {
        pictureUrl: "/story-photos/story-2.jpg",
        title: "Esferin Second Story",
        description:
          "Pellentesque tempus tincidunt tellus a consectetur. Duis non metus elit. Vivamus euismod magna nisl, eget rhoncus massa varius dapibus.",
      },
      {
        pictureUrl: "/story-photos/story-3.jpg",
        title: "Esferin Third Story",
        description:
          "Ut pretium lacus in eros congue, ac accumsan nulla accumsan. Vivamus accumsan euismod risus",
      },
      {
        pictureUrl: "/story-photos/story-4.jpg",
        title: "Fourth Story",
        description:
          "eu tempor sem accumsan vel. Donec tincidunt maximus consequat. Aliquam a enim purus.",
      },
    ],
  },
  {
    name: "Arbolin",
    avatar: arbolinImage,
    stories: [
      {
        pictureUrl: "/story-photos/story-5.jpg",
        title: "Arbolin First Story",
        description:
          "Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius lorem.",
      },
      {
        pictureUrl: "/story-photos/story-6.jpg",
        title: "Arbolin Second Story",
        description:
          "Pellentesque tempus tincidunt tellus a consectetur. Duis non metus elit. Vivamus euismod magna nisl, eget rhoncus massa varius dapibus.",
      },
      {
        pictureUrl: "/story-photos/story-1.jpg",
        title: "Arbolin Third Story",
        description:
          "Ut pretium lacus in eros congue, ac accumsan nulla accumsan. Vivamus accumsan euismod risus",
      },
    ],
  },
  {
    name: "Estrellin",
    avatar: estrellinImage,
    stories: [
      {
        pictureUrl: "/story-photos/story-1.jpg",
        title: "Estrellin First Story",
        description:
          "Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius lorem.",
      },
      {
        pictureUrl: "/story-photos/story-2.jpg",
        title: "Estrellin Second Story",
        description:
          "Pellentesque tempus tincidunt tellus a consectetur. Duis non metus elit. Vivamus euismod magna nisl, eget rhoncus massa varius dapibus.",
      },
      {
        pictureUrl: "/story-photos/story-3.jpg",
        title: "Estrellin Third Story",
        description:
          "Ut pretium lacus in eros congue, ac accumsan nulla accumsan. Vivamus accumsan euismod risus",
      },
      {
        pictureUrl: "/story-photos/story-4.jpg",
        title: "Fourth Story",
        description:
          "eu tempor sem accumsan vel. Donec tincidunt maximus consequat. Aliquam a enim purus.",
      },
    ],
  },
];
