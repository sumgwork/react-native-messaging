const userImages = [
  "https://i.pravatar.cc/300?img=1",
  "https://i.pravatar.cc/300?img=2",
  "https://i.pravatar.cc/300?img=3",
  "https://i.pravatar.cc/300?img=4",
  "https://i.pravatar.cc/300?img=5",
  "https://i.pravatar.cc/300?img=6",
  "https://i.pravatar.cc/300?img=7",
  "https://i.pravatar.cc/300?img=8",
  "https://i.pravatar.cc/300?img=9",
  "https://i.pravatar.cc/300?img=10",
  "https://i.pravatar.cc/300?img=11",
  "https://i.pravatar.cc/300?img=12",
];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * userImages.length);
  return userImages[randomIndex];
};
