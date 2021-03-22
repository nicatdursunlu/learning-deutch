export default {
    state: {
        books: [
            {
                id: "dnejwnjevwe",
                title: "Harry Potter und der Stein der Weisen - 1",
                description: "First section of first book of Harry Potter",
                imageId: "lciwjeqwlpdpkjfi",
                parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
                youtubePlaylistId: 'vkmnjwfpoiewlmqmfq'
            },
            {
                id: "vel,mfipqepokic,l,w3",
                title: "Harry Potter und der Stein der Weisen - 2",
                description: "Second section of first book of Harry Potter",
                imageId: "lciwjeqwlpdpkjfi",
                parts: 7,
                level: ['B1', 'B2'],
                rating: 3.5,
                ratingsCount: 55,
                youtubePlaylistId: 'eco,dm3innfkemid3unf'
            },
            {
                id: "velcaaefofelpwlim3flw3",
                title: "Harry Potter und der Stein der Weisen - 3",
                description: "Third section of first book of Harry Potter",
                imageId: "lciwjeqwlpdpkjfi",
                parts: 7,
                level: ['A2'],
                rating: 2,
                ratingsCount: 80,
                youtubePlaylistId: 'ecfiudk2oijuf'
            },
        ]
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        }
    },
    actions: {},
    getters: {
        getBooks: (state) => state.books,
    }
}