/*
  Warnings:

  - You are about to drop the column `applicantId` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `linkeding_link` on the `User` table. All the data in the column will be lost.
  - Added the required column `applicant_id` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `applying_for` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_applicantId_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "applicantId",
ADD COLUMN     "applicant_id" INTEGER NOT NULL,
ADD COLUMN     "applying_for" TEXT NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "linkeding_link",
ADD COLUMN     "linkedin_link" TEXT;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_applicant_id_fkey" FOREIGN KEY ("applicant_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
