/*
  Warnings:

  - You are about to drop the column `ganadorId` on the `FechaSeleccionada` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `FechaSeleccionada` DROP FOREIGN KEY `FechaSeleccionada_ganadorId_fkey`;

-- AlterTable
ALTER TABLE `FechaSeleccionada` DROP COLUMN `ganadorId`;
