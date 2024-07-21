import { slugify } from "../utils";
import { createClient } from "./client";

const supabase = createClient();

export async function uploadFile(file: File, bucketName: string, fileName: string) {

    const fileExtension = file.name.split('.').pop() || '';
    const fileSlug = slugify(fileName);
    const filePath = `${fileSlug}.${fileExtension}`;

    const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true
    });

    if (error) throw error;

    const { data: { publicUrl } } = supabase
    .storage
    .from(bucketName)
    .getPublicUrl(filePath);

    return publicUrl;
}