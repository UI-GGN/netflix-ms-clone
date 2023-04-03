import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  @ApiBearerAuth('jwt')
  @ApiOkResponse({ type: String })
  getMe() {
    return 'hello';
  }
}
