/*
  Warnings:

  - Added the required column `ganadorId` to the `FechaSeleccionada` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FechaSeleccionada` ADD COLUMN `ganadorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `FechaSeleccionada` ADD CONSTRAINT `FechaSeleccionada_ganadorId_fkey` FOREIGN KEY (`ganadorId`) REFERENCES `Ganador`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
