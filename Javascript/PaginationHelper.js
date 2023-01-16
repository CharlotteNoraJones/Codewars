/*
For this exercise you will be strengthening your page-fu mastery. 
You will complete the PaginationHelper class, which is a utility class helpful for 
querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many 
items will be allowed per each page. The types of values contained within the 
collection/array are not relevant. 
*/

class PaginationHelper {

	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
		// returns the number of items within the entire collection
		return this.collection.length;
	}
	pageCount() {
		// returns the number of pages
		return Math.ceil(this.itemCount() / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
		// returns the number of items on the current page. page_index is zero based.
		// this method should return -1 for pageIndex values that are out of range

		if (pageIndex >= this.pageCount() || pageIndex < 0) {return -1;}
		if (this.itemCount() % this.itemsPerPage == 0) {return this.itemsPerPage;}
		return pageIndex == this.pageCount() - 1 ? this.itemCount() % this.itemsPerPage : this.itemsPerPage;
	}
	pageIndex(itemIndex) {
		// determines what page an item is on. Zero based indexes
		// this method should return -1 for itemIndex values that are out of range
		if (itemIndex >= this.itemCount() || itemIndex < 0) {return -1;}
		if (itemIndex == 0) {return 0;}
		return Math.floor(itemIndex / this.itemsPerPage);
	}
}


const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const helper = new PaginationHelper(collection, 5);
console.log(helper.pageItemCount(2));
