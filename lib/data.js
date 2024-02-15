const pictures = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    artist: 'Noah Martin',
    type: 'photo',
    image_url: "/2a.webp",
    description:"Una imagen que captura un momento único, con una composición visualmente atractiva que resalta la belleza del instante."
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    artist: 'Lee Robinson',
    type: 'painting',
    image_url: "/3a.webp" ,
    description:"Una imagen que captura un momento único, con una composición visualmente atractiva que resalta la belleza del instante."
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    artist: 'Hector Simpson',
    type: 'painting',
    image_url: '/5a.webp',
    description:"Un lienzo vibrante que mezcla colores, creando una experiencia visual única."
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    artist: 'Manuel Martin',
    type: 'painting',
    image_url: '/4a.webp',
    description:"Una imagen que captura un momento único, con una composición visualmente atractiva que resalta la belleza del instante."
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    artist: 'Noah Martin',
    type: 'painting',
    image_url: '/5a.webp',
    description:"Un lienzo vibrante que mezcla colores, creando una experiencia visual única."
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    artist: 'Marina Vidal',
    type: 'photo',
    image_url: '/2a.webp',
    description:"Un lienzo vibrante que mezcla colores, creando una experiencia visual única."
  }
]

const users = [
  {
    id: "fb1b8cc6-ec7e-4f70-a1ef-5b0892c234d8",
    name: "Noah",
    email: "noah@gmail.com",
    password: "noah",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/24.jpg"
  },
  {
    id: "58f30b60-05f6-481e-8e8d-2cf09e342c02",
    name: "Manolo",
    email: "manolo@gmail.com",
    password: "manolo",
    avatar: "https://xsgames.co/randomusers/assets/avatars/male/53.jpg"
  },
  {
    id: "c6b3b9a4-2f3e-4b6e-8e0f-3e8e2a6c3e0c",
    name: "Marina",
    email: "marina@gmail.com",
    password: "marina",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/27.jpg"
  },
  {
    id: "3f5b9e5c-1b4b-4d3f-8f9e-4e8d2a6c3e0c",
    name: "Elisa",
    email: "elisa@gmail.com",
    password: "elisa",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/33.jpg"
  },
  {
    id: "6f5b9e5c-1b4b-4d3f-8f9e-4e8d2a6c3e0c",
    name: "Skye",
    email: "skye@gmail.com",
    password: "skye",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/9.jpg"
  }
]

const artists = [
  {
    id: "2a9ec7cf-5967-4572-b009-42b074f580d0",
    user_id: "fb1b8cc6-ec7e-4f70-a1ef-5b0892c234d8",
    nickname: "Noahita",
  },
  {
    id: "3808a5fd-eaa5-4c4a-90a5-ac1f34e4499e",
    user_id: "58f30b60-05f6-481e-8e8d-2cf09e342c02",
    nickname: "Lolo"
  },
  {
    id: "49a3d3a0-ce80-4bb2-96ce-da73fe283798",
    user_id: "c6b3b9a4-2f3e-4b6e-8e0f-3e8e2a6c3e0c",
    nickname: "Marineta"
  },
  {
    id: "7ea946b7-ddc8-43c0-b7fe-25e79c605010",
    user_id: "3f5b9e5c-1b4b-4d3f-8f9e-4e8d2a6c3e0c",
    nickname: "Eli"
  },
  {
    id: "52e07b0f-6e78-4752-a29f-629e8febfa5a",
    user_id: "6f5b9e5c-1b4b-4d3f-8f9e-4e8d2a6c3e0c",
    nickname: "Sky"
  }
]

const artworks = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    artist_id: "2a9ec7cf-5967-4572-b009-42b074f580d0",
    title: "Waves and Sun",
    description:"Sunset over the waves",
    price: 250,
    image_url:"https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3808a5fd-eaa5-4c4a-90a5-ac1f34e4499e",
    artist_id: "2a9ec7cf-5967-4572-b009-42b074f580d0",
    title: "Fox smiling",
    description:"Fox portrait with red and orange colours",
    price: 150,
    image_url:"https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "49a3d3a0-ce80-4bb2-96ce-da73fe283798",
    artist_id: "3808a5fd-eaa5-4c4a-90a5-ac1f34e4499e",
    title:"Small house at the forest",
    price: 800,
    description:"Small house with a family outside in a cloudy day",image_url:"https://images.unsplash.com/photo-1578301996581-bf7caec556c0?q=80&w=1351&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "7ea946b7-ddc8-43c0-b7fe-25e79c605010",
    artist_id: "49a3d3a0-ce80-4bb2-96ce-da73fe283798",
    title:"Sand and water",
    price: 100,
    description:"Sand and water mixed",
    image_url:"https://images.pexels.com/photos/3109793/pexels-photo-3109793.jpeg"
  },
  {
    id: "52e07b0f-6e78-4752-a29f-629e8febfa5a",
    artist_id: "49a3d3a0-ce80-4bb2-96ce-da73fe283798",
    title:"Sunset above the lake",
    price: 100,
    description:"Red sunset reflexed in a lake with the forest at background",
    image_url:"https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    artist_id: "7ea946b7-ddc8-43c0-b7fe-25e79c605010",
    title:"FlowerGirl",
    price: 300,
    description:"Girl with random flowes around her",
    image_url:"https://images.unsplash.com/photo-1598495494482-172d89ff078c?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    artist_id: "52e07b0f-6e78-4752-a29f-629e8febfa5a",
    title:"Sand and water",
    price: 500,
    description:"Sand and water mixed",
    image_url:"https://images.pexels.com/photos/3109793/pexels-photo-3109793.jpeg"
  }
]

const photos = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    artwork_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    style: "landscape",
  },
  {
    id: "52e07b0f-6e78-4752-a29f-629e8febfa5a",
    artwork_id: "52e07b0f-6e78-4752-a29f-629e8febfa5a",
    style: "landscape"
  },
]

const paintings = [
  {
    id: "3808a5fd-eaa5-4c4a-90a5-ac1f34e4499e",
    style: "realism",
    width: 600,
    height: 500,
    artwork_id: "3808a5fd-eaa5-4c4a-90a5-ac1f34e4499e",
  },
  {
    id: "49a3d3a0-ce80-4bb2-96ce-da73fe283798",
    style: "realism",
    width: 500,
    height: 700,
    artwork_id: "49a3d3a0-ce80-4bb2-96ce-da73fe283798",
  },
  {
    id: "7ea946b7-ddc8-43c0-b7fe-25e79c605010",
    style:"abstract",
    width: 500,
    height: 800,
    artwork_id: "7ea946b7-ddc8-43c0-b7fe-25e79c605010",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    style:"abstract",
    width: 600,
    height: 700,
    artwork_id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002", 
    style:"abstract",
    width: 800,
    height: 600,
    artwork_id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    
  }
]



module.exports = {
  users,
  pictures,
  artists,
  artworks,
  photos,
  paintings,
}