import type { CMSList } from '../../types/CMSList';
import type { Product } from './types';

/**
 * Populate CMS Data from an external API.
 */
 window.fsAttributes = window.fsAttributes || [];
 window.fsAttributes.push([
   'cmsload',
   async (listInstances: CMSList[]) => {
    console.log("listInstances", listInstances)
    Promise.all([
                loadVideos("videos-wrap_1", listInstances, 1),
                loadVideos("videos-wrap_2", listInstances, 20)
              ])
  
   },
 ]);


async function loadVideos(wrapper: String, listInstances: CMSList[], limit: Number, offset = 0)
{
   // Get the list instance
   const [ listVideos ] = listInstances.filter(s => s != null && s.list != null && s.wrapper.className.includes(wrapper));
   console.log("loadVideos", listVideos)
   console.log("listVideos.items", listVideos.items)
   // Save a copy of the template
   const [firstItem] = listVideos.items;
   const itemTemplateElement = firstItem.element;

   // Fetch external data
   var payload = JSON.stringify({
      "query": {
        "_archived": false,
        "_draft": false,
        "tags": ["63bddef3b4cbe6da8deb7ac1"],
        "type-of-content": "ab5fdd205d97947450a63f18343c374c"
      },
      "sort":[
        "-created-on"
      ]
  });
   const videos = await fetchVideos(wrapper, payload, limit, offset);
   console.log("videos", videos)

   // Remove existing items
   listVideos.clearItems();

   // Create the new items
   const newItems = videos.map((video) => createContentItem(video, itemTemplateElement));

   // Populate the list
   listVideos.addItems(newItems).then(function(){

    const wrapperShow = document.getElementsByClassName(wrapper) as HTMLCollection | null;
    
    const loadingHidden = document.getElementsByClassName('loading-' + wrapper) as HTMLCollection | null;
    console.log('loading-', loadingHidden)
    if (loadingHidden.length > 0) {
     loadingHidden[0].classList.add('hidden');
    }
    if (wrapperShow != null) {
     wrapperShow[0].classList.remove('hidden');
    }

     slider1();
     //Webflow.require('ix2').init() //---> reinicializa la interaccion
   });
}

/**
 * Fetches videos from webflow cms API
 * @returns An array of {@link Content}.
 */
 const fetchVideos = async (list: String, payload : String, limit: Number, offset: Number) => {
  try 
  {
    const headers = new Headers ({ 
      'Content-Type': 'application/json' , 
      "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NDE0NjU5OTAsImV4cCI6MTY3MzAwMTk5MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.Ak4VZ-YdIxtHVqDuZ7iRHbyR-L6C64n6W7fKCfVEi-8" 
    });
    
   
    var requestOptions = {
      method: "POST",
      headers,
      body: payload
    };

    var collectionId = "63bddef3b4cbe6e3cbeb6df2";
    var endpoint = 'https://w-api-cms.onrender.com/api/' + list + '/' + collectionId +'/items';
    
    if (limit != 0 || limit != undefined)
    {
      endpoint += "/limit/" + limit;
    }

    if (offset != 0 || offset != undefined)
    {
      endpoint += "/offset/" + offset;
    }

    const response = await fetch(endpoint, requestOptions);
  
    const json = await response.json();
   console.log("json", json)
    const data: Content[] = json["data"];
   
    return data;

  } catch (error) {
    return [];
  }
};


/**
 * Creates an item from the template element.
 * @param content The product data to create the item from.
 * @param templateElement The template element.
 *
 * @returns A new Collection Item element.
 */
 const createContentItem = (content: Content, templateElement: HTMLDivElement) => {
  // Clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  
  // Query inner elements
  const image = newItem.querySelector<HTMLImageElement>('[data-element="image"]');
  const title = newItem.querySelector<HTMLHeadingElement>('[data-element="title"]');
  const author = newItem.querySelector<HTMLParagraphElement>('[data-element="author"]');
  const episode_title_podcast = newItem.querySelector<HTMLParagraphElement>('[data-element="episode-title-podcast"]');
  const url = newItem.querySelector<HTMLAnchorElement>('[data-element="url"]');

  // Populate inner elements
  if (image) image.src = "";
  if (episode_title_podcast) episode_title_podcast.textContent = "";
  if (title) title.textContent = "";
  if (author) author.textContent = "";
  if (url) url.href = "";

  if (image && content['thumbnail'] != undefined) image.src = content['thumbnail'].url;
  if (title) title.textContent = content.name;
  if (episode_title_podcast && content['episode-title-podcast'] != undefined) episode_title_podcast.textContent = content["episode-title-podcast"];
  if (author && content['choose-director-video-producer-podcast-or-author-blog-for-the-item'] != undefined) author.textContent = content["choose-director-video-producer-podcast-or-author-blog-for-the-item"].name;
  if (url) url.href = "/content/" + content.slug;

  //if (price) price.textContent = product.price;
  //if (author) author.textContent = product.author;
  //if (description) description.textContent = product['short-description'];

  return newItem;
};
