import type { Profile } from "types";

//Pictures
import mari from "public/mari.png";
import esferin from "public/esferin.png";
import doggy from "public/doggy.png";

// Avatars
import mariAvatar from "public/mari-avatar.png";
import esferinAvatar from "public/esferin-avatar.png";
import doggyAvatar from "public/doggy-avatar.png";

// Stories
import mariStory1 from "public/story-photos/mari-story-1.png";
import mariStory2 from "public/story-photos/mari-story-2.png";
import mariStory3 from "public/story-photos/mari-story-3.png";
import mariStory4 from "public/story-photos/mari-story-4.png";

import esferinStory1 from "public/story-photos/esferin-story-1.png";
import esferinStory2 from "public/story-photos/esferin-story-2.png";
import esferinStory3 from "public/story-photos/esferin-story-3.png";
import esferinStory4 from "public/story-photos/esferin-story-4.png";

import doggyStory1 from "public/story-photos/doggy-story-1.png";
import doggyStory2 from "public/story-photos/doggy-story-2.png";
import doggyStory3 from "public/story-photos/doggy-story-3.png";
import doggyStory4 from "public/story-photos/doggy-story-4.png";

export const profiles: Profile[] = [
  {
    name: "Mari",
    picture: mari,
    avatar: mariAvatar,
    description:
      "Es una niña muy inteligente y con un espíritu enorme. Una noche llena de inspiración escribe algo muy misteriosa. ¿Quieres saber qué es?",
    stories: [
      { id: "mariStory1", picture: mariStory1 },
      { id: "mariStory2", picture: mariStory2 },
      { id: "mariStory3", picture: mariStory3 },
      { id: "mariStory4", picture: mariStory4 },
    ],
  },
  {
    name: "Esferín",
    picture: esferin,
    avatar: esferinAvatar,
    description:
      "Si en verdad tienes un espíritu navideño, Esferín te guiará a cumplir tus sueños. Descubre junto a él El Secreto de la Navidad.",
    stories: [
      { id: "esferinStory1", picture: esferinStory1 },
      { id: "esferinStory2", picture: esferinStory2 },
      { id: "esferinStory3", picture: esferinStory3 },
      { id: "esferinStory4", picture: esferinStory4 },
    ],
  },
  {
    name: "Doggy",
    picture: doggy,
    avatar: doggyAvatar,
    description:
      "Si buscas un verdadero compañero, aquí lo tienes.Un perrito que busca compañía para compartir toda la alegría y amor que tiene para dar. Conoce su historia.",
    stories: [
      { id: "doggyStory1", picture: doggyStory1 },
      { id: "doggyStory2", picture: doggyStory2 },
      { id: "doggyStory3", picture: doggyStory3 },
      { id: "doggyStory4", picture: doggyStory4 },
    ],
  },
];
