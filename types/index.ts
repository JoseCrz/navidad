export type Story = {
  id: string;
  picture: StaticImageData;
};

export type Profile = {
  name: string;
  avatar: StaticImageData;
  picture: StaticImageData;
  description: string;
  stories: Story[];
};
