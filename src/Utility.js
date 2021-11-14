import { v4 as uuidv4 } from "uuid";

const list = () => {
  return [
    {
      name: "Conflicted",
      artist: "Hanz",
      active: true,
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24642",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",
    },
    {
      name: "Perfect Storm",
      artist: "Aviino",
      active: false,
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23057",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
    },
    {
      name: "Transparent",
      artist: "Teddy Roxpin",
      active: false,
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23341",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
    },
  ];
};

export default list;
