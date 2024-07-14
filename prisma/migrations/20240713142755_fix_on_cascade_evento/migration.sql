-- DropForeignKey
ALTER TABLE `FechaEvento` DROP FOREIGN KEY `FechaEvento_eventoId_fkey`;

-- DropForeignKey
ALTER TABLE `Ganador` DROP FOREIGN KEY `Ganador_eventoId_fkey`;

-- DropForeignKey
ALTER TABLE `Participante` DROP FOREIGN KEY `Participante_eventoId_fkey`;

-- AddForeignKey
ALTER TABLE `FechaEvento` ADD CONSTRAINT `FechaEvento_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Evento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participante` ADD CONSTRAINT `Participante_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Evento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ganador` ADD CONSTRAINT `Ganador_eventoId_fkey` FOREIGN KEY (`eventoId`) REFERENCES `Evento`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
