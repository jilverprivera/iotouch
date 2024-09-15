import { PrismaClient } from "@prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";

const client = new PrismaClient();

export const Prisma = client.$extends(
  fieldEncryptionExtension({
    encryptionKey: process.env.NEXT_PUBLIC_ENCRYPTION_DB_KEY as string,
  })
);
