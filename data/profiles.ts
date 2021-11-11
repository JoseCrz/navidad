import type { Profile } from "types";

//Pictures
import mari from "public/mari.png";
import esferin from "public/esferin.png";
import doggy from "public/doggy.png";

// Avatars
import esferinImage from "public/esferin.jpg";
import arbolinImage from "public/arbolin.jpg";
import estrellinImage from "public/estrellin.jpg";

// Stories
import storyImage1 from "public/story-photos/story-1.jpg";
import storyImage2 from "public/story-photos/story-2.jpg";
import storyImage3 from "public/story-photos/story-3.jpg";
import storyImage4 from "public/story-photos/story-4.jpg";
import storyImage5 from "public/story-photos/story-5.jpg";
import storyImage6 from "public/story-photos/story-6.jpg";
import storyImage7 from "public/story-photos/story-7.jpg";
import storyImage8 from "public/story-photos/story-8.jpg";
import storyImage9 from "public/story-photos/story-9.jpg";
import storyImage10 from "public/story-photos/story-10.jpg";
import storyImage11 from "public/story-photos/story-11.jpg";

export const profiles: Profile[] = [
  {
    name: "Mari",
    picture: mari,
    avatar: esferinImage,
    description:
      "Es una niña muy inteligente y con un espíritu enorme. Una noche llena de inspiración escribe algo muy misteriosa. ¿Quieres saber qué es?",
    stories: [
      {
        picture: storyImage1,
        title: "Esferin First Story",
        alt: "pending",
        description:
          "Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius lorem.",
      },
      {
        picture: storyImage2,
        title: "Esferin Second Story",
        alt: "pending",
        description:
          "Pellentesque tempus tincidunt tellus a consectetur. Duis non metus elit. Vivamus euismod magna nisl, eget rhoncus massa varius dapibus.",
      },
      {
        picture: storyImage3,
        title: "Esferin Third Story",
        alt: "pending",
        description:
          "Ut pretium lacus in eros congue, ac accumsan nulla accumsan. Vivamus accumsan euismod risus",
      },
      {
        picture: storyImage4,
        title: "Fourth Story",
        alt: "pending",
        description:
          "eu tempor sem accumsan vel. Donec tincidunt maximus consequat. Aliquam a enim purus.",
      },
    ],
  },
  {
    name: "Esferín",
    picture: esferin,
    avatar: arbolinImage,
    description:
      "Si en verdad tienes un espíritu navideño, Esferín te guiará a cumplir tus sueños. Descubre junto a él El Secreto de la Navidad.",
    stories: [
      {
        picture: storyImage5,
        title: "Arbolin First Story",
        alt: "pending",
        description:
          "Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius lorem.",
      },
      {
        picture: storyImage6,
        title: "Arbolin Second Story",
        alt: "pending",
        description:
          "Pellentesque tempus tincidunt tellus a consectetur. Duis non metus elit. Vivamus euismod magna nisl, eget rhoncus massa varius dapibus.",
      },
      {
        picture: storyImage7,
        title: "Arbolin Third Story",
        alt: "pending",
        description:
          "Ut pretium lacus in eros congue, ac accumsan nulla accumsan. Vivamus accumsan euismod risus",
      },
    ],
  },
  {
    name: "Doggy",
    picture: doggy,
    avatar: estrellinImage,
    description:
      "Si buscas un verdadero compañero, aquí lo tienes.Un perrito que busca compañía para compartir toda la alegría y amor que tiene para dar. Conoce su historia.",
    stories: [
      {
        picture: storyImage8,
        title: "Estrellin First Story",
        alt: "pending",
        description:
          "Aliquam lacinia ipsum lacus, eget rutrum sem eleifend vulputate. Cras vestibulum blandit sem, eu sagittis nibh bibendum nec. Duis at varius lorem.",
      },
      {
        picture: storyImage9,
        title: "Estrellin Second Story",
        alt: "pending",
        description:
          "Pellentesque tempus tincidunt tellus a consectetur. Duis non metus elit. Vivamus euismod magna nisl, eget rhoncus massa varius dapibus.",
      },
      {
        picture: storyImage10,
        title: "Estrellin Third Story",
        alt: "pending",
        description:
          "Ut pretium lacus in eros congue, ac accumsan nulla accumsan. Vivamus accumsan euismod risus",
      },
      {
        picture: storyImage11,
        title: "Fourth Story",
        alt: "pending",
        description:
          "eu tempor sem accumsan vel. Donec tincidunt maximus consequat. Aliquam a enim purus.",
      },
    ],
  },
];
