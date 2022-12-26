import type { CMSList } from '../../types/CMSList';
import type { Product } from './types';

/**
 * Populate CMS Data from an external API.
 */
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  async (listInstances: CMSList[]) => {
    // Get the filters instance
    //const [filtersInstance] = filtersInstances;

    // Get the list instance
    const [ listInstance ] = listInstances;
    console.log(listInstance)
    // Save a copy of the template
    const [firstItem] = listInstance.items;
    const itemTemplateElement = firstItem.element;

    // Fetch external data
    const products = await fetchProducts();
    console.log("products", products)

    // Remove existing items
    listInstance.clearItems();

    // Create the new items
    const newItems = products.map((product) => createItem(product, itemTemplateElement));

    // Populate the list
    await listInstance.addItems(newItems);

    // Get the template filter
  /* const filterTemplateElement = filtersInstance.form.querySelector<HTMLLabelElement>('[data-element="filter"]');
    if (!filterTemplateElement) return;

    // Get the parent wrapper
    const filtersWrapper = filterTemplateElement.parentElement;
    if (!filtersWrapper) return;

    // Remove the template from the DOM
    filterTemplateElement.remove();

    // Collect the categories
    const categories = collectCategories(products);

    // Create the new filters and append the to the parent wrapper
    for (const category of categories) {
      const newFilter = createFilter(category, filterTemplateElement);
      if (!newFilter) continue;

      filtersWrapper.append(newFilter);
    }

    // Sync the CMSFilters instance with the new created filters
    filtersInstance.storeFiltersData();
    */
  },
]);

/**
 * Fetches fake products from Fake Store API.
 * @returns An array of {@link Product}.
 */
const fetchProducts = async () => {
  try {
    const response = await fetch('https://v1.nocodeapi.com/terry/webflow/HorPXlqEWbZczpTD');
    const json = await response.json();
    const data: Product[] = json["items"];
 
    return data;
  } catch (error) {
    return [];
  }
};

/**
 * Creates an item from the template element.
 * @param product The product data to create the item from.
 * @param templateElement The template element.
 *
 * @returns A new Collection Item element.
 */
const createItem = (product: Product, templateElement: HTMLDivElement) => {
  // Clone the template element
  const newItem = templateElement.cloneNode(true) as HTMLDivElement;

  
  // Query inner elements
  const image = newItem.querySelector<HTMLImageElement>('[data-element="image"]');
  const title = newItem.querySelector<HTMLHeadingElement>('[data-element="title"]');
  const price = newItem.querySelector<HTMLParagraphElement>('[data-element="price"]');
  //const category = newItem.querySelector<HTMLParagraphElement>('[data-element="category"]');
  const description = newItem.querySelector<HTMLParagraphElement>('[data-element="description"]');

  // Populate inner elements
 
  if (image && product['thumbnail-16x9'] != undefined) image.src = product['thumbnail-16x9'].url;
  if (title) title.textContent = product.name;
  if (price) price.textContent = product.price.toString();
 // if (category) category.textContent = product.category;
  if (description) description.textContent = product['short-description'];

  return newItem;
};

/**
 * Collects all the categories from the products' data.
 * @param products The products' data.
 *
 * @returns An array of {@link Product} categories.
 */
const collectCategories = (products: Product[]) => {
  const categories: Set<Product['category']> = new Set();

  for (const { category } of products) {
    categories.add(category);
  }

  return [...categories];
};

/**
 * Creates a new radio filter from the template element.
 * @param category The filter value.
 * @param templateElement The template element.
 *
 * @returns A new category radio filter.
 */
const createFilter = (category: Product['category'], templateElement: HTMLLabelElement) => {
  // Clone the template element
  const newFilter = templateElement.cloneNode(true) as HTMLLabelElement;

  // Query inner elements
  const label = newFilter.querySelector('span');
  const radio = newFilter.querySelector('input');

  if (!label || !radio) return;

  // Populate inner elements
  label.textContent = category;
  radio.value = category;

  return newFilter;
};
