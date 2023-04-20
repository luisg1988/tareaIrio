import {   IsString, MinLength, IsBoolean, IsOptional} from 'class-validator'
export class editnote 
{
    @IsString()
    @MinLength(3)
    name?: string
    @IsString()
    @MinLength(3)
    description?: string
    @IsOptional()
    @IsBoolean()
    active?: boolean
    updated_at?: Date
}