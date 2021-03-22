export default {
    state: {
        books: [
            {
                id: "dnejwnjevwe",
                title: "Harry Potter und der Stein der Weisen - 1",
                description: "First section of first book of Harry Potter",
                imageId: "lciwjeqwlpdpkjfi",
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
                youtubePlaylistId: 'vkmnjwfpoiewlmqmfq',
                parts: [
                    {
                        id: "cvnhejfnjwfwf3f",
                        title: 'Kapital 1',
                        youtubeId: "cjnwnfnwqd"
                    },
                    {
                        id: "mijuifh3fko32",
                        title: 'Kapital 2',
                        youtubeId: "ijvoq;f93j8rj"
                    },
                    {
                        id: "okpjcoQ;20R938J83UHF",
                        title: 'Kapital 3',
                        youtubeId: "ijvoq;OKIJQIEVNKWDO2J"
                    },
                    {
                        id: "inuchwq4848woidjqu",
                        title: 'Kapital 4',
                        youtubeId: "ijvoq;f93j8rj"
                    }
                ]
            },
            {
                id: "vel,mfipqepokic,l,w3",
                title: "Harry Potter und der Stein der Weisen - 2",
                description: "Second section of first book of Harry Potter",
                imageId: "lciwjeqwlpdpkjfi",
                level: ['B1', 'B2'],
                rating: 3.5,
                ratingsCount: 55,
                youtubePlaylistId: 'eco,dm3innfkemid3unf',
                parts: [
                    {
                        id: "cvnhejfnjwfwf3f",
                        title: 'Kapital 1',
                        youtubeId: "cjnwnfnwqd"
                    },
                    {
                        id: "mijuifh3fko32",
                        title: 'Kapital 2',
                        youtubeId: "ijvoq;f93j8rj"
                    },
                    {
                        id: "okpjcoQ;20R938J83UHF",
                        title: 'Kapital 3',
                        youtubeId: "ijvoq;OKIJQIEVNKWDO2J"
                    },
                    {
                        id: "inuchwq4848woidjqu",
                        title: 'Kapital 4',
                        youtubeId: "ijvoq;f93j8rj"
                    }
                ]
            },
            {
                id: "velcaaefofelpwlim3flw3",
                title: "Harry Potter und der Stein der Weisen - 3",
                description: "Third section of first book of Harry Potter",
                imageId: "lciwjeqwlpdpkjfi",
                level: ['A2'],
                rating: 2,
                ratingsCount: 80,
                youtubePlaylistId: 'ecfiudk2oijuf',
                parts: [
                    {
                        id: "cvnhejfnjwfwf3f",
                        title: 'Kapital 1',
                        youtubeId: "cjnwnfnwqd"
                    },
                    {
                        id: "mijuifh3fko32",
                        title: 'Kapital 2',
                        youtubeId: "ijvoq;f93j8rj"
                    },
                    {
                        id: "okpjcoQ;20R938J83UHF",
                        title: 'Kapital 3',
                        youtubeId: "ijvoq;OKIJQIEVNKWDO2J"
                    },
                    {
                        id: "inuchwq4848woidjqu",
                        title: 'Kapital 4',
                        youtubeId: "ijvoq;f93j8rj"
                    }
                ]
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