import {serializeToString} from '../algorithms/filters';

const filterTestObj = {
    "Vin rouge": true,
    "Vin blanc": true,
    "Vin rosé": false
}

const filterTestObj2 = {
    "Vin rouge": true,
}

const filterTestObj3 = {
    "Vin rouge": false
}



test('3 values, 3 true 1 false', ()=>{
    expect(serializeToString("tpcategorie",filterTestObj)).toBe('@tpcategorie==(Vin rouge,Vin blanc)');
})

test('1 true value', ()=>{
    expect(serializeToString("tpcategorie",filterTestObj2)).toBe('@tpcategorie==(Vin rouge)');
})

test('1 false value', ()=>{
    expect(serializeToString("tpcategorie",filterTestObj3)).toBe('');
})

test('no values', ()=>{
    expect(serializeToString("tpcategorie",{})).toBe('');
})