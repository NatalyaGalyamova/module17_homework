import { repeatWord } from "../repeatWord.js";

describe("tests for repeatWord function", () => {
  const positiveInteger = 3;
  const negativeNumber = -3;
  const string = 'Ура';

  it("should operate correctly with string and positive number", () => {
    expect(repeatWord(string, positiveInteger)).toBe(`${string}, ${string}, ${string}`);
  }),
  it("should operate correctly with invalid first argument", () => {
    expect(repeatWord(positiveInteger, positiveInteger)).toBe('Первый аргумент должен быть строкой');
  }),
  it("should operate correctly with invalid second argument", () => {
    expect(repeatWord(string, string)).toBe('Второй аргумент должен быть положительным числом');
  }),
    it("should operate correctly with negative number", () => {
      expect(repeatWord(string, negativeNumber)).toBe('Второй аргумент должен быть положительным числом');
    }),
    it("should operate correctly with invalid arguments", () => {
      expect(repeatWord(positiveInteger, string)).toBe('Неверные данные');
    });
});
