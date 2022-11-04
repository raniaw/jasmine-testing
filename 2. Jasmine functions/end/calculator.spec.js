describe('calculator.js', function() {
  it('should add numbers to total', function() {
    const calculator = new Calculator();
    calculator.add(5);

    expect(calculator.total).toBe(5);
  });

  it('should subtract numbers from total', function() {
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);

    expect(calculator.total).toBe(25);
  });

  it('should multiply total by number', function() {
    const calculator = new Calculator();
    calculator.total = 100;
    calculator.multiply(2);

    expect(calculator.total).toBe(200);
  });

  it('should divide total by number', function() {
    const calculator = new Calculator();
    calculator.total = 200;
    calculator.divide(2);
    expect(calculator.total).toBe(100);
    expect(calculator.total).toBe(100);
  });

  it('should initialize the total', function(){
    const calculator = new Calculator();
    expect(calculator.total).toBe(0);
    expect(calculator.total).toBeFalsy();
  })

  it('can be instanted', function(){
    const calculator = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator).toBeTruthy();
    expect(calculator2).toBeTruthy();
    expect(calculator).toEqual(calculator2);
  })

  it('can be instantes unique', function(){
    const calculator = new Calculator();
    const calculator2 = new Calculator();
    expect(calculator).not.toBe(calculator2);
    expect(calculator.constructor.name).toContain('Calc');
  })

  it('has common operations', function(){
    const calculator = new Calculator();
    expect(calculator.add).toBeDefined();  // .not.toBeUndefined();
    expect(calculator.subtract).toBeDefined();  // .not.toBeUndefined();
    expect(calculator.multiply).toBeDefined();  // .not.toBeUndefined();
    expect(calculator.divide).toBeDefined();  // .not.toBeUndefined();
  })

  it('can overwrite total', function(){
    const calculator = new Calculator();
    calculator.total = null;
    expect(calculator.total).toBeNull();  // .not.toBeUndefined();
    expect(calculator.divide).not.toBeUndefined();  // .not.toBeUndefined();
  })

});
