import { NextResponse } from "next/server";
import Entry from '@/app/DB/Entry';  // Adjust the import path if necessary

export async function POST(request) {
    try {
       
        const { id, name, value } = await request.json();

       
        if (!id || !name || !value) {
            return NextResponse.json({ error: 'ID, name, and value are required.' }, { status: 400 });
        }

        // Perform the update operation
        const [updated] = await Entry.update(
            { name, value },
            { where: { id } }
        );

        // Check if the update was successful
        if (updated === 0) {
            return NextResponse.json({ error: 'Entry not found or no changes made.' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Entry updated successfully.' }, { status: 200 });

    } catch (error) {
        console.error('Error updating entry:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
