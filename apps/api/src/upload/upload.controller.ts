import { ChatService } from 'src/chat/chat.service';
import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    BadRequestException,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import * as fs from 'fs';

@Controller('upload')
export class UploadController {
    constructor(private readonly chatService: ChatService) {}
      
        @Post()
        @UseInterceptors(
          FileInterceptor('file', {
            storage: diskStorage({
              destination: './uploads', // opcional: salva arquivo localmente
              filename: (req, file, cb) => {
                const uniqueName =
                  Date.now() + '-' + Math.round(Math.random() * 1e9) + extname(file.originalname);
                cb(null, uniqueName);
              },
            }),
          }),
        )
        async uploadFile(@UploadedFile() file: any) {
          if (!file) {
            throw new BadRequestException('No file provided');
          }
          const buffer = fs.readFileSync(file.path);
          const mimetype = file.mimetype;
          const originalname = file.originalname;
      
          const fileLike = new File([buffer], originalname, { type: mimetype });
      
          const result = await this.chatService.extractText(fileLike);
      
          fs.unlinkSync(file.path);
      
          return result;
        }
}
      

   /* @Post()
    async upload(@Body() res){
        const { formData } = await res.formData();
        const file = formData.get('file') as File;
        
        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        return this.chatService.extractText(file);
    }*/
