const students = [
    {id: 15, name: 'Siraz'},
    {id: 25, name: 'nazmul'},
    {id: 35, name: 'jamil'},
    {id: 45, name: 'almoon'}
];

const ids = students.map(x=> x.id)

const bigger = students.filter(x=> x.id>30);
console.log(bigger)


