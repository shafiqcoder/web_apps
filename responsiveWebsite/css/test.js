const teachers = ['Zia', 'Irfan', 'Muneeb', 'Aamir']
const titles = []
for (let i = 0; i < teachers.length; i++) {
    titles[i] = 'Mr. ' + teachers[i]
}

// console.log(titles)

// Declarative Code
const teachers2 = ['Zia', 'Irfan', 'Muneeb', 'Aamir'];
const titles2 = teachers2.map(name => "Mr." + name);
console.log(titles2)