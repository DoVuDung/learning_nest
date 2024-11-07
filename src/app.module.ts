/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FilmModule } from "./film/film.module";
import { PrismaService } from "./prisma-module/prisma.service";
import { PrismaModule } from "./prisma-module/prisma-module.module";
import { ActorController } from "./actor/actor.controller";
@Module({
  imports: [PrismaModule, FilmModule],
  controllers: [AppController, ActorController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
