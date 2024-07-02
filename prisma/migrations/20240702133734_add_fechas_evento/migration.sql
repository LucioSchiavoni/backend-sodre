/*
  Warnings:

  - You are about to drop the column `fecha_evento` on the `Evento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Evento` DROP COLUMN `fecha_evento`;

-- CreateTable
CREATE TABLE `FechaEvento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` VARCHAR(191) NOT NULL,
    `eventoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FechaEvento` ADD CONSTRAINT `FechaEvento_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Evento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
