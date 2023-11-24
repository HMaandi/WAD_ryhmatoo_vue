import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
          id: 0,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "",
          postText : "Yo",
          likes: 0
      },
        {
          id: 1,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "krattUUS.jpg",
          postText : "Yo",
          likes: 0
      },
        {
          id: 2,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "cat.jpg",
          postText : "Yo",
          likes: 0
      },
        {
          id: 3,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "cat.jpg",
          postText : "Yo",
          likes: 0
      },
        {
          id: 4,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "cat.jpg",
          postText : "Yo",
          likes: 0
        },
{
          id: 5,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "",
          postText : "Yo",
          likes: 0
        },
        {
          id: 6,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "cat.jpg",
          postText : "Yo",
          likes: 0
        },
        {
          id: 7,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "cat.jpg",
          postText : "Yo",
          likes: 0
        },
        {
          id: 8,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "krattUUS.jpg",
          postText : "Yo",
          likes: 0
        },
        {
          id: 9,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "cat.jpg",
          postText : "Yo",
          likes: 0
        },
        {
          id: 10,
          profilePic : "cat.jpg",
          date : "oct 23, 2023",
          postPic : "",
          postText : "Yo",
          likes: 0
        },      
    ]
  },
  getters: {
  },
  mutations: {
    IncreaseLikes(state, post) {
      const postId = state.posts.findIndex(x => x.id === post.id)
      state.posts[postId].likes += 1
    }
  },
  actions: {
    IncreaseLikesAct : act => {
      setTimeout(() => {
        act.commit("IncreaseLikes")
      }, 1000)
    }
  },
  modules: {
  }
})
