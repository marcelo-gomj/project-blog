export interface QueryEntry {
   content_type?: string
   sort?: string
   limit?: number
   skip?: number
   select?: string
}

export interface EntryContent {
   sys: { type: string },
   total: number,
   skip: number,
   limit: number,
   items: EntryField[],
}

interface EntrySys {
   space: [Object],
   id: string,
   type: string,
   createdAt: string,
   updatedAt: string,
   environment: [Object],
   revision: number,
   contentType: [Object],
   locale: string
}

export interface EntryField {
   metadata: { tags: [] },
   sys: EntrySys,
   fields: EntryPost
}

export interface EntryPost {
   title: String,
   url: String,
   category: string[],
   tags: string[],
   poster: {
      metadata: { tags: [] },
      sys: EntrySys,
      fields: {
         title: string,
         description: string,
         file: {
            url: string,
            fileName: string,
            contentType: string,
            details: {
               size: number,
               image: {
                  width: number,
                  height: number
               }
            }
         }
      }
   },
   excerpt: String,
   content: any
}



