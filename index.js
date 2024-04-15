const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 }
    ],
    [
        { name: 'Alice', age: 27 },
        { name: 'Eve', age: 32 },
        { name: 'Charlie', age: 40 }
    ]
];

const names = data.map(array => array.map(item => item.name));
console.log(names);