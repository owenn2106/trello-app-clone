import { ID, storage } from "@/appwrite";

export const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "648dcef391bb3711df9a",
    ID.unique(),
    file
  );

  return fileUploaded;
};
