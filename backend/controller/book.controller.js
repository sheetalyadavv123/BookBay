import Book from "../model/book.model.js";

// GET books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST book (THIS CREATES DB)
export const createBook = async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;

    const newBook = new Book({
      name,
      title,
      price,
      category,
      image
    });

    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
