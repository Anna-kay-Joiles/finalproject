import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, rating, description, price, imageUrl } = body;

    // Ensure rating and price are floats
    const parsedRating = parseFloat(rating);
    const parsedPrice = parseFloat(price);

    const newProduct = await client.product.create({
      data: {
        title,
        rating: parsedRating,
        description,
        price: parsedPrice,
        imageUrl,
      },
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    // Fetch all products using Prisma client
    const products = await client.product.findMany();

    // Return the list of products in JSON format
    return NextResponse.json(products);
  } catch (error) {
    // Return a 500 error with the error message
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
