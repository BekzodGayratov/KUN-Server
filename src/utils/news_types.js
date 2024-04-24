// Array of different types of news
const newsTypes = [
  {
    name: "O'zbekiston",
    id: "c79f65ac-c366-48f8-8fa6-2147a358b1b3",
  },
  {
    name: "Jahon",
    id: "a2365cb6-feeb-4c7c-a184-e75cca0b4dca",
  },
  {
    name: "Jamiyat",
    id: "8d4f2746-ae93-4556-aa9d-a000c4f03961",
  },
  {
    name: "Fan-Texnika",
    id: "0fe8a5c8-ebc4-4c47-9e58-9a2c84d93122",
  },
  {
    name: "Sport",
    id: "eddd72a0-c198-40b4-8786-ef07085cb199",
  },
];

/**
 * Finds a news type by its ID.
 * @param {string} userTypeId - The ID of the news type.
 * @returns {Object|null} The news type object if found, otherwise null.
 */
function getNewsTypeById(userTypeId) {
  // Find the object in newsTypes array where id matches userTypeId
  const newsType = newsTypes.find((type) => type.id === userTypeId);
  return newsType !== undefined ? newsType : null;
}

module.exports = {
  newsTypes,
  getNewsTypeById,
};
