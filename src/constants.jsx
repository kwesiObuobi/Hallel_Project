
const clubsAndHouses = [
    {
      id: 1,
      img_url: "https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2020/03/Gathering-Students.jpg",
      title: "Inkoomsah Hall",
      images: [
        {
          id: 1,
          url: "https://supadupanews.com/wp-content/uploads/2021/11/PSX_20211128_021841.jpg"
        },
        {
          id: 2,
          url: "https://sparkmag.live/wp-content/uploads/2018/03/carwash-and-dog-show_158-1280x620.jpg"
        },
        {
          id: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUG4XWLHF6VBQTGBpuZhIeCz88q2OPCuuvQQ&usqp=CAU"
        }
      ]
    },
    {
      id: 2,
      img_url: "https://knowledgeworks.org/wp-content/uploads/2016/07/Teacher-Working-300x200.jpg",
      title: "Godsaye-Simpson House",
      images: [
        {
          id: 1,
          url: "https://supadupanews.com/wp-content/uploads/2021/11/PSX_20211128_021841.jpg"
        },
        {
          id: 2,
          url: "https://sparkmag.live/wp-content/uploads/2018/03/carwash-and-dog-show_158-1280x620.jpg"
        },
        {
          id: 3,
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUG4XWLHF6VBQTGBpuZhIeCz88q2OPCuuvQQ&usqp=CAU"
        }
      ]
    },
    {
      id: 3,
      img_url: "https://www.cru.org/communities/hs/wp-content/uploads/sites/18/2020/03/Gathering-Students.jpg",
      title: "Rebecca"
    },
    {
      id: 4,
      img_url: "https://knowledgeworks.org/wp-content/uploads/2016/07/Teacher-Working-300x200.jpg",
      title: "Goavek"
    },
  ]

const leadership = [
  {
    id: 1,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Mrs. Patience Lamptey",
    role: "Head Mistress"
  },
  {
    id: 2,
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 3,
    imgUrl: "https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 4,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Name Goes Here",
    role: "Head Mistress"
  }
]

const teachers = [
  {
    id: 1,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 2,
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 3,
    imgUrl: "https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 4,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 5,
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 6,
    imgUrl: "https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 7,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 8,
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 9,
    imgUrl: "https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 10,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 11,
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 12,
    imgUrl: "https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg",
    personName: "Name Goes Here",
    role: "Head Mistress"
  },
  {
    id: 13,
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    personName: "Name Goes Here",
    role: "Head Mistress"
  }
]

const classSpotlights = [
  {
    id: 1,
    name: "Best Student (Class 1)",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex officia officiis quisquam dolor corporis quo, velit sapiente, deleniti blanditiis doloribus autem tempora quidem suscipit sint illo libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
  {
    id: 2,
    name: "Best Student (Class 2)",
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex officia officiis quisquam dolor corporis quo, velit sapiente, deleniti blanditiis doloribus autem tempora quidem suscipit sint illo libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
  {
    id: 3,
    name: "Best Student (Class 3)",
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetu, velit sapiente, deleniti blanditiis doloribus autem tempora quidem suscipit sint illo libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
  {
    id: 4,
    name: "Best Student (Class 4)",
    imgUrl: "https://pbs.twimg.com/profile_images/830779586661203968/TeCxvWqF_400x400.jpg",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Quisquam dolor corpoficia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
  {
    id: 5,
    name: "Best Student (Class 5)",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolordoloribus autem t libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
  {
    id: 6,
    name: "Best Student (Class 6)",
    imgUrl: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/122302609_3010058792433819_2789752901117058824_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEi44etEnnP8jeLULyDeampfhw0Omzl3Ol-HDQ6bOXc1SLF4GIxKLLYK2Gfk1axsgoWmBwFzMTcWlmNxAKXQK4&_nc_ohc=fd_-2_csI0kAX_uropG&_nc_ht=scontent.facc5-1.fna&oh=00_AfBE82AEqu9RCXB3FMSZVXQ4JAgZF_U3TxmDOXdJba6BJA&oe=640B13D7",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lc ex officia officiis quisquam dolor corporis quo, velit sapiente, deleniti blanditiis doloribus autem tempora quidem suscipit sint illo libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
  {
    id: 7,
    name: "Best Student (Class 7)",
    imgUrl: "https://pbs.twimg.com/profile_images/951905090432045057/ycrV1ioO_400x400.jpg",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ex officia officiis quisquam dolor corporis quo, velit sapiente, deleniti blanditiis doloribus autem tempora quidem suscipit sint illo libero amet? Officia perferendis iusto nobis? Tempore, labore quae maxime deleniti provident odit adipisci repellat doloribus aut nesciunt sapiente non enim iure voluptas ducimus, repudiandae corrupti beatae veritatis in. Ad ea officiis fugiat at enim quos quo provident accusantium dolor assumenda. Ullam qui dolorum eaque, maxime fuga ratione aliquid nemo a rem incidunt autem, repudiandae doloribus quam veritatis facilis illum! Eos alias hic nesciunt deserunt porro, eaque dicta ad voluptas illum. Dignissimos, aliquam?"
  },
]

const sportsSpotLights = [
  {
    id: 1,
    name: "Best High Jumper",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi"
  },
  {
    id: 2,
    name: "Best Long Jumper",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi"
  },
  {
    id: 3,
    name: "Best Best Best",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi"
  },
  {
    id: 4,
    name: "Best Best Best",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi"
  },
  {
    id: 5,
    name: "Best Best Best",
    imgUrl: "https://pbs.twimg.com/media/D2qtOY8WkAEnGd1?format=jpg&name=4096x4096",
    student: "Emmanuel GodIs WithUs Greene",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi Lorem, ipsum dolor sit amet consectetur adipisi"
  },
]

  export {clubsAndHouses, leadership, teachers, classSpotlights, sportsSpotLights}