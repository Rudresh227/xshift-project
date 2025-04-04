import KLrahul from '/src/assets/avatar/klrahul.jpeg';
import HP from '/src/assets/avatar/hp.jpeg';
import BCCI from '/src/assets/avatar/bcci.jpeg';
import Elon from '/src/assets/avatar/elon.jpeg';
import Bumrah from '/src/assets/avatar/bumrah.jpeg';
import VK from '/src/assets/avatar/vk.jpeg';


export const dummyFeed = [
    {
      id: 1,
      username: "Rudresh Vasanth",
      handle: "@rudresh",
      avatar: HP,
      content: "Excited to build this Twitter Clone! 🚀",
      image: "/src/assets/feed1.jpg",
      likes: 120,
      comments: 25,
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
    },
    {
      id: 2,
      username: "Virat Kohli",
      handle: "@vk18",
      avatar: VK,
      content: "Another day, another century! 💯🔥",
      image: "/src/assets/feed2.jpg",
      likes: 5000,
      comments: 1200,
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
    },
    {
      id: 3,
      username: "Elon Musk",
      handle: "@elonmusk",
      avatar: Elon,
      content: "Tesla AI Day is coming soon! 🧠⚡",
      image: "",
      likes: 9000,
      comments: 2500,
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
    }
  ];
  
  