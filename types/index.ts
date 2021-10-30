export type Story = {
  pictureUrl: string;
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  avatar: string;
  stories: Story[];
};
