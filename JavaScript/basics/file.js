function sayHello() {
    console.log('Hello')
}
setTimeout(() => {
    sayHello()
    console.log('World!')
}, 2000);

import fs from 'fs/promises';

fs.readFile('./file.txt', 'utf-8').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
