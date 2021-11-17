const Factory = require('rosie').Factory;
const Gimei = require('@huideyeren/type-gimei').Gimei;

const namae1 = Gimei.randomName();
const Address1 = Gimei.randomAddress();
const namae2 = Gimei.randomName();
const Address2 = Gimei.randomAddress();
const namae3 = Gimei.randomName();
const Address3 = Gimei.randomAddress();

Factory.define('hoge').attrs({
    last_name1: namae1.last.kanji(),
    first_name1: namae1.first.kanji(),
    last_name_kana1: namae1.last.katakana(),
    first_name_kana1: namae1.first.katakana(),
    Address_kanji1: Address1.kanji(),
    Address_kana1: Address1.katakana(),
    last_name2: namae2.last.kanji(),
    first_name2: namae2.first.kanji(),
    last_name_kana2: namae2.last.katakana(),
    first_name_kana2: namae2.first.katakana(),
    Address_kanji2: Address2.kanji(),
    Address_kana2: Address2.katakana(),
    last_name3: namae3.last.kanji(),
    first_name3: namae3.first.kanji(),
    last_name_kana3: namae3.last.katakana(),
    first_name_kana3: namae3.first.katakana(),
    Address_kanji3: Address3.kanji(),
    Address_kana3: Address3.katakana(),
});

const names = Factory.build('hoge');

console.log(names.last_name1 + " " + names.first_name1);
console.log(names.last_name_kana1 + " " + names.first_name_kana1);
console.log(names.Address_kanji1)
console.log(names.Address_kana1)
console.log("-------")
console.log(names.last_name2 + " " + names.first_name2);
console.log(names.last_name_kana2 + " " + names.first_name_kana2);
console.log(names.Address_kanji2)
console.log(names.Address_kana2)
console.log("-------")
console.log(names.last_name3 + " " + names.first_name3);
console.log(names.last_name_kana3 + " " + names.first_name_kana3);
console.log(names.Address_kanji3)
console.log(names.Address_kana3)
