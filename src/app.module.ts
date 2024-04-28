import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./modules/users/users.module";
import { ProjectModule } from "./modules/projects/projects.module";
import { TaskModule } from "./modules/tasks/tasks.module";
import { TypeOrmConfig } from "./modules/typeorm/modules/config/config.module";
import { CacheModule } from "@nestjs/cache-manager";
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from "@nestjs/core";
import { AuthGuardService } from "./modules/auth/auth-guard/auth-guard.service";

@Module({
  imports: [
    UsersModule,
    ProjectModule,
    TaskModule,
    TypeOrmConfig,
    CacheModule.register({
      isGlobal: true
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuardService,
    },
  ],
})

export class AppModule { }