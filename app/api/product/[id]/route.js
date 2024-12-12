import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const { id } = params;

        const product = await client.product.findUnique({
            where: { id }
        });

        if (!product) {
            return NextResponse.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
};

export const PUT = async (request, { params }) => { 
     const { id } = params;
      const body = await request.json(); 
      const { title, rating, description, price, imageUrl } = body; 
      
      try {const updateProduct = await client.product.update({
        where: { id }, 
         data: { title, rating, description, price, imageUrl } 
        });
        if (!updateProduct) {
        
            return NextResponse.json( 
                
            { message: "Product not found" }, 
            { status: 404 }  ); 
        } 
        return NextResponse.json(updateProduct);
    
    } catch (error) { 
        return NextResponse.json(
            { message: error.message }, 
             { status: 500 }  );
            } };

export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        const product = await client.product.delete({
            where: { id }
        });
        return NextResponse.json(
            { message: "Product deleted successfully", product }
        );
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
};
