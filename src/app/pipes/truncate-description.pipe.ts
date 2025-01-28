import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDescription'
})
export class TruncateDescriptionPipe implements PipeTransform {
  transform(description: string, maxLength: number = 1000): string {
    if (!description) return '';

    if (description.length <= maxLength) {
      return description;
    }

    // Corta até o limite e procura o último ponto final
    const truncated = description.slice(0, maxLength);
    const lastPeriodIndex = truncated.lastIndexOf('.');

    if (lastPeriodIndex !== -1) {
      return truncated.slice(0, lastPeriodIndex + 1); // Inclui o ponto final
    }

    // Se não encontrar ponto final, corta na posição máxima
    return truncated + '...';
  }
}
