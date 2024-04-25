/**
 * @swagger
 * components:
 *   schemas:
 *     NewsItem:
 *       type: object
 *       properties:
 *         img:
 *           type: object
 *           properties:
 *             url:
 *               type: string
 *               description: URL of the image.
 *             caption:
 *               type: string
 *               description: Caption of the image.
 *           example:
 *             url: "/uploads/file-1714039312610.jpeg"
 *             caption: "Uzauto"
 *         type:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: Name of the news type.
 *             id:
 *               type: string
 *               description: ID of the news type.
 *           example:
 *             name: "Jahon"
 *             id: "a2365cb6-feeb-4c7c-a184-e75cca0b4dca"
 *         _id:
 *           type: string
 *           description: Unique identifier of the news item.
 *           example: "662a2a30005b482ee5abde26"
 *         title:
 *           type: string
 *           description: Title of the news item.
 *           example: "Uzauto"
 *         subtitle:
 *           type: string
 *           description: Subtitle of the news item.
 *           example: "Salom"
 *         content:
 *           type: string
 *           description: Content of the news item.
 *           example: "Nima gap"
 *         read_count:
 *           type: integer
 *           description: Number of times the news item has been read.
 *           example: 0
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Date and time when the news item was created.
 *           example: "2024-04-25T10:02:24.141Z"
 *       required:
 *         - img
 *         - type
 *         - _id
 *         - title
 *         - subtitle
 *         - content
 *         - read_count
 *         - created_at
 */

/**
 * @swagger
 * /api/news:
 *   get:
 *     summary: Retrieve all news items
 *     description: Retrieve a list of all news items.
 *     responses:
 *       200:
 *         description: A list of news items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: Number of news items.
 *                   example: 4
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/NewsItem'
 */
