export type Story = {
  picture: StaticImageData;
  title: string;
  description: string;
  alt: string;
};

export type Profile = {
  name: string;
  avatar: StaticImageData;
  stories: Story[];
};
