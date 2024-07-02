-- CreateTable
CREATE TABLE `FechaSeleccionada` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `participanteId` INTEGER NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FechaSeleccionada` ADD CONSTRAINT `FechaSeleccionada_participanteId_fkey` FOREIGN KEY (`participanteId`) REFERENCES `Participante`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
