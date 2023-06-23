import { storage } from "@/appwrite";

export const getImageUrl = async (image: Image) => {
  const url = storage.getFilePreview(image.bucketId, image.fileId);

  return url;
};
