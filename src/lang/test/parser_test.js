//
// parser test
//
const assert = require('assert');
const Tokenizer = require('../src/tokenizer.js').Tokenizer;
const Parser = require('../src/parser.js').Parser;

describe('parser', ()=>{

  it('let', ()=> {
    const list = Tokenizer.split("a = 3");
    const ts = Tokenizer.listToString(list);
    assert.equal(ts, "a:WORD|=:EQ|3:NUM");
    const node = Parser.parse(list);
    const s = node.toStringAll();
    assert.equal(s, "NOP:#|LET:a|VALUE:3");
  });
  it('print', ()=> {
    const list = Tokenizer.split("30を表示");
    const node = Parser.parse(list);
    const s = node.toStringAll();
    assert.equal(s, "NOP:#|PRINT:|VALUE:30");
  });
  it('print with noise', ()=> {
    const list = Tokenizer.split("30を表示。\n");
    const node = Parser.parse(list);
    const s = node.toStringAll();
    assert.equal(s, "NOP:#|PRINT:|VALUE:30");
  });

});
