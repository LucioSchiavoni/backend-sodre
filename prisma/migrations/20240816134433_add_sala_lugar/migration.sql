/*
  Warnings:

  - Added the required column `lugar` to the `Evento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sala` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Evento` ADD COLUMN `lugar` VARCHAR(191) NOT NULL,
    ADD COLUMN `sala` VARCHAR(191) NOT NULL;
