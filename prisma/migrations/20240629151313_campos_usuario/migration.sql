/*
  Warnings:

  - Added the required column `cedula` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `cedula` VARCHAR(191) NOT NULL,
    ADD COLUMN `sector` VARCHAR(191) NOT NULL;
