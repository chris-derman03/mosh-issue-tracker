/*
  Warnings:

  - You are about to drop the `issuearchive` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `issuearchive` DROP FOREIGN KEY `IssueArchive_assignedToUserId_fkey`;

-- DropTable
DROP TABLE `issuearchive`;
