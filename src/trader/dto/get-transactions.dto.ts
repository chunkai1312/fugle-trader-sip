import { IsIn, IsDateString, IsOptional } from 'class-validator';

export class GetTransactionsDto {
  @IsOptional()
  @IsIn(['0d', '3d', '1m', '3m'])
  duration: '0d' | '3d' | '1m' | '3m';

  @IsOptional()
  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate: string;
}
