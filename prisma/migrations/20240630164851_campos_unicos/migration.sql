/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cedula]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Usuario_username_key` ON `Usuario`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_cedula_key` ON `Usuario`(`cedula`);
