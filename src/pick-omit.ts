// Pick e Omit são apenas utilitários.

interface Post {
    id: number,
    cover: string,
    title: string,
    datetime: Date,
    status: boolean,
    tags: string[],
    description: string
}

// Omit: serve para quando queremos utilizar todas as propriedades de uma interface, porém omitindo algumas delas.
type PostPreview = Omit<Post, 'id' | 'description'>

// Pick: Serve para quando queremos pegar algumas propriedades de uma interface
type PostDelete = Pick<Post, 'id'>
