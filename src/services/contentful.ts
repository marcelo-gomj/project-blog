const { createClient } = require('contentful');
import { EntryContent, QueryEntry } from '../types/contentful';


function addPrefixPath(paths: string[]) {
   return paths.map(path => 'fields.' + path).join(',')
}

export async function getContents(
   options: QueryEntry | {},
   fullContent = true
) : Promise<EntryContent>  {
   const { getEntries } = createClient({
      space: process.env.SPACE_ID,
      accessToken: process.env.CONTENTFUL_DELIVERY
   })


   if (fullContent) {
      const template = [
         'title', 'url', 'category',
         'tags', 'poster', 'excerpt',
      ]

      const select = addPrefixPath(template);

      return await getEntries({
         content_type: 'content',
         select,
         ...options
      });

   } else {
      return await getEntries({
         content_type: 'content',
         ...options
      })
   }
}