export function repeatWord(word, count){
    if(typeof word !== 'string' && typeof count !== 'number') return 'Неверные данные';
    if(typeof word !== 'string') return 'Первый аргумент должен быть строкой';
    if(count < 0 || typeof count !== 'number') return 'Второй аргумент должен быть положительным числом';
    
    let str = '';
    for(let i = 1; i <= count; i++){
      if(str === '') str += word;
      else str += ', ' + word;
    }
    return str;
  }