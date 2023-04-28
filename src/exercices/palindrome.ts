const list = ['juan', 'aba', 'paralelepipedo', 'aerea', 'avion', 'ojo'];

const isPalindromeList = (list: string[]): boolean[] => {
  return list.map((value: string) => {
    return value === value.split('').reverse().join('');
  });
};

const listIsPalindrome: boolean[] = isPalindromeList(list);

export { listIsPalindrome };
