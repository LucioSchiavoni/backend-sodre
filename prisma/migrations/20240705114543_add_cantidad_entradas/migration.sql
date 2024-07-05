/*
  Warnings:

  - Added the required column `cantidad_entradas` to the `Participante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Participante` ADD COLUMN `cantidad_entradas` INTEGER NOT NULL;
